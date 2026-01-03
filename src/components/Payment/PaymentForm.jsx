import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { environment } from '../../config/environment';
import './PaymentForm.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '');

const PaymentForm = ({ priceId, planType, planName, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get auth token from cookies
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('auth_token='))
        ?.split('=')[1];

      if (!token) {
        setError('Please log in to continue');
        setLoading(false);
        return;
      }

      // Create subscription
      const { data } = await axios.post(
        `${environment.apiUrl}/api/stripe/create-subscription`,
        { priceId, planType },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      // Confirm payment
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: localStorage.getItem('userEmail') || '',
            },
          },
        }
      );

      if (confirmError) {
        setError(confirmError.message);
        setLoading(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.response?.data?.error || err.message || 'Payment failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="payment-form-container">
      <h3>Complete Payment for {planName}</h3>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="card-element-container">
          <label>Card Details</label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="payment-buttons">
          <button
            type="submit"
            disabled={!stripe || loading}
            className="payment-button"
          >
            {loading ? 'Processing...' : `Pay Now`}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const PaymentWrapper = ({ priceId, planType, planName, onSuccess, onCancel }) => {
  if (!process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY) {
    return (
      <div className="payment-error">
        <p>Stripe is not configured. Please add REACT_APP_STRIPE_PUBLISHABLE_KEY to your environment variables.</p>
        <button onClick={onCancel} className="cancel-button">Close</button>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm
        priceId={priceId}
        planType={planType}
        planName={planName}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    </Elements>
  );
};

export default PaymentWrapper;

