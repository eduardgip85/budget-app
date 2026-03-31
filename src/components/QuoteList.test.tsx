import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import QuoteList from "./QuoteList";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

describe("QuoteList component", () => {
    const quotes = [
        {
        id: "1",
        name: "Quote 1",
        total: 100,
        phone: 123456789,
        email: "quote1@example.com",
        services: [],
        date: new Date().toISOString(),
        },
        {
        id: "2",
        name: "Quote 2",
        total: 200,
        phone: 987654321,
        email: "quote2@example.com",
        services: [],
        date: new Date().toISOString(),
        },
    ];

  it("renders the component with quotes", () => {

    render(
      <MemoryRouter>
        <QuoteList
          quotes={quotes}
          searchTerm=""
          sortBy="name"
          sortDirection="asc"
          onSearchChange={() => {}}
          onSortByName={() => {}}
          onSortByTotal={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Quote 1")).toBeInTheDocument();
    expect(screen.getByText("Quote 2")).toBeInTheDocument();
  });

   it("calls onSortByTotal when clicking Import button", async () => {
    const user = userEvent.setup();
    const onSortByTotal = vi.fn();

    render(
      <MemoryRouter>
        <QuoteList
          quotes={quotes}
          searchTerm=""
          sortBy="name"
          sortDirection="asc"
          onSearchChange={() => {}}
          onSortByName={() => {}}
          onSortByTotal={onSortByTotal}
        />
      </MemoryRouter>
    );

    const importButton = screen.getByRole("button", { name: /sort by import/i });

    await user.click(importButton);

    expect(onSortByTotal).toHaveBeenCalledTimes(1);

    });

    it("calls onSortByTotal when clicking Import button", async () => {
        const user = userEvent.setup();
        const onSortByTotal = vi.fn();

        render(
            <MemoryRouter>
            <QuoteList
                quotes={quotes}
                searchTerm=""
                sortBy="name"
                sortDirection="asc"
                onSearchChange={() => {}}
                onSortByName={() => {}}
                onSortByTotal={onSortByTotal}
            />
            </MemoryRouter>
        );

        const importButton = screen.getByLabelText(/sort by import/i);
        
        await user.click(importButton);

        expect(onSortByTotal).toHaveBeenCalledTimes(1);
    });

    it("calls onSortByName when clicking Import button and changing sort direction", async () => {
        const user = userEvent.setup();
        const onSortByName = vi.fn();

        render(
            <MemoryRouter>
            <QuoteList
                quotes={quotes}
                searchTerm=""
                sortBy="name"
                sortDirection="asc"
                onSearchChange={() => {}}
                onSortByName={onSortByName}
                onSortByTotal={() => {}}
            />
            </MemoryRouter>
        );

        const nameButton = screen.getByLabelText(/sort by name/i);

        expect(nameButton).toHaveTextContent("Nom");

        await user.click(nameButton);
        
        expect(nameButton).toHaveTextContent("Nom ↑");

        expect(onSortByName).toHaveBeenCalledTimes(1);
    });

});