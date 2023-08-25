import { format } from "date-fns";
import eoLocale from "date-fns/locale/pt-BR";

export default function DateComponent({ dateString }: { dateString: string }) {
  const toDate = new Date(dateString);

  const date = format(toDate, "dd 'de' MMMM',' yyyy", {
    locale: eoLocale,
  });

  return <time dateTime={dateString}>{date}</time>;
}
