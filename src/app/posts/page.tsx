import PostsList from "./PostsList";

export default function PostsPage() {

  return (
    <div className="mx-auto max-w-screen-md">
      <h1>Post Page</h1>
      <p>Some post-specific content</p>
      <PostsList />
    </div>
  );
}