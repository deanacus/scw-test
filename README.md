Interview Coding Challenge (JavaScript)

Given the end point URLs

```
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
```

- Fetch all the posts and comments, make sure both are available at the same
  time
- For each post add a field comments that will contain all the comments for this
  post
- The resultant data after mapping should be of below structure:

```
├─── post1
     ├─── comment1
     ├─── comment2
```

For example

```
[
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat',
      body: 'quia et suscipit',
      comments: [
        {
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: 'laudantium enim'
        },
        ...
      ]
    }, ...
],
```
