import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectModel('Receita') public receitasModel: Model<CreateReceitaDto>,
  ) {}

  create(createReceitaDto: CreateReceitaDto) {
    const createReceita = new this.receitasModel(createReceitaDto);
    return createReceita.save();
  }

  findAll() {
    return `This action returns all receitas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receita`;
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return `This action updates a #${id} receita`;
  }

  remove(id: number) {
    return `This action removes a #${id} receita`;
  }
}
