import { Test, TestingModule } from '@nestjs/testing';
import { MoveResolver } from './move.resolver';

describe('MoveResolver', () => {
  let resolver: MoveResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoveResolver],
    }).compile();

    resolver = module.get<MoveResolver>(MoveResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
