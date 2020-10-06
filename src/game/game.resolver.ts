import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { PagingArgs } from '../common/dto/paging-args';
import { NewGameInput } from './dto/new-game-input';
import { Game } from './game.model';
import { GameService } from './game.service';

@Resolver(of => Game)
export class GameResolver {
    constructor(private readonly gameService: GameService) {}

    @Mutation(returns => Game)
    addGame(@Args() gameArgs: NewGameInput): Promise<Game> {
        return this.gameService.create(gameArgs);
    }

    @Query(returns => [Game])
    games(@Args() gameArgs: PagingArgs): Promise<Game[]> {
        return this.gameService.findAll(gameArgs);
    }

    @Query(returns => Game)
    game(@Args('id') id: string): Promise<Game> {
        return this.gameService.byId(id);
    }

    @Query(returns => Boolean)
    removeGamee(@Args('id') id: string): Promise<boolean> {
        return this.gameService.remove(id);
    }
}