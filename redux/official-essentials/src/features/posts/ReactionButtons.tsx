import { useAppDispatch } from "@/src/app/hooks"
import {
  reactToPost,
  type Post,
  type ReactionType,
} from "@/src/features/posts/postsSlice"

const reactionEmoji: Record<ReactionType, string> = {
  thumbsUp: "👍",
  wow: "🎉",
  heart: "❤️",
  rocket: "🚀",
  coffee: "👀",
}

type ReactionButtonsProps = Readonly<Pick<Post, "id" | "reactions">>

export default function ReactionButtons({
  id,
  reactions = {},
}: ReactionButtonsProps) {
  const dispatch = useAppDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() => {
          dispatch(reactToPost({ id, reaction: name as ReactionType }))
        }}
      >
        {emoji} {reactions[name as ReactionType] ?? 0}
      </button>
    )
  })
  return <div>{reactionButtons}</div>
}
