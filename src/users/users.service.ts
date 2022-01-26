import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async create(createUserDto: CreateUserDto) {
		try {
			if(createUserDto.password)
				createUserDto.password = bcrypt.hashSync(createUserDto.password, 20);

			const user = new this.userModel(createUserDto);
			return await user.save();
		} catch (erro) {
			throw new HttpException('Erro de cadastro!', HttpStatus.BAD_REQUEST);
		}
	}

	async findAll() {
		return await this.userModel.find()
			.select('name')
			.select('username')
			.select('role')
			.select('sector');
	}

	async findOne(id: string) {
		return await this.userModel.findById(id)
			.select('name')
			.select('username')
			.select('role')
			.select('sector');
	}

	async findUsername(username: string) {
		return await this.userModel.findOne({
			'username': username
		});
	}

	async update(id: string, updateUserDto: UpdateUserDto) {
		return await this.userModel.findByIdAndUpdate(
			{
				_id: id,
			},
			{
				$set: updateUserDto,
			},
			{
				new: true,
			}
		).catch(function () {
			throw new HttpException("Erro de atualização!", HttpStatus.BAD_REQUEST);
		});
	}

	remove(id: string): Object {
		return this.userModel.deleteOne({
			_id: id,
		})
		.exec()
		.catch(function () {
			throw new HttpException("Erro ao deletar!", HttpStatus.BAD_REQUEST);
		});
	}
}
