import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ClassValidationPipe implements PipeTransform<any> {
  private validFunctionTypes = [String, Boolean, Array, Object];

  async transform(value: any, { metatype }: ArgumentMetadata) {
    try {
      if (!metatype || !this.toValidate(metatype)) return value;

      const object = plainToInstance(metatype, value);
      const errors = await validate(object);

      if (errors.length > 0) throw errors;

      return value;
    } catch (error) {
      throw error;
    }
  }

  private toValidate(metatype): boolean {
    return !this.validFunctionTypes.includes(metatype);
  }
}
