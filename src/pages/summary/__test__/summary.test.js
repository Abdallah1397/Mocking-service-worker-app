import { render, screen, fireEvent } from "@testing-library/react";
import OrderSummary from "../orderSummary";

describe("Checking box test cases", () => {
    test("checkBox is unchecked", () => {
        render(<OrderSummary />);
        const checkBoxElement = screen.getByRole("checkbox", {
            name: "Disable Button",
        });
        const buttonElement = screen.getByRole("button", { name: /confirm/i });
        expect(checkBoxElement).not.toBeChecked();
        expect(buttonElement).toBeEnabled();
    });
    test("checking checkBox enable button", () => {
        render(<OrderSummary />);
        const checkBoxElement = screen.getByRole("checkbox", {
            name: "Disable Button",
        });
        const buttonElement = screen.getByRole("button", { name: /confirm/i });
        fireEvent.click(checkBoxElement);
        expect(checkBoxElement).toBeChecked();
        expect(buttonElement).toBeDisabled();
    });
});
