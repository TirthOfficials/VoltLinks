import styles from "./Buy.module.css";

const Buy = () => {
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
              <img
                className={styles.abstractDesignChild2}
                alt=""
                src="/ellipse-121.svg"
              />
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
              <img
                className={styles.abstractDesignChild7}
                alt=""
                src="/ellipse-121.svg"
              />
            </div>
            <div className={styles.menuTopBanner}>
              <div className={styles.home}>Home</div>
              <div className={styles.sell}>Sell</div>
              <b className={styles.buy2}>Buy</b>
              <div className={styles.about}>About</div>
            </div>
            <img
              className={styles.profileIcon}
              alt=""
              src="/profile-icon1.svg"
            />
            <div className={styles.buyWrapper}>
              <div className={styles.buy3}>{`Buy `}</div>
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
          <p className={styles.selling999Mw}>Price: $5,000</p>
        </div>
      </div>
      <div className={styles.availableMw}>Available Sellers:</div>
      <div className={styles.ryanGoldSellingContainer}>
        <p className={styles.johnHo}>Ryan Gold</p>
        <p className={styles.selling999Mw}>{`Selling: 35 MW `}</p>
        <p className={styles.selling999Mw}>Price: $500</p>
      </div>
      <div className={styles.jimRoSellingContainer}>
        <p className={styles.johnHo}>Jim Ro</p>
        <p className={styles.selling999Mw}>{`Selling: 378 MW `}</p>
        <p className={styles.selling999Mw}>Price: $2,000</p>
      </div>
      <div className={styles.sarahJoSellingContainer}>
        <p className={styles.johnHo}>Sarah Jo</p>
        <p className={styles.selling999Mw}>{`Selling: 700 MW `}</p>
        <p className={styles.selling999Mw}>Price: $3,000</p>
      </div>
      <div className={styles.availableMw1}>Available Balance:</div>
      <div className={styles.availableMwInput} />
      <div className={styles.reloadWrapper}>
        <div className={styles.reload}>Reload</div>
      </div>
    </div>
  );
};

export default Buy;
