import styles from "./Sell.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Sell = () => {
  const [desiredAmount, setDesiredAmount] = useState("");
    const [availableMw, setAvailableMw] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:5001/submit-sell", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    desiredAmount,
                    availableMw
                })
            });
            
            const data = await response.json();

            if(data.message) {
                alert(data.message);
            }
        } catch (error) {
            alert("Error submitting data.");
        }
    }
  return (
    
    <div className={styles.sell}>
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
                src="/rectangle@2x.png"
              />
              <img
                className={styles.abstractDesignChild1}
                alt=""
                src="/rectangle-51.svg"
              />
              <div className={styles.sell1}>SeLL</div>
              <img className={styles.ellipseIcon} alt="" src="/ellipse-6.svg" />
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
            <Link to="/" className={styles.home}>Home</Link> 
            {/* <div className={styles.home}>Home</div> */}
            <b className={styles.sell2}>Sell</b>
            {/* <div className={styles.buy}>Buy</div>
            <div className={styles.about}>About</div> */}
            <Link to="/buy" className={styles.buy}>Buy</Link> 
            <Link to="/about-page" className={styles.about}>About</Link>
            <div className={styles.sellPageChild} />
            <img
              className={styles.sellPageItem}
              alt=""
              src="/group-1000001348.svg"
            />
            <div className={styles.userInputQuestion}>
                <div className={styles.desiredAmountPer}>Desired Amount Per MegaWatt:</div>
                <input 
                    value={desiredAmount}
                    onChange={(e) => setDesiredAmount(e.target.value)}
                    className={styles.desiredPriceInput}
                    placeholder="Enter Amount"
                />
                <div className={styles.availableMw}>Available MegaWatts:</div>
                <input 
                    value={availableMw}
                    onChange={(e) => setAvailableMw(e.target.value)}
                    className={styles.availableMwInput}
                    placeholder="Enter MegaWatts"
                />
                {/* <button onClick={handleSubmit}>Submit</button> */}
            </div>
            
            <div className={styles.postListingWrapper}>
            {/* <button onClick={handleSubmit} className={styles.postListing}>Submit</button> */}
              <a href="http://localhost:3000/sell-confirm-page"><div onClick={handleSubmit} className={styles.postListing}>Post Listing</div></a>
            </div>
            {/* <div className={styles.userInputQuestion}>
              <div className={styles.desiredAmountPer}>
                Desired Amount Per MegaWatt:
              </div>
              <div className={styles.availableMw}>Available MegaWatts:</div>
              <div className={styles.availableMwInput} />
              <img
                className={styles.desiredPriceInput}
                alt=""
                src="/desired-price-input.svg"
              />
            </div> */}
            <img
              className={styles.untitledDraft33Backgroun}
              alt=""
              src="/untitled-draft3-3-background-removed-1@2x.png"
            />
          </div>
          <div className={styles.dalle2023092317361} />
          <img
            className={styles.untitledDraft1Background}
            alt=""
            src="/untitled-draft1-background-removed-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Sell;
