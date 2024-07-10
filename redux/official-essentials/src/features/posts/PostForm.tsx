import { useAppSelector } from "@/src/app/hooks"
import { selectAll } from "@/src/features/users/usersSlice"
import type { ChangeEvent } from "react"
import { useState } from "react"

type PostFormProps = {
  initTitle?: string
  initContent?: string
  initUserId?: string
  onSubmit: (title: string, content: string, userId: string) => void
  buttonText: string
  mode: "add" | "edit"
}

export default function PostForm({
  initTitle = "",
  initContent = "",
  initUserId = "1",
  onSubmit,
  buttonText,
  mode,
}: PostFormProps) {
  const [title, setTitle] = useState(initTitle)
  const [content, setContent] = useState(initContent)
  const [userId, setUserId] = useState(initUserId)

  const users = useAppSelector(selectAll)

  const onTitleChanged = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const onContentChanged = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(event.target.value)
  }

  const onAuthorChanged = (event: ChangeEvent<HTMLSelectElement>): void => {
    setUserId(event.target.value)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onSubmit(title, content, userId)
    setTitle("")
    setContent("")
    setUserId("")
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

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

          <label htmlFor="postAuthor">Author:</label>
          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
            disabled={mode === "edit"}
          >
            <option value=""></option>
            {usersOptions}
          </select>

          <button
            type="submit"
            disabled={!title || !content || !userId}
            onClick={handleSubmit}
            className="border-2 p-2 my-2 rounded-lg enabled:bg-blue-500 disabled:bg-gray-300"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </section>
  )
}
