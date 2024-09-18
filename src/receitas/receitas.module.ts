import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Receita, ReceitaSchema } from './schema/receita.schema';
import { IngredientesModule } from 'src/ingredientes/ingredientes.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Receita.name, schema: ReceitaSchema }]),
  IngredientesModule
  ],
  controllers: [ReceitasController],
  providers: [ReceitasService],
  
})
export class ReceitasModule {}
