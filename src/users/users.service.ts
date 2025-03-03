import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    /**
     * Das ist ein NestJS-Dekorator, der sagt: "Ich brauche Zugriff auf die Datenbanktabelle für die User-Entity".
     * Es sorgt dafür, dass NestJS automatisch das passende Repository für die User-Tabelle bereitstellt.
     * Ein Repository ist wie ein Werkzeugkasten, mit dem du Datenbankoperationen durchführen kannst, z. B.:
     * Einen neuen Benutzer erstellen (save()).
     * Einen Benutzer suchen (find()).
     * Einen Benutzer löschen (delete()).
     *
     */

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException('هذا البريد الإلكتروني مسجل بالفعل.');
    }

    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found.`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
    return { message: 'تم حذف المستخدم بنجاح.' };
  }
}
