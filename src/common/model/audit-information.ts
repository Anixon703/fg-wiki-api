import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuditInfo {
  @Field()
  creationDate: Date;

  @Field()
  modDate: Date;
}