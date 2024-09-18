import { Injectable } from "@nestjs/common";
import { CreateIngredienteDto } from "./dto/create-ingrediente.dto";
import { UpdateIngredienteDto } from "./dto/update-ingrediente.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Ingrediente, IngredienteDocument } from "./schema/ingrediente.schema";
import mongoose, { Model } from "mongoose";

@Injectable()
export class IngredientesService {
  constructor(
    @InjectModel(Ingrediente.name)
    private ingredienteModel: Model<IngredienteDocument>
  ) {}

  create(createIngredienteDto: CreateIngredienteDto) {
    return this.ingredienteModel.create(createIngredienteDto);
  }

  findAll() {
    return this.ingredienteModel.find();
  }

  findOne(id: mongoose.Types.ObjectId) {
    return this.ingredienteModel.findById(id);
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return this.ingredienteModel.findByIdAndUpdate(
      id,
      { $set: updateIngredienteDto },
      { new: true }
    );
  }

  remove(id: number) {
    return this.ingredienteModel.deleteOne({ _id: id });
  }

  findByName(nome: string) {
    return this.ingredienteModel.findOne({ nome });
  }
}
