import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasModule } from './receitas/receitas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ReceitasController } from './receitas/receitas.controller';
import { IngredientesController } from './ingredientes/ingredientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceitasService } from './receitas/receitas.service';
import { IngredientesService } from './ingredientes/ingredientes.service';

@Module({
  imports: [ReceitasModule, IngredientesModule, MongooseModule.forRoot('mongodb://localhost/receita')],
  controllers: [AppController, ReceitasController,IngredientesController],
  providers: [AppService, ReceitasService, IngredientesService],
})
export class AppModule {}
