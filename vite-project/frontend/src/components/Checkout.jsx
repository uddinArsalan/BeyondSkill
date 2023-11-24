import React from "react";

const Checkout = () => {
  return (
    <form action="https://beyondskill-stripe.onrender.com/create-checkout-session" method="POST">
      <button type="submit" className="text-white bg-green-500 text-xs p-1">
        Enroll now
      </button>
    </form>
  );
};

export default Checkout;