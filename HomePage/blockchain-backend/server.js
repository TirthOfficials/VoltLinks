const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Web3 = require('web3');
const mongoose = require('mongoose');
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());

const MONGODB_URI = 'mongodb+srv://tirthofficials:ilyeU1u8qhjUnAOg@cluster0.qo8yscd.mongodb.net/?retryWrites=true&w=majority'; // Replace this with your MongoDB connection string

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});
const sellOrderSchema = new mongoose.Schema({
    desiredAmount: String,
    availableMw: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const SellOrder = mongoose.model('SellOrder', sellOrderSchema);
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

app.get('/buy', (req, res) => {
    // Here you'd generally initiate a transaction
    // For demonstration purposes, we'll assume it always succeeds
    res.json({ success: true });
});

app.get('/sell', (req, res) => {
    // Similar logic for selling
    res.json({ success: true });
});
app.post('/submit-sell', async (req, res) => {
    try {
        const { desiredAmount, availableMw } = req.body;
        const order = new SellOrder({
            desiredAmount,
            availableMw
        });

        await order.save();

        res.json({ message: 'Order saved successfully' });
    } catch (err) {
        console.error('Error saving order', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.get('/list-sell-orders', async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.json(sellers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sellers' });
    }
});
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
