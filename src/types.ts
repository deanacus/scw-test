import { TypeOf } from 'zod';

import { commentSchema } from './apis/getComments';
import { postSchema } from './apis/getPosts';

export type PostComment = TypeOf<typeof commentSchema>;
export type Post = TypeOf<typeof postSchema> & { comments: PostComment[] };
