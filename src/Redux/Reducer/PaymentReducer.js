import { useReducer } from "react";

function GetPayment(state, { type, payload }) {
  switch (type) {
    case "PAYMENT":
      return { ...state, payment: payload };
    default:
      return state;
  }
}

function Payment() {
  return useReducer(GetPayment, []);
}

export default Payment;
