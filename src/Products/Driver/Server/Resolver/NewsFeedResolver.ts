/**
 * Lib
 */
import { Field, Int, ObjectType, Query, Resolver } from 'type-graphql';

/**
 * Tools
 */
import { container } from '@/Tools/Containers/Products/NewsFeed';

/**
 * Type
 */
@ObjectType()
class Organization {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  name!: string | null;
}

@ObjectType()
class Contents {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  name!: string | null;
}

@ObjectType()
class NewsFeed {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  url!: string;

  @Field(() => Organization)
  organization!: NewsFeed.Organization;

  @Field(() => Contents)
  contents!: NewsFeed.Contents;

  @Field(() => String)
  articleCreatedAt!: string;

  @Field(() => String)
  articleUpdatedAt!: string;
}

/**
 * Resolver
 */
@Resolver(NewsFeed)
export class NewsFeedResolver {
  private newsFeedController: NewsFeed.INewsFeedController;
  private newsFeedPresenter: NewsFeed.INewsFeedPresenter;

  constructor() {
    this.newsFeedController = container.resolve('NewsFeedController');
    this.newsFeedPresenter = container.resolve('NewsFeedPresenter');
  }

  @Query(() => [NewsFeed])
  async newsfeed() {
    const data = await this.newsFeedController.handle();
    return this.newsFeedPresenter.handle(data);
  }
}
