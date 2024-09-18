import { Injectable } from "@nestjs/common";
import { CreateReceitaDto } from "./dto/create-receita.dto";
import { UpdateReceitaDto } from "./dto/update-receita.dto";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Receita, ReceitaDocument } from "./schema/receita.schema";
import { IngredientesService } from "src/ingredientes/ingredientes.service";

@Injectable()
export class ReceitasService {
  constructor(
    @InjectModel(Receita.name)
    private receitaModel: Model<ReceitaDocument>,
    private ingredienteService: IngredientesService
  ) {}

  async create(createReceitaDto: CreateReceitaDto) {
    const { ingrediente, ...rest } = createReceitaDto;

    const erro = { message: [] };

    
    const ingredientesIds = [];
    for (const ingredienteNome of ingrediente) {
      let ingredienteDoc =
        await this.ingredienteService.findByName(ingredienteNome);
      if (!ingredienteDoc) {
        
        ingredienteDoc = await this.ingredienteService.create({
          nome: ingredienteNome,
        });
      }
      ingredientesIds.push(ingredienteDoc._id); 
    }

    const receitaCriada = new this.receitaModel({
      ...rest,
      ingredientes: ingredientesIds, 
    });

    const savedReceita = await receitaCriada.save();

    
    return this.receitaModel
      .findById(savedReceita._id)
      .populate("ingredientes")
      .exec();
  }

  
  async addIngrediente(id: string, ingredienteNome: string) {
    const erro = { message: [] };

    
    let ingrediente = await this.ingredienteService.findByName(ingredienteNome);
    if (!ingrediente) {
      ingrediente = await this.ingredienteService.create({
        nome: ingredienteNome,
      });
    }

    
    const receita = await this.receitaModel
      .findByIdAndUpdate(
        id,
        { $push: { ingredientes: ingrediente._id } },
        { new: true }
      )
      .populate("ingredientes")
      .exec();

    if (!receita) {
      erro.message.push("Receita não encontrada, insira um id válido");
      return erro;
    }

    return receita;
  }

  
  async removeIngrediente(id: string, ingredienteNome: string) {
    const erro = { message: [] };

    
    const ingrediente =
      await this.ingredienteService.findByName(ingredienteNome);
    if (!ingrediente) {
      erro.message.push("Ingrediente não encontrado, insira um nome válido");
      return erro;
    }

    
    const receita = await this.receitaModel
      .findByIdAndUpdate(
        id,
        { $pull: { ingredientes: ingrediente._id } },
        { new: true }
      )
      .populate("ingredientes")
      .exec();

    if (!receita) {
      erro.message.push("Receita não encontrada, insira um id válido");
      return erro;
    }

    return receita;
  }

  findAll() {
    return this.receitaModel.find().populate("ingredientes").exec();
  }

  findOne(id: string) {
    return this.receitaModel.findById(id).populate('ingredientes').exec();
  }

  update(id: string, updateReceitaDto: UpdateReceitaDto) {
    return this.receitaModel.findByIdAndUpdate(
      id, 
      { $set: updateReceitaDto },
      { new: true }
    );
  }

  remove(_id: string) {
    return this.receitaModel.deleteOne({ _id: _id });
  }
}
