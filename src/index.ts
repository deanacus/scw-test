import { getPostsWithComments } from './queries';

// IIFE to call as required
(async () => {
  const posts = await getPostsWithComments();
  posts.forEach((post) => {
    const isValid = post.comments && Array.isArray(post.comments);
    console.assert(isValid, 'Post does not include comments ppoperty');
  });

  const avgComments =
    posts.reduce((r, p) => r + p.comments.length, 0) / posts.length;

  console.log(
    `Received ${posts.length} posts with an average of ${avgComments} comments per post`,
  );
})();
