import { formatDate } from "../lib/format-date";

export default function DateComponent({ dateString }: { dateString: string }) {
  const toDate = new Date(dateString);
  const formatedDate = formatDate(toDate);

  return <time dateTime={dateString}>{formatedDate}</time>;
}
