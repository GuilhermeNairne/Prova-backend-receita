import mongoose from "mongoose";

export const ReceitaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  ingredientes: [{ type: String, required: true }],
  tempoPreparo: { type: Number, required: true },
  custoAproximado: { type: Number, required: true },
});