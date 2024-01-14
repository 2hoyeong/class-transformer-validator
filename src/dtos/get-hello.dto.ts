import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsString, Length, Validate } from 'class-validator';
import { CustomPositive } from '../validators/is-positive.validator';
import { pbkdf2Sync } from 'crypto';

export class GetHelloDto {
  @IsString()
  @Transform(({ value }) => value.toUpperCase())
  name: string;

  @Validate(CustomPositive)
  @Transform(({ value }) => {
    console.log('value', value);
    return Number(value);
  })
  age: number;

  @Length(8)
  @Transform(({ value }) => hash(value.trim()))
  password: string;
}

export class SignUpDto {
  @IsString()
  @IsEmail()
  email: string;

  @Length(8)
  @Transform(({ value }) => hash(value.trim()))
  password: string;
}

export class User {
  @IsString()
  name: string;

  @IsInt()
  @Transform(({ value }) => (value && value < 0 ? 0 : Number.parseInt(value)))
  age: number;
}

function hash(value: string): string {
  return pbkdf2Sync(value, 'salt', 1000, 64, 'sha512').toString('hex');
}
