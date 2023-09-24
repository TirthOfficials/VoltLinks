import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BuyConfirmPage.module.css";

const BuyConfirmPage = () => {
  const navigate = useNavigate();

  const onRectangle5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onEllipse8Click = useCallback(() => {
    // Please sync "Profile Page" to the project
  }, []);

  return (
    <div className={styles.buyConfirmPage}>
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
              <div className={styles.buy}>BUY</div>
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
              <div className={styles.successfulTranscriptionTheContainer}>
                <p className={styles.successfulTranscription}>
                  Successful Transcription.
                </p>
                <p className={styles.successfulTranscription}>
                  The Mega Watts will be transferred to you.
                </p>
              </div>
            </div>
            <div className={styles.menuTopBanner}>
              <div className={styles.home}>Home</div>
              <div className={styles.sell}>Sell</div>
              <b className={styles.buy1}>Buy</b>
              <div className={styles.about}>About</div>
            </div>
            <img
              className={styles.profileIcon}
              alt=""
              src="/profile-icon.svg"
            />
          </div>
          <div className={styles.sellPageChild} onClick={onRectangle5Click} />
          <div className={styles.sellPageItem} onClick={onRectangle6Click} />
          <div className={styles.sellPageInner} onClick={onRectangle7Click} />
          <div className={styles.ellipseDiv} onClick={onEllipse8Click} />
          <img
            className={styles.untitledDraft4Background}
            alt=""
            src="/untitled-draft4-background-removed-2-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyConfirmPage;
