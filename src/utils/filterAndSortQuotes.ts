import type { Quote } from "../types/quote";
import type { SortBy, SortDirection } from "../types/sort";

type Params = {
  quotes: Quote[];
  searchTerm: string;
  sortBy: SortBy | "";
  sortDirection: SortDirection;
};

export function filterAndSortQuotes({
  quotes,
  searchTerm,
  sortBy,
  sortDirection,
}: Params): Quote[] {
  const search = searchTerm.toLowerCase();

  const filteredQuotes = quotes.filter((q) => {
    const matchesName = q.name.toLowerCase().includes(search);
    const matchesServices = q.services.some((s) =>
      s.toLowerCase().includes(search)
    );
    const matchesTotal = q.total.toString().includes(search);

    return matchesName || matchesServices || matchesTotal;
  });

  return [...filteredQuotes].sort((a, b) => {
    if (sortBy === "name") {
      const result = a.name.localeCompare(b.name);
      return sortDirection === "asc" ? result : -result;
    }

    if (sortBy === "total") {
      const result = a.total - b.total;
      return sortDirection === "asc" ? result : -result;
    }

    return 0;
  });
}