import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface Post {
  id: number
  title: string
  content: string
}

const initialState: Post[] = [
  { id: 1, title: "First Post", content: "This is my first post" },
  { id: 2, title: "Second Post", content: "This is my second post" },
]

export const postsSlice = createAppSlice({
  name: "posts",
  initialState,

  reducers: create => ({
    addPost: create.reducer((state, action: PayloadAction<Post>) => {
      state.push(action.payload)
    }),
  }),

  selectors: {
    selectAll: posts => posts,
    selectPost: (posts, id) => posts.find(post => post.id === id),
  },
})

export const { selectAll, selectPost } = postsSlice.selectors

export const { addPost } = postsSlice.actions
