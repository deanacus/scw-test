import { z } from 'zod';

const commentSchema = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string(),
  body: z.string(),
});

export type PostComment = z.infer<typeof commentSchema>;

const postSchema = z
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

export const postsResponse = z.array(postSchema);
export const commentssResponse = z.array(commentSchema);

export type Post = z.infer<typeof postSchema>;
