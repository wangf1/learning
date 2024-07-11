import { useAppSelector } from "@/src/app/hooks"
import { selectById } from "@/src/features/users/usersSlice"

export const PostAuthor = ({ userId }: { userId: string }) => {
  const author = useAppSelector(state => selectById(state, userId))

  return <span>by {author ? author.name : "Unknown author"}</span>
}
