import { Module } from '@nestjs/common';
import { ComboService } from './combo.service';
import { ComboResolver } from './combo.resolver';

@Module({
  providers: [ComboService, ComboResolver]
})
export class ComboModule {}
