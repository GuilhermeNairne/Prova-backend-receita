import { IsString, IsNumber, IsArray } from "class-validator";

export class CreateReceitaDto {
    @IsString()
    nome: string

    @IsNumber()
    tempoPreparo: number

    @IsNumber()
    custoAproximado: number

    @IsArray()
    ingredientes: string[]
}
