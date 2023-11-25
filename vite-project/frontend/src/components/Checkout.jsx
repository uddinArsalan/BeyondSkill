import React from "react";

const Checkout = ({ id , imageUrl, title}) => {
  // https://beyondskill-stripe.onrender.com
  return (
    <form action={`https://beyondskill-stripe.onrender.com/create-checkout-session`} method="POST">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="imageUrl" value={imageUrl} />
      <input type="hidden" name="title" value={title} />
      <button type="submit" className="text-white bg-green-500 text-xs p-1">
        Enroll now
      </button>
    </form>
  );
};

export default Checkout;
