import { Module } from '@nestjs/common';
import { GuideResolver } from './guide.resolver';
import { GuideService } from './guide.service';

@Module({
  providers: [GuideResolver, GuideService]
})
export class GuideModule {}
