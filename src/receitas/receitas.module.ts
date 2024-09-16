import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceitaSchema } from './entities/receita.schema';

@Module({
  controllers: [ReceitasController],
  providers: [ReceitasService],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/receita'),
    MongooseModule.forFeature([{ name: 'Receita', schema: ReceitaSchema }]),
  ],
})
export class ReceitasModule {}
