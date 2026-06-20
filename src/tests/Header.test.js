import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import theme from "../styles/theme";

describe("Header", () => {
  test("renderiza el titulo correctamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(
      screen.getByText(/mi playlist/i)
    ).toBeInTheDocument();
  });
});