import React from "react";
import StripeCheckout from "react-stripe-checkout";
const ButtonStrip = ({ price }) => {
  const priceForStrip = price * 100;
  const stripeKey =
    "pk_test_51GxD2aC8AGf980LuGOnYgHl5QengehVgXhmgvTz04W61FxgneZcc1ueFKJWdMPjtnXr9ALTjGuYM9Jlh3WcqGYPY009lFztjPv";
  const onToken = (token) => {
    console.log(token);
    alert("Payement effectue avec succès ");
  };
  return (
    <StripeCheckout
      label="payez maintenant"
      name="CRWN Vêtements Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`le Tolale est de $${price}`}
      amount={priceForStrip}
      panelLabel="payez maintenant"
      token={onToken}
      stripeKey={stripeKey}
    />
  );
};

export default ButtonStrip;
