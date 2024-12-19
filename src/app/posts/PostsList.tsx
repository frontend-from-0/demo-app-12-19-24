interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function PostsList() {
  const respose = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!respose.ok) {
    return <p>Failed to load posts</p>;
  }
  const posts: Post[] = await respose.json();

  return posts && posts.length > 0 ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="my-6">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No posts are found</p>
  );
}
