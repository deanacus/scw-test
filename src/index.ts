import { Post, commentssResponse, postsResponse } from './schema';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getPosts = async () => {
  const res = await fetch(POSTS_URL);
  const data = await res.json();
  return postsResponse.parse(data);
};

const getComments = async () => {
  const res = await fetch(COMMENTS_URL);
  const data = await res.json();
  return commentssResponse.parse(data);
};

const testReduce = (posts: Post[]) => {
  console.time('Reduce');
  posts.reduce<Map<number, Post>>((result, post) => {
    result.set(post.id, post);
    return result;
  }, new Map<number, Post>());
  console.timeEnd('Reduce');
};

const testForEach = (posts: Post[]) => {
  const postsMap = new Map<number, Post>();
  console.time('ForEach');
  posts.forEach((post) => {
    postsMap.set(post.id, post);
  });
  console.timeEnd('ForEach');
};

const testFor = (posts: Post[]) => {
  console.time('For Of');
  const postsMap = new Map<number, Post>();

  for (const post of posts) {
    postsMap.set(post.id, post);
  }
  console.timeEnd('For Of');
};

const getPostsWithComments = async () => {
  const [posts, comments] = await Promise.all([getPosts(), getComments()]);
  // const postsMap = new Map<number, Post>();

  // for (const post of posts) {
  //   postsMap.set(post.id, post);
  // }

  const pMap = posts.reduce<Map<number, Post>>((result, post) => {
    result.set(post.id, post);
    return result;
  }, new Map<number, Post>());

  // posts.forEach((post) => {
  //   postsMap.set(post.id, post);
  // });

  comments.forEach((comment) => {
    const post = pMap.get(comment.postId);
    if (post) {
      post.comments.push(comment);
    }
  });

  return Array.from(pMap.values());
};

const main = async () => {
  // await getPostsWithComments();
  //
  const posts = await getPosts();
  testFor(posts);
  testForEach(posts);
  testReduce(posts);
};

main();
