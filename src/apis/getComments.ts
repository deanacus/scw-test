import { z } from 'zod';

export const commentSchema = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string(),
  body: z.string(),
});

export const getComments = async (): Promise<PostComment[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();
  return z.array(commentSchema).parse(data);
};

export type PostComment = z.infer<typeof commentSchema>;
