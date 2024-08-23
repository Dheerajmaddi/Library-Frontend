import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PqMkwAo137Zn86NWpjkp4hfV23ZDERwDaxVwzkSCxvsYczR1SAiloeLcdsSF3WL9w0sNZtWUIt96yd6yP3pjmAb00lnk9oO78"
);

// console.log("Stripe Publish Key: ", process.env.STRIPE_PUBLISH_KEY);
console.log("Stripe Promise:", stripePromise);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);
