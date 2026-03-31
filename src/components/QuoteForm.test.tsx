import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import QuoteForm from "./QuoteForm";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

describe("QuoteForm component", () => {
    it("renders the component", () => {        
        render(
        <MemoryRouter>
            <QuoteForm 
                name=""
                phone={123131212}
                email=""
                onNameChange={() => {}}
                onPhoneChange={() => {}}
                onEmailChange={() => {}}
                onSubmit={() => {}} 
            />
        </MemoryRouter>
        );

        expect(screen.getByText("Demanar pressupost")).toBeInTheDocument();
    });

    it("calls onSubmit when the form is submitted", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn();
        render(
        <MemoryRouter>
            <QuoteForm 
                name=""
                phone={123131212}
                email=""
                onNameChange={() => {}}
                onPhoneChange={() => {}}
                onEmailChange={() => {}}
                onSubmit={onSubmit} 
            />
        </MemoryRouter>
        );
        const submitButton = screen.getByRole("button", { name: /enviar/i });

        await user.click(submitButton);
        expect(onSubmit).toHaveBeenCalledTimes(1);
     });

    it("calls onNameChange when the name input changes", async () => {
        const user = userEvent.setup();
        const onNameChange = vi.fn();
        render(
        <MemoryRouter>
            <QuoteForm
                name=""
                phone={123131212}
                email=""
                onNameChange={onNameChange}
                onPhoneChange={() => {}}
                onEmailChange={() => {}}
                onSubmit={() => {}}
            />
        </MemoryRouter>
        );
        const nameInput = screen.getByPlaceholderText("Nom");
        await user.type(nameInput, "a");

        expect(onNameChange).toHaveBeenLastCalledWith("a");
    });


});