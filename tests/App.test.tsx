import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

describe("App", () => {
  it("renders headline", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headline = screen.getByText(/Quizzical/i);
    expect(headline).toBeInTheDocument();
  });
});
