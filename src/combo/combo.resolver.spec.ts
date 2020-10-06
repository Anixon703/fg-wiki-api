import { Test, TestingModule } from '@nestjs/testing';
import { ComboResolver } from './combo.resolver';

describe('ComboResolver', () => {
  let resolver: ComboResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComboResolver],
    }).compile();

    resolver = module.get<ComboResolver>(ComboResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
