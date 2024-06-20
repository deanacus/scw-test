import { getComments, getPosts } from '../apis';

export const getPostsWithComments = async () => {
  const [posts, comments] = await Promise.all([getPosts(), getComments()]);

  comments.forEach((comment) => {
    const post = posts.get(comment.postId);
    if (post) {
      post.comments.push(comment);
    }
  });

  return Array.from(posts.values());
};
