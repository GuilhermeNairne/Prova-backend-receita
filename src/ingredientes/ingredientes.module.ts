import { Module } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingrediente, IngredienteSchema } from './schema/ingrediente.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ingrediente.name, schema: IngredienteSchema }])],
  controllers: [IngredientesController],
  providers: [IngredientesService],  
  exports: [IngredientesService]
})
export class IngredientesModule {}
