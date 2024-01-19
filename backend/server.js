const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');

// const cartRoutes = require('./routes/itemRoutes');
const itemRouter = require('./routes/itemRoutes');

const app = express();
const port = 8000;
app.use(cors());

app.use(express.json());

// app.get('/users', (req,res) => {
//   console.log('running handler')
//   res.send([{name: 'Tony'}])
// })

app.use('/users', userRouter);
// app.use('/users/id:', userRoutes);
// app.use('/users/id:/shoppingcart', cartRoutes);
// app.use('cart', userRouter);

app.use('/items', itemRouter);


// app.use('/users/:id/cart', userRouter);


app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
});




// Approach this as an admin. 
// Make Hen a user and Jeff an Admin. 


// Make a simple login.
// Select your user and then pull up the information for that user. 