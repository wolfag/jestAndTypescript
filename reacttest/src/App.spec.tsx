import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders", async () => {
    const screen = render(<App />);

    expect(screen.getByText(/Hello world!/)).toBeTruthy();

    fireEvent.click(screen.getByText("Update text"));

    expect(await screen.findByText(/Next text/)).toBeTruthy();

    screen.debug();
  });
});
