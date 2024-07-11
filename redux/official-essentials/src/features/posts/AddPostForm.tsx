import { useAppDispatch, useAppSelector } from "@/src/app/hooks"
import PostForm from "@/src/features/posts/PostForm"
import { addPost, selectAll } from "@/src/features/posts/postsSlice"

export default function AddPostForm() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectAll)

  function onAddPost(title: string, content: string, userId: string): void {
    const newPost = { title, content, userId }
    dispatch(addPost(newPost))
  }

  return <PostForm onSubmit={onAddPost} mode="add" />
}
