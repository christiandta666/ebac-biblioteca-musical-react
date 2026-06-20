import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import App from "../App";
import theme from "../styles/theme";

const store = configureStore({
  reducer: {
    library: () => [],
    search: () => ({
      results: [],
      loading: false,
      error: null
    })
  }
});
describe("App", () => {
  test("renderiza header", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(
      screen.getByText(/mi playlist/i)
    ).toBeInTheDocument();
  });
});