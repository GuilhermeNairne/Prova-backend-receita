import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type IngredienteDocument = HydratedDocument<Ingrediente>;

@Schema()
export class Ingrediente {

  @Prop({required: true})
  nome: string;
  
}

export const IngredienteSchema = SchemaFactory.createForClass(Ingrediente);