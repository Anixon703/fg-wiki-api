import { Test, TestingModule } from '@nestjs/testing';
import { GuideResolver } from './guide.resolver';

describe('GuideResolver', () => {
  let resolver: GuideResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuideResolver],
    }).compile();

    resolver = module.get<GuideResolver>(GuideResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
