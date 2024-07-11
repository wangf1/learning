import { useAppSelector } from "@/src/app/hooks"
import { PostAuthor } from "@/src/features/posts/PostAuthor"
import { selectPost } from "@/src/features/posts/postsSlice"
import TimeAgo from "@/src/features/posts/TimeAgo"
import { selectById } from "@/src/features/users/usersSlice"
import { Link, useParams } from "react-router-dom"

export default function PostDetails() {
  const { id } = useParams<{ id: string }>()
  const post = useAppSelector(state => selectPost(state, id ?? ""))
  if (!post) {
    return <section>Post not found</section>
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useAppSelector(state => selectById(state, post.userId))

  return (
    <section>
      <article
        className="border-2 p-6 my-2 min-w-[50%] max-w-fit rounded-lg
        bg-slate-100"
      >
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <div className="text-sm mb-4 text-gray-500 text-right w-[50%] mx-20">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="first-letter:text-3xl first-letter:font-bold">
          {post.content}
        </p>
        <Link
          to={`/posts/${post.id}/edit`}
          className="text-blue-500 underline visited:text-purple-500"
        >
          Edit
        </Link>
      </article>
    </section>
  )
}
