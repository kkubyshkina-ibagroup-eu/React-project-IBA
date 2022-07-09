import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { render, screen, fireEvent } from "./customRender";
import Settings from "./Settings";

describe("CardHeader component", () => {
  test("render correct CardHeader component items if isEditable mode is on and test save button", () => {
    render(
      <BrowserRouter>
        <CardHeader cardInfo={{ isEdeting: true }} />
        <CardBody cardInfo={{ isEdeting: true }} />
      </BrowserRouter>
    );
    const inputTextField = screen.getByTestId("input-text-field");
    const inputTitleField = screen.getByTestId("input-title-field");
    const saveBtn = screen.getByTestId("save-button-edit");
    const cancelBtn = screen.getByTestId("cancel-button-edit");
    userEvent.click(cancelBtn);
    fireEvent.change(inputTitleField, { target: { value: "lala" } });
    userEvent.click(saveBtn);
    expect(inputTitleField.value).toBe("lala");
    fireEvent.change(inputTextField, { target: { value: "bla" } });
    userEvent.click(saveBtn);
    expect(inputTextField.value).toBe("bla");
    const cardCheckbox = screen.queryByTestId("card-checbox");
    expect(cardCheckbox).not.toBeInTheDocument();
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

  test("View Only mode", () => {
    render(
      <BrowserRouter>
        <CardHeader cardInfo={{ isEdeting: false }} />
        <Settings />
      </BrowserRouter>
    );
    const viewOnlyCheckbox = screen.getByTestId("view-only-checkbox");
    const pencilIcon = screen.getByTestId("pencil-button");
    expect(viewOnlyCheckbox).toBeInTheDocument();
    expect(viewOnlyCheckbox).not.toBeChecked();
    userEvent.click(viewOnlyCheckbox);
    expect(viewOnlyCheckbox).toBeChecked();
    expect(pencilIcon).not.toBeInTheDocument();
  });
});
