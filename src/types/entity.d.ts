declare namespace Entity {
  type NewsFeed = {
    id: string;
    title: string;
    url: string;
    media: Media;
    article_created_at: string;
    article_updated_at?: string;
  };

  type Media = {
    id: number;
    name?: string;
  };
}
