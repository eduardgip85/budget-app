import { useState } from "react";
import type { SortDirection } from "../types/sort";

export function useQuoteSort() {
  const [sortBy, setSortBy] = useState<"name" | "total" | "">("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSortByName = () => {
    if (sortBy === "name") {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortBy("name");
    setSortDirection("asc");
  };

  const handleSortByTotal = () => {
    if (sortBy === "total") {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortBy("total");
    setSortDirection("asc");
  };

  return {
    sortBy,
    sortDirection,
    handleSortByName,
    handleSortByTotal,
  };
}