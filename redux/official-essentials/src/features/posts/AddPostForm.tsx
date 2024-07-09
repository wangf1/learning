import { useAppDispatch, useAppSelector } from "@/src/app/hooks"
import PostForm from "@/src/features/posts/PostForm"
import { addPost, selectAll } from "@/src/features/posts/postsSlice"

export default function AddPostForm() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectAll)

  function onAddPost(title: string, content: string): void {
    const lastPost = posts.length > 0 ? posts[posts.length - 1] : null
    const id = lastPost ? lastPost.id + 1 : 1
    const newPost = { id: id, title, content }
    dispatch(addPost(newPost))
  }

  return <PostForm onSubmit={onAddPost} buttonText="Add Post" />
}
