// This is your test secret API key.
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 

const YOUR_DOMAIN = 'https://beyondskill.vercel.app/';
// const YOUR_DOMAIN = 'http://localhost:5173/';

app.post('/create-checkout-session/', async (req, res) => {
  // const priceId = req.body.id
  const name = req.body.title
  const imageUrl = req.body.imageUrl

  const product = await stripe.products.create({
    name: name,
    images : [imageUrl]
  });

  console.log(product.images,imageUrl)

  const price = await stripe.prices.create({
    product : product.id,
    currency: 'usd',
    unit_amount: 1000
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        // price: 'price_1OFjXpSHgeG3JPYUiWNy22rd',
        // quantity: 1,
        price : price.id,
        quantity : 1
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));