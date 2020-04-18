import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

type Props = {
  price: number;
};
const stripeToken = (token) => {
  console.log(`token:${token}`);
  alert('success');
};

function Stripebutton({ price }: Props) {
  const pricecheckout = 100 * price;
  const publishKey = 'pk_test_0bslZuCpUHNgyBlDKyUav1Ol00utxcdjVM';
  return (
    <StripeCheckout
      label="pay now"
      name="CRWN Colthing"
      billingAddress
      shippingAddress
      description={`You payment is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      amount={pricecheckout}
      panelLabel="Pay now"
      token={stripeToken}
      stripeKey={publishKey}
    />
  );
}

export default Stripebutton;
