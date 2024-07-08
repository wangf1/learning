import { useAppSelector } from "@/src/app/hooks"
import { selectPost } from "@/src/features/posts/postsSlice"
import { useParams } from "react-router-dom"

export default function SinglePostPage() {
  const { id } = useParams<{ id: string }>()
  const post = useAppSelector(state =>
    selectPost(state, parseInt(id ?? "0", 10)),
  )
  if (!post) {
    return <section>Post not found</section>
  }
  return (
    <section>
      <article
        className="border-2 p-6 my-2 min-w-[50%] max-w-fit rounded-lg
       bg-slate-100"
      >
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <p className="first-letter:text-3xl first-letter:font-bold">
          {post.content}
        </p>
      </article>
    </section>
  )
}
