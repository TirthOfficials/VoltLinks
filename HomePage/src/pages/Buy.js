import styles from "./Buy.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Buy = () => {
  // const [sellers, setSellers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchSellers = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5001/list-sell-orders');
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch sellers");
  //       }

  //       const data = await response.json();
  //       if (Array.isArray(data)) {
  //         setSellers(data);
  //       } else {
  //         console.error("Received data is not an array:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching sellers:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchSellers();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={styles.buy}>
      <div className={styles.oculus}>
        <div className={styles.sellPage}>
          <div className={styles.sellPage1}>
            <div className={styles.abstractDesign}>
              <div className={styles.abstractDesignChild} />
              <div className={styles.abstractDesignItem} />
              <div className={styles.abstractDesignInner} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-51.svg"
              />
              <div className={styles.buy1}>BUY</div>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="/rectangle@2x.png"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-14.svg"
              />
              <img
                className={styles.abstractDesignChild1}
                alt=""
                src="/ellipse-6.svg"
              />
              {/* <img
                className={styles.abstractDesignChild2}
                alt=""
                src="/ellipse-121.svg"
              /> */}
              <img
                className={styles.abstractDesignChild3}
                alt=""
                src="/ellipse-13.svg"
              />
              <img
                className={styles.abstractDesignChild4}
                alt=""
                src="/ellipse-10.svg"
              />
              <div className={styles.rectangleDiv} />
              <div className={styles.abstractDesignChild5} />
              <div className={styles.abstractDesignChild6} />
              <img
                className={styles.companyLogoIcon}
                alt=""
                src="/company-logo@2x.png"
              />
              <div className={styles.companyName}>VoltLinks</div>
              {/* <img
                className={styles.abstractDesignChild7}
                alt=""
                src="/ellipse-121.svg"
              /> */}
            </div>
            <div className={styles.menuTopBanner}>
              {/* <div className={styles.home}>Home</div> */}
              <Link to="/" className={styles.home}>Home</Link> 
              {/* <div className={styles.sell}>Sell</div> */}
              <Link to="/sell"className={styles.sell}>Sell</Link>
              {/* <Link to="/buy" className={styles.buy}>Buy</Link>  */}
              <b className={styles.buy2}>Buy</b>
              {/* <div className={styles.about}>About</div> */}
              <Link to="/about-page" className={styles.about}>About</Link>
            </div>
            <img
              className={styles.profileIcon}
              alt=""
              src="/profile-icon.svg"
            />
            <div className={styles.buyWrapper}>
            <a href="http://localhost:3001" className={styles.buy3} target="_blank" rel="noopener noreferrer">{`Buy `}</a>
              {/* <div className={styles.buy3}>{`Buy `}</div> */}
            </div>
          </div>
          <img
            className={styles.sellPageChild}
            alt=""
            src="/ellipse-16@2x.png"
          />
          <img
            className={styles.sellPageItem}
            alt=""
            src="/ellipse-17@2x.png"
          />
          <img
            className={styles.sellPageInner}
            alt=""
            src="/ellipse-18@2x.png"
          />
          <img
            className={styles.sellPageChild1}
            alt=""
            src="/ellipse-19@2x.png"
          />
          <img
            className={styles.untitledDraft1Background}
            alt=""
            src="/untitled-draft1-background-removed-1@2x.png"
          />
        </div>
        
        <div className={styles.johnHoSellingContainer}>
          <p className={styles.johnHo}>John Ho</p>
          <p className={styles.selling999Mw}>{`Selling: 999 MW `}</p>
          <p className={styles.selling999Mw}>Price: Ξ3.14</p>
        </div>
      </div>
      <div className={styles.availableMw}>Available Sellers:</div>
      {/* {sellers.map(seller => (
                <div key={seller._id}>
                    <p className={styles.johnHo}>{seller.name}</p>
                    <p className={styles.selling999Mw}>{`Selling: ${seller.availableMw} MW `}</p>
                    <p className={styles.selling999Mw}>{`Price: Ξ${seller.price}`}</p>
                </div>
            ))} */}
      <div className={styles.ryanGoldSellingContainer}>
        <p className={styles.johnHo}>Ryan Gold</p>
        <p className={styles.selling999Mw}>{`Selling: 35 MW `}</p>
        <p className={styles.selling999Mw}>Price: Ξ0.31</p>
      </div>
      <div className={styles.jimRoSellingContainer}>
        <p className={styles.johnHo}>Jim Ro</p>
        <p className={styles.selling999Mw}>{`Selling: 378 MW `}</p>
        <p className={styles.selling999Mw}>Price: Ξ1.26</p>
      </div>
      <div className={styles.sarahJoSellingContainer}>
        <p className={styles.johnHo}>Sarah Jo</p>
        <p className={styles.selling999Mw}>{`Selling: 700 MW `}</p>
        <p className={styles.selling999Mw}>Price: Ξ1.88</p>
      </div>
      {/* <div className={styles.availableMw1}>Available Balance:</div>
      <div className={styles.availableMwInput} />
      <div className={styles.reloadWrapper}>
        <div className={styles.reload}>Reload</div>
      </div> */}
    </div>
  );
};

export default Buy;

// import { useState } from 'react';

// const BuyPage = () => {
//   const [address, setAddress] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleBuySubmit = async (event) => {
//     event.preventDefault();

//     // Call the backend buy endpoint and pass the address and amount
//     try {
//       const response = await fetch('http://localhost:5000/buy', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ address, amount }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert('Bought successfully!');
//       } else {
//         alert('Transaction failed!');
//       }
//     } catch (error) {
//       alert('Error occurred: ' + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Buy Tokens</h1>
//       <form onSubmit={handleBuySubmit}>
//         <input
//           placeholder="Enter Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//         <input
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button type="submit">Buy</button>
//       </form>
//     </div>
//   );
// };

// export default BuyPage;


