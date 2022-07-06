import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CardBody from "./CardBody";
import { render, screen, fireEvent } from "./customRender";

describe("CardBody component", () => {
  test("render correct CardBody component items if isEditable mode is on", () => {
    render(
      <BrowserRouter>
        <CardBody cardInfo={{ isEdeting: true }} />
      </BrowserRouter>
    );
    const inputField = screen.getByTestId("input-text-field");
    expect(inputField).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: "blabla" } });
    expect(inputField.value).toBe("blabla");
  });

  test("render correct CardBody component items if isEditable mode is off", async () => {
    render(
      <BrowserRouter>
        <CardBody cardInfo={{ isEdeting: false }} />
      </BrowserRouter>
    );
    const inputField = screen.queryByTestId("input-field");
    const link = screen.getByTestId("link to CardById");
    expect(link).toBeInTheDocument();
    expect(inputField).not.toBeInTheDocument();
    userEvent.dblClick(link);
  });

  test("The style of checked card", () => {
    render(
      <BrowserRouter>
        <CardBody cardInfo={{ checked: true }} />
      </BrowserRouter>
    );
    const link = screen.getByTestId("link to CardById");
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("card-text checked");
  });
});
