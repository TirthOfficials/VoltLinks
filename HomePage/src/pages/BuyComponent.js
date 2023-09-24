import React, { useState } from 'react';

const BuyComponent = () => {
    const [message, setMessage] = useState('');

    const handleBuyClick = async () => {
        try {
            const response = await fetch('http://localhost:5001/buy');
            const data = await response.json();

            if (data.success) {
                setMessage('Bought successfully!');
            } else {
                setMessage('Transaction failed!');
            }
        } catch (error) {
            setMessage('Error occurred: ' + error.message);
        }
    }

    return (
        <div>
             <form>
      <input
        placeholder="Enter Address"
        
       
      />
      <input
        placeholder="Enter Amount"
        
        // onChange={(e) => setAmount(e.target.value)}
      />
      {/* <button type="submit">Buy</button> */}
    </form>
            <button onClick={handleBuyClick}>Buy</button>
            <p>{message}</p>
        </div>
    );
}

export default BuyComponent;
