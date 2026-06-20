import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Library from "../components/Library/Library";

describe("Library", () => {
  test("muestra biblioteca vacia", () => {
    const store = configureStore({
      reducer: {
        library: () => []
      }
    });
    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );
    expect(
      screen.getByText(/mi biblioteca/i)
    ).toBeInTheDocument();
  });
  test("muestra canciones agregadas", () => {
    const store = configureStore({
      reducer: {
        library: () => [
          {
            idAlbum: "1",
            strAlbum: "Hybrid Theory",
            strArtist: "Linkin Park"
          }
        ]
      }
    });
    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );
    expect(
      screen.getByText("Hybrid Theory")
    ).toBeInTheDocument();
  });
});