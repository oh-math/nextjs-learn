import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DateComponent from "../../src/components/DateComponent";
import { formatDate } from "../../src/lib/format-date";

describe("DateComponent", () => {
  let formatedDate: string;
  let dateElement: HTMLElement;

  const date = new Date();
  const dateString = date.toString();

  beforeEach(() => {
    render(<DateComponent dateString={dateString} />);

    formatedDate = formatDate(date);
    dateElement = screen.getByText(formatedDate);
  });

  it("should render DateComponent", () => {
    expect(dateElement).toBeInTheDocument();
  });

  it("should have attribute", () => {
    expect(dateElement).toHaveAttribute("dateTime", dateString);
  });
});
