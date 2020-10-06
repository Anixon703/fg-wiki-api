import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GameModule } from './game/game.module';
import { CharacterModule } from './character/character.module';
import { MoveModule } from './move/move.module';
import { ComboModule } from './combo/combo.module';
import { GuideModule } from './guide/guide.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    GameModule,
    CharacterModule,
    MoveModule,
    ComboModule,
    GuideModule,
  ],
})
export class AppModule {}
