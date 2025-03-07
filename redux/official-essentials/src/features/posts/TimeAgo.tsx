import { formatDistanceToNow, parseISO } from "date-fns"

export default function TimeAgo({ timestamp }: { timestamp: string }) {
  let timeAgo = ""
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <span title="timestamp">
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
