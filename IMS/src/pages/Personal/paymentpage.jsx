import GooglePayButton from "@google-pay/button-react";
import React, { useEffect, useState } from "react";

function Buynow() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Ensures the component is mounted before rendering the button
    setReady(true);
  }, []);

  return (
    <div className="App">
      {ready && (
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "1000",
              currencyCode: "INR",
              countryCode: "IN",
            },
            shippingAddressRequired: true,
            callbackIntents: ["PAYMENT_AUTHORIZATION"],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("Loaded payment data", paymentRequest);
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log("Payment authorized", paymentData);
            return { transactionState: "SUCCESS" };
          }}
          existingPaymentMethodRequired={false}
          buttonColor="black"
          buttonType="buy"
        />
      )}
    </div>
  );
}

export default Buynow;
