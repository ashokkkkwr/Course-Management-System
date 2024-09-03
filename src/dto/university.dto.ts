import{IsNotEmpty, IsString} from 'class-validator'
export class UniversityDTO{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    code:string
    
}