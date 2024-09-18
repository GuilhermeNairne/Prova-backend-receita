import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ReceitasModule } from './receitas/receitas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/receitas'), IngredientesModule, ReceitasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}