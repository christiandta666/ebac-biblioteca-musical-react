import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: () => ({})
});
describe("SearchBar", () => {
  test("renderiza input", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(
      screen.getByPlaceholderText(/buscar artista/i)
    ).toBeInTheDocument();
  });
  test("permite escribir en input", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input =
      screen.getByPlaceholderText(/buscar artista/i);
    fireEvent.change(input, {
      target: {
        value: "Oasis"
      }
    });
    expect(input.value).toBe("Oasis");
  });
});