declare namespace NewsFeed {
  type Entity = {
    id: string;
    title: string;
    url: string;
    organization: Organization;
    article_created_at: string;
    article_updated_at?: string;
  };

  type Organization = {
    id: number;
    name?: string;
  };
}
