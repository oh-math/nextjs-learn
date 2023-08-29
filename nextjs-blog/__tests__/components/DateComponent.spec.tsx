import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DateComponent from "../../src/components/date";
import { formatDate } from "../../src/lib/format-date";

describe("DateComponent", () => {
  let formatedDate: string;
  let dateElement: HTMLElement;

  const dateString = new Date().toString();

  beforeEach(() => {
    render(<DateComponent dateString={dateString} />);
    const toDate = new Date(dateString);

    formatedDate = formatDate(toDate);
    dateElement = screen.getByText(formatedDate);
  });

  it("should render DateComponent", () => {
    expect(dateElement).toBeInTheDocument();
  });

  it("should have attribute", () => {
    expect(dateElement).toHaveAttribute("dateTime", dateString);
  });
});
