import { format } from "date-fns";
import eoLocale from "date-fns/locale/pt-BR";

// format date in the desired format eg: 21 de agosto, 2023
export function formatDate(date: Date) {
  return format(date, "dd 'de' MMMM',' yyyy", {
    locale: eoLocale,
  });
}
