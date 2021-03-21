import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders", async () => {
    const screen = render(<App />);

    expect(screen.getByText(/Hello world!/)).toBeTruthy();

    expect(await screen.findAllByTestId("todo")).toHaveLength(20);
  });
});
