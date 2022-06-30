import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";
import { render, screen, waitFor } from "./customRender";

const mockCardInfo = {
  checked: false,
  id: "001",
  isEdeting: false,
  text: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  title: "Bulbasaur",
};

describe("Card component", () => {
  test("render card component with proper text", async () => {
    render(
      <BrowserRouter>
        <Card cardInfo={mockCardInfo} />
      </BrowserRouter>
    );

    const card = await waitFor(() => screen.findByTestId("card-component"), {
      timeout: 2000,
    });
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("Bulbasaur");
    expect(card).toHaveTextContent(
      "Bulbasaur can be seen napping in bright sunlight."
    );
  });
});
