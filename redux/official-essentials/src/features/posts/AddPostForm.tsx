import { useAppDispatch } from "@/src/app/hooks"
import PostForm from "@/src/features/posts/PostForm"
import { addPost } from "@/src/features/posts/postsSlice"

export default function AddPostForm() {
  const dispatch = useAppDispatch()

  function onAddPost(title: string, content: string, userId: string): void {
    const newPost = { title, content, userId }
    dispatch(addPost(newPost))
  }

  return <PostForm onSubmit={onAddPost} mode="add" />
}
