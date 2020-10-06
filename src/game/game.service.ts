import { Injectable } from '@nestjs/common';
import { PagingArgs } from '../common/dto/paging-args';
import { NewGameInput } from './dto/new-game-input';
import { Game } from './game.model';

@Injectable()
export class GameService {
    async create(data: NewGameInput): Promise<Game> {
        return {} as any;
    }

    async byId(id: string): Promise<Game> {
        return {} as any;
    }

    async findAll(gameArgs: PagingArgs): Promise<Game[]> {
        return [] as Game[];
    }

    async remove(id: string): Promise<boolean> {
        return true;
    }
}
