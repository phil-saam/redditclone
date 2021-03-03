export interface Post {
  identifier: string;
  title: string;
  slug: string;
  subName: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  body?: string;
  // Virtual Fields
  url: string;
  voteScore?: number;
  commentCount?: number;
  userVote?: number;
}
