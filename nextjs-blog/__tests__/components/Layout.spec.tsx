import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../../src/components/layout";
const profilePicture =
  "../../public/images/4ea2131b2a5c977a53ebe689254c862b.jpg";

describe("Layout", () => {
  it("should render <Image> component", () => {
    render(<Layout children={undefined} home />);

    const imageComponent = screen.getByRole("img");

    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveAccessibleName();
    expect(imageComponent).toHaveProperty("height", 144);
    expect(imageComponent).toHaveProperty("width", 144);
  });

  it("should render <Image> component with differents measures when `home` property is false", () => {
    render(<Layout children={undefined} home={false} />);

    const imageComponent = screen.getByRole("img");

    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveAccessibleName();
    expect(imageComponent).toHaveProperty("height", 108);
    expect(imageComponent).toHaveProperty("width", 108);
  });

  it("should render <Link> element within <h2> when `home` property is false", () => {
    render(<Layout children={undefined} home={false} />);

    const h2 = screen.getByRole("heading", {
      level: 2,
    });
    const linkComponent = screen.getByText("Matheus");

    expect(h2).toBeInTheDocument();
    expect(linkComponent).toBeInTheDocument();
    expect(h2).toContainElement(linkComponent);
  });

  it("should render `Back to home` Link component when `home` property is false", () => {
    render(<Layout children={undefined} home={false} />);

    const link = screen.getByText("← Back to home");

    expect(link).toBeInTheDocument();
    expect(link).toHaveProperty("href", "http://localhost/");
  });
});
