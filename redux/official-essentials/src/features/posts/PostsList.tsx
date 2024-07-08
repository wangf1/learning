import { useAppSelector } from "@/src/app/hooks"
import PostDetail from "@/src/features/posts/PostDetail"
import { selectPosts } from "@/src/features/posts/postsSlice"

export default function PostsList() {
  const posts = useAppSelector(selectPosts)
  const renderedPosts = posts.map(post => (
    <PostDetail key={post.id} post={post} />
  ))

  return (
    <div>
      <h1 className="text-3xl font-bold ">Posts</h1>
      {renderedPosts}
    </div>
  )
}
