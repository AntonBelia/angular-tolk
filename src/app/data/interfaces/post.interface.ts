export interface Author {
  id: number;
  username: string;
  avatarUrl: string;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
  description: string;
}

export interface Comment {
  author: Author;
  content: string;
  createdAt: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: Author;
  images: string[];
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
}
