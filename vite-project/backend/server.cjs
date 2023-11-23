// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MBcznSHgeG3JPYUWg5xBXYVzQtgI6RbgR5olsSplqAFyvrtKQ9tYxwYtiuS7bHhLmiwdN0Sc9s5q116R01KKiyt00V4ZS4Toy');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1OFjXpSHgeG3JPYUiWNy22rd',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));