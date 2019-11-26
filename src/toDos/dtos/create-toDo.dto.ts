import {IsBoolean, IsString} from 'class-validator';
export class CreateToDoDto {
    @IsBoolean()
    checked: boolean;
    @IsString()
    text: string;
}
