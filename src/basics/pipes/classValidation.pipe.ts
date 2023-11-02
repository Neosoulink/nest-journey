import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ClassValidationPipe implements PipeTransform<any> {
  private validFunctionTypes = [String, Boolean, Array, Object];

  async transform(value: any, { metatype }: ArgumentMetadata) {
    try {
      if (!metatype || !this.toValidate(metatype)) {
        return value;
      }

      const object = plainToInstance(metatype, value);
      const errors = await validate(object);

      if (errors.length > 0) {
        throw new BadRequestException('Value validation error', {
          cause: errors,
        });
      }

      return value;
    } catch (error) {
      throw new BadRequestException(error?.message ?? 'Validation failed', {
        cause: error?.cause ?? error,
      });
    }
  }

  private toValidate(metatype): boolean {
    return !this.validFunctionTypes.includes(metatype);
  }
}
