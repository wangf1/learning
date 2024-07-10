import { createAppSlice } from "@/src/app/createAppSlice"

export interface User {
  id: string
  name: string
}

const initialState: User[] = [
  {
    id: "1",
    name: "Mark",
  },

  {
    id: "2",
    name: "Jane",
  },

  {
    id: "3",
    name: "Bob",
  },
]

export const usersSlice = createAppSlice({
  name: "users",
  initialState,
  reducers: create => {
    return {}
  },
  selectors: {
    selectAll: users => users,
    selectById: (users, id) => users.find(user => user.id === id),
  },
})

export const { selectAll, selectById } = usersSlice.selectors
