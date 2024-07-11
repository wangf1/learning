import { PostAuthor } from "@/src/features/posts/PostAuthor"
import type { Post } from "@/src/features/posts/postsSlice"
import TimeAgo from "@/src/features/posts/TimeAgo"
import { Link } from "react-router-dom"

export default function PostListItem({ post }: Readonly<{ post: Post }>) {
  const maxLen = 10
  const truncatedContent =
    post.content.length > maxLen
      ? `${post.content.substring(0, maxLen)}...`
      : post.content
  return (
    <div
      className="border-2 p-2 my-2 min-w-[50%] max-w-fit
      bg-slate-100 rounded-lg"
    >
      <h3 className="font-bold text-xl">{post.title}</h3>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p>{truncatedContent}</p>
      <Link
        to={`/posts/${post.id}`}
        className="text-blue-500 underline visited:text-purple-500"
      >
        Read more
      </Link>
    </div>
  )
}
