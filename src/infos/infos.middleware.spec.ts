import { InfosMiddleware } from './infos.middleware';

describe('InfosMiddleware', () => {
  it('should be defined', () => {
    expect(new InfosMiddleware()).toBeDefined();
  });
});
