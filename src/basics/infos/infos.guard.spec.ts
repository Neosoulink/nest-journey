import { Reflector } from '@nestjs/core';
import { InfosGuard } from './infos.guard';

describe('InfosGuard', () => {
  it('should be defined', () => {
    expect(new InfosGuard(new Reflector())).toBeDefined();
  });
});
