import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ReceitaDocument = HydratedDocument<Receita>;

@Schema()
export class Receita {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  tempoPreparo: number;

  @Prop({ required: true })
  custoAproximado: number;

  @Prop({
    type: [mongoose.Types.ObjectId],
    ref: "Ingrediente",
    required: false,
  })
  ingredientes: mongoose.Types.ObjectId[];
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);
