import { render, fireEvent } from "@testing-library/react";
import { App, Todo } from "./App";

jest.mock("axios", () => ({
  get: () => {
    const data: Todo[] = [
      {
        id: 1,
        userId: 1,
        title: "user1",
        completed: true,
      },
      {
        id: 2,
        userId: 1,
        title: "user1",
        completed: false,
      },
    ];
    return {
      data,
    };
  },
}));

describe("Mock", () => {
  it("renders", async () => {
    const screen = render(<App />);
    expect(await screen.findAllByTestId("todo")).toHaveLength(2);

    fireEvent.click(screen.getByText(/Toggle/));

    expect(await screen.findAllByTestId("todo")).toHaveLength(1);
  });
});
