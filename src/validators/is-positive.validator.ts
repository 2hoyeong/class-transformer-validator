import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'CustomPositive' })
export class CustomPositive implements ValidatorConstraintInterface {
  validate(text: string) {
    const value = Number(text);
    if (!Number.isSafeInteger(value)) {
      return false;
    }

    return value > 0;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} is must be a positive number`;
  }
}
