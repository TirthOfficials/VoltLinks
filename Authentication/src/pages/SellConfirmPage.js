import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SellConfirmPage.module.css";

const SellConfirmPage = () => {
  const navigate = useNavigate();

  const onRectangle5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/buy");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onEllipse7Click = useCallback(() => {
    // Please sync "Profile Page" to the project
  }, []);

  return (
    <div className={styles.sellConfirmPage}>
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
              <div className={styles.sell}>SeLL</div>
              <img className={styles.ellipseIcon} alt="" src="/ellipse-6.svg" />
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
              <b className={styles.sell1}>Sell</b>
              <div className={styles.buy}>Buy</div>
              <div className={styles.about}>About</div>
            </div>
          </div>
          <div className={styles.dalle2023092317361} />
          <div className={styles.yourListingHas}>
            Your listing has been posted! Thank you!
          </div>
          <div className={styles.sellPageChild} onClick={onRectangle5Click} />
          <div className={styles.sellPageItem} onClick={onRectangle6Click} />
          <div className={styles.sellPageInner} onClick={onRectangle7Click} />
          <img
            className={styles.userProfileIcon}
            alt=""
            src="/profile-icon.svg"
          />
          <div className={styles.ellipseDiv} onClick={onEllipse7Click} />
          <img
            className={styles.untitledDraft4Background}
            alt=""
            src="/untitled-draft4-background-removed-3@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SellConfirmPage;
