import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CardHeader from "./CardHeader";
import { render, screen, fireEvent } from "./customRender";

describe("CardHeader component", () => {
  test("render correct CardHeader component items if isEditable mode is on", () => {
    render(
      <BrowserRouter>
        <CardHeader cardInfo={{ isEdeting: true }} setUnsavedTitle={() => {}} />
      </BrowserRouter>
    );
    const inputField = screen.getByTestId("input-field");
    const saveBtn = screen.getByTestId("save-button-edit");
    const cancelBtn = screen.getByTestId("cancel-button-edit");
    userEvent.click(cancelBtn);
    fireEvent.change(inputField, { target: { value: "blabla" } });
    expect(inputField.value).toBe("blabla");
    const cardCheckbox = screen.queryByTestId("card-checbox");
    expect(cardCheckbox).not.toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(saveBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
    expect(screen.queryByTestId("pencil-button")).not.toBeInTheDocument();
  });

  test("render correct CardHeader component items if isEditable mode is off", () => {
    render(
      <BrowserRouter>
        <CardHeader cardInfo={{ isEdeting: false }} />
      </BrowserRouter>
    );
    const pencilIcon = screen.getByTestId("pencil-button");
    userEvent.click(pencilIcon);
    const saveIcon = screen.getByTestId("save-button");
    const cancelIcon = screen.getByTestId("cancel-button");
    const cardCheckbox = screen.getByTestId("card-checbox");
    expect(screen.queryByTestId("input-field")).not.toBeInTheDocument();
    expect(screen.queryByTestId("save-button-edit")).not.toBeInTheDocument();
    expect(screen.queryByTestId("cancel-button-edit")).not.toBeInTheDocument();
    expect(pencilIcon).toBeInTheDocument();
    expect(cardCheckbox).toBeInTheDocument();
    expect(saveIcon).toBeInTheDocument();
    expect(cancelIcon).toBeInTheDocument();
    expect(cardCheckbox).not.toBeChecked();
    userEvent.click(cardCheckbox);
    expect(cardCheckbox).toBeChecked();
  });

  test("The style of checked card", () => {
    render(<CardHeader cardInfo={{ checked: true }} />);
    const cardHeader = screen.getByTestId("card-header");
    expect(cardHeader).toBeInTheDocument();
    expect(cardHeader).toHaveClass("card-header checked");
  });
});
