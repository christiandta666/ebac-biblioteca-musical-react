import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import SearchResults from "../components/SearchResults/SearchResults";
import theme from "../styles/theme";

const store = configureStore({
  reducer: {
    search: () => ({
      results: [
        {
          idAlbum: "1",
          strAlbum: "Definitely Maybe",
          strArtist: "Oasis"
        }
      ],
      loading: false,
      error: null
    })
  }
});
describe("SearchResults", () => {
  test("muestra album", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <SearchResults />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(
      screen.getByText("Definitely Maybe")
    ).toBeInTheDocument();
  });
  test("muestra artista", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <SearchResults />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(
      screen.getByText("Oasis")
    ).toBeInTheDocument();
  });
});