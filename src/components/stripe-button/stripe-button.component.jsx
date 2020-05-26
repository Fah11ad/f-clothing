import React from "react";

import "./stripe-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ss5y4g5nJNqHSof0CegQZBXj00sQGX69fL";

  const onToken = token => {
      console.log(token);
      alert('Payment Successful')
      
  }

  return (
      <StripeCheckout 
        label='Pay Now'
        name='F-CLOTHING Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description= {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
  )
};

export default StripeCheckoutButton;
