import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  screen.getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  /// query for diff inputs

  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/Last Name/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);

  // query for submit button/////
  const submitBtn = screen.getByRole("button", { name: /checkout/i });

  // fill out the inputs
  fireEvent.change(firstName, { target: { value: "Bikesh" } });
  fireEvent.change(lastName, { target: { value: "Maharjan" } });
  fireEvent.change(address, {
    target: { value: "1234 Gold Ave" },
  });
  fireEvent.change(city, { target: { value: "Santa Rosa" } });
  fireEvent.change(state, { target: { value: "California" } });
  fireEvent.change(zip, { target: { value: "95045" } });

  // on submit click button

  fireEvent.click(submitBtn);

  // assert that the success message has posted

  expect(await screen.findByTestId("successMessage")).toBeInTheDocument();
});
