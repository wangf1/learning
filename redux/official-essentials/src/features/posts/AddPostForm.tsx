import { useAppDispatch, useAppSelector } from "@/src/app/hooks"
import { addPost, selectAll } from "@/src/features/posts/postsSlice"
import type { ChangeEvent, MouseEvent } from "react"
import { useState } from "react"

export default function AddPostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectAll)

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  function onAddPost(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault()
    const lastPost = posts.length > 0 ? posts[posts.length - 1] : null
    const id = lastPost ? lastPost.id + 1 : 1
    const newPost = { id: id, title, content }
    dispatch(addPost(newPost))
    setTitle("")
    setContent("")
  }

  return (
    <section
      className="border-2 p-6 my-2 min-w-[50%] max-w-fit rounded-lg
        bg-slate-100 mx-3"
    >
      <h2 className="text-3xl font-bold">Add a New Post</h2>
      <form>
        <div className="flex flex-col">
          <label htmlFor="postTitle">Title:</label>
          <input
            id="postTitle"
            name="postTitle"
            type="text"
            value={title}
            onChange={onTitleChanged}
            className="border-2 p-2 my-2 rounded-lg"
          />

          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            className="border-2 p-2 my-2 rounded-lg min-h-32"
          />

          <button
            type="submit"
            disabled={!title || !content}
            onClick={onAddPost}
          >
            Add Post
          </button>
        </div>
      </form>
    </section>
  )
}
