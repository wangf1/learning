import { useAppSelector } from "@/src/app/hooks"
import PostDetail from "@/src/features/posts/PostListItem"
import { selectAll } from "@/src/features/posts/postsSlice"

export default function PostsList() {
  const posts = useAppSelector(selectAll)
  const renderedPosts = posts.map(post => (
    <PostDetail key={post.id} post={post} />
  ))

  return (
    <div className="mx-3">
      <h1 className="text-3xl font-bold">Posts</h1>
      {renderedPosts}
    </div>
  )
}
