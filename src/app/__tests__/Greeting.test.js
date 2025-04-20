import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home page", () => {
  it("renders the home page", () => {
    render(<Home />);

    // Check for some expected content on your home page
    // This will depend on what's in your actual Home component
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    // You might need to adjust this based on your actual content
    expect(screen.getByText(/welcomes/i)).toBeInTheDocument();
  });
});
