import { useAppDispatch, useAppSelector } from "@/src/app/hooks"
import PostForm from "@/src/features/posts/PostForm"
import { selectPost, updatePost } from "@/src/features/posts/postsSlice"
import { redirect, useNavigate, useParams } from "react-router-dom"

export default function EditPostForm() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const post = useAppSelector(state =>
    selectPost(state, parseInt(id ?? "0", 10)),
  )
  if (!post) {
    return <section>Post not found</section>
  }
  const onSavePost = (title: string, content: string): void => {
    dispatch(updatePost({ id: post.id, title, content }))
    navigate(`/posts/${id}`)
  }

  return (
    <PostForm
      initTitle={post.title}
      initContent={post.content}
      onSubmit={onSavePost}
      buttonText="Save"
    />
  )
}
