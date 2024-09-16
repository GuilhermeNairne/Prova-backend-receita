import { IsString, IsNumber } from "class-validator";

export class CreateIngredienteDto {
    @IsString()
    nome: string    
}
