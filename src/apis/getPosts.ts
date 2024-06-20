import { z } from 'zod';
import { type PostComment } from './getComments';

export const postSchema = z
  .object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
  })
  .transform((post) => {
    const comments: PostComment[] = [];
    return { ...post, comments };
  });

export const getPosts = async (): Promise<Map<number, Post>> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // create a Map of posts by id for populating with comments;
  return z
    .array(postSchema)
    .parse(data)
    .reduce<Map<number, Post>>((result, post) => {
      result.set(post.id, post);
      return result;
    }, new Map<number, Post>());
};

export type Post = z.infer<typeof postSchema>;
