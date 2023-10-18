import { Reflector } from '@nestjs/core';

export const InfosPerms = Reflector.createDecorator<string[]>();
