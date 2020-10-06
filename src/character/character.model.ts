import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuditInfo } from '../common/model/audit-information';

@ObjectType()
export class Character extends AuditInfo {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}