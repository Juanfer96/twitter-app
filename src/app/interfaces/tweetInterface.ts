export interface ITweet {
  id: number;
  created_at: string;

  user: {
    name: string;
    screen_name: string;
    profile_image_url: string;
    verified: boolean;
  };

  text: string;

  entities: {
    media: {
      media_url: string;
    };
  };

  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
}
