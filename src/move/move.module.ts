import { Module } from '@nestjs/common';
import { MoveResolver } from './move.resolver';
import { MoveService } from './move.service';

@Module({
  providers: [MoveResolver, MoveService]
})
export class MoveModule {}
