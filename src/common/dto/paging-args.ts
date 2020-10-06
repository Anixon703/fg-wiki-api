import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class PagingArgs {
  @Field(type => Int)
  @Min(0)
  page = 1;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  pageSize = 25;
}