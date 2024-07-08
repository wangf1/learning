import type { Post } from "@/src/features/posts/postsSlice"

export default function PostDetail({ post }: Readonly<{ post: Post }>) {
  return (
    <div
      className="border-2 p-2 my-2 min-w-[50%] max-w-fit
      bg-slate-100 rounded-lg"
    >
      <h3 className="font-bold text-xl">{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )
}
