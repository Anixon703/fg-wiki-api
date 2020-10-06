import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuditInfo } from '../common/model/audit-information';

@ObjectType()
export class Game extends AuditInfo {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field()
  modDate: Date;
}