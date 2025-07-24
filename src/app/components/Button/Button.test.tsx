import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("<Button />", () => {
  it("dispara onClick", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    const { getByRole } = render(<Button onClick={handleClick}>Hola</Button>);

    await user.click(getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
