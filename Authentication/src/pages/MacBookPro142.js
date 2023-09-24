import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro142.module.css";

const MacBookPro142 = () => {
  const navigate = useNavigate();

  const onRectangle10Click = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.voltlinks}>
        <div className={styles.homePage}>
          <div className={styles.abstractDesign}>
            <div className={styles.abstractDesignChild} />
            <img
              className={styles.abstractDesignItem}
              alt=""
              src="/rectangle-5.svg"
            />
            <div className={styles.abstractDesignInner} />
            <div className={styles.ellipseDiv} />
            <div className={styles.voltlinks1}>VOLTLINKS</div>
            <img
              className={styles.personInTheMiddle}
              alt=""
              src="/group-1.svg"
            />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-6.svg" />
            <img
              className={styles.abstractDesignChild1}
              alt=""
              src="/ellipse-12.svg"
            />
            <img
              className={styles.abstractDesignChild2}
              alt=""
              src="/ellipse-13.svg"
            />
            <img
              className={styles.abstractDesignChild3}
              alt=""
              src="/ellipse-10.svg"
            />
            <div className={styles.rectangleDiv} />
            <div className={styles.abstractDesignChild4} />
            <div className={styles.abstractDesignChild5} />
          </div>
          <div className={styles.topMenuBanner}>
            <b className={styles.home1}>Home</b>
            <div className={styles.sell}>Sell</div>
            <div className={styles.buy}>Buy</div>
            <div className={styles.about}>About</div>
          </div>
          <div className={styles.homePageChild} />
          <div className={styles.oval} />
          <img className={styles.path200Icon} alt="" src="/path-200.svg" />
          <img
            className={styles.blurryRectangleIcon}
            alt=""
            src="/blurry-rectangle.svg"
          />
          <div className={styles.homePageItem} />
          <div className={styles.buyText}>BUY</div>
          <div className={styles.homePageInner} />
          <div className={styles.sellText}>SELL</div>
          <b className={styles.people}>
            <p className={styles.p}>25,000+</p>
            <p className={styles.people1}>people</p>
          </b>
          <div className={styles.seeTheFutureContainer}>
            <p className={styles.p}>See The Future</p>
            <p className={styles.p}>Of Energy</p>
          </div>
          <div className={styles.homePageChild1} />
          <img className={styles.vectorIcon} alt="" src="/vector-23.svg" />
          <div className={styles.homePageChild2} />
          <img className={styles.homePageChild3} alt="" src="/vector-231.svg" />
          <img
            className={styles.lightbulb2Icon}
            alt=""
            src="/output-318171035-0removebgpreview-1@2x.png"
          />
          <img
            className={styles.lightbulb1Icon}
            alt=""
            src="/output-318171035-0removebgpreview-2@2x.png"
          />
          <img className={styles.companyLogoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.companyName}>VoltLinks</div>
          <div className={styles.homePageChild4} />
          <div className={styles.homePageChild5} onClick={onRectangle10Click} />
          <div className={styles.homePageChild6} />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro142;
