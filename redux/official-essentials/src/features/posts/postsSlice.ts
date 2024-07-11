import { nanoid, type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface Post {
  id: string
  title: string
  content: string
  userId: string
  date: string
}

export type PostDTO = Omit<Post, "id" | "date"> & {
  id?: string
}

const initialState: Post[] = [
  {
    id: nanoid(),
    title: "Second Post",
    content: "This is my second post",
    userId: "2",
    date: new Date("2023-08-01T15:30:00Z").toISOString(),
  },
  {
    id: nanoid(),
    title: "First Post",
    content: "This is my first post",
    userId: "1",
    date: new Date("2024-07-10T15:30:00Z").toISOString(),
  },
]

export const postsSlice = createAppSlice({
  name: "posts",
  initialState,

  reducers: create => ({
    addPost: create.reducer((state, action: PayloadAction<PostDTO>) => {
      const post: Post = {
        ...action.payload,
        id: nanoid(),
        date: new Date().toISOString(),
      }
      state.push(post)
    }),
    updatePost: create.reducer((state, action: PayloadAction<PostDTO>) => {
      const { id, title, content } = action.payload
      const post = state.find(post => post.id === id)
      if (post) {
        post.title = title
        post.content = content
        post.date = new Date().toISOString()
      }
    }),
  }),

  selectors: {
    selectAll: posts =>
      posts.slice().sort((a, b) => b.date.localeCompare(a.date)),
    selectPost: (posts, id: string) => posts.find(post => post.id === id),
  },
})

export const { selectAll, selectPost } = postsSlice.selectors

export const { addPost, updatePost } = postsSlice.actions
