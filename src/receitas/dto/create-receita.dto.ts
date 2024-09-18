import {
  ArrayMinSize,
  IsArray,
  IsNumberString,
  IsString
} from "class-validator";

export class CreateReceitaDto {
  @IsString()
  nome: string;

  @IsString()
  tempoPreparo: string;

  @IsNumberString()
  custoAproximado: string;

  @IsArray()
  @ArrayMinSize(1) 
  @IsString({ each: true })
  ingrediente: string[];
}
