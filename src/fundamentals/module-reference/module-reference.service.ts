import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class ModuleReferenceService {
  constructor(private readonly moduleRef: ModuleRef) {}
}
