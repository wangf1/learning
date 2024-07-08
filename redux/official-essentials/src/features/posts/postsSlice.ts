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

  reducers: {},

  selectors: {
    selectPosts: posts => posts,
  },
})

export const { selectPosts } = postsSlice.selectors
