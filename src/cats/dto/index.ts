import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}
export class ListAllEntities {
    limit: number
}

export class UpdateCatDto {
    name: string;
    age: number;
    breed: string;
}