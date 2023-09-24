import React, { useState } from 'react';

const SellComponent = () => {
    const [message, setMessage] = useState('');

    const handleSellClick = async () => {
        try {
            const response = await fetch('http://localhost:5001/sell');
            const data = await response.json();

            if (data.success) {
                setMessage('Sold successfully!');
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
        
        
      />
      {/* <button type="submit">Sell</button> */}
    </form>
            <button onClick={handleSellClick}>Sell</button>
            <p>{message}</p>
        </div>
    );
}

export default SellComponent;
