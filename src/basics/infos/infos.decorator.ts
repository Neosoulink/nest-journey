import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const InfosPerms = Reflector.createDecorator<string[]>();
export const InfosData = createParamDecorator<string, ExecutionContext>(
  (data, ctx) => {
    return {
      userString: data,
      requestType: ctx.getType(),
    };
  },
);
