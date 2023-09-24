import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.sellPage}>
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
          <img className={styles.ellipseIcon} alt="" src="/ellipse-14.svg" />
          <div className={styles.about}>About</div>
          <img
            className={styles.abstractDesignChild2}
            alt=""
            src="/ellipse-6.svg"
          />
          {/* <img
            className={styles.abstractDesignChild3}
            alt=""
            // src="/ellipse-121.svg"
          /> */}
          <img
            className={styles.abstractDesignChild4}
            alt=""
            src="/ellipse-13.svg"
          />
          <img
            className={styles.abstractDesignChild5}
            alt=""
            src="/ellipse-10.svg"
          />
          <div className={styles.rectangleDiv} />
          <div className={styles.abstractDesignChild6} />
          <div className={styles.abstractDesignChild7} />
          <img
            className={styles.companyLogoIcon}
            alt=""
            src="/company-logo@2x.png"
          />
          <div className={styles.companyName}>VoltLinks</div>
          {/* <img
            className={styles.abstractDesignChild8}
            alt=""
            // src="/ellipse-121.svg"
          /> */}
        </div>
        <div className={styles.menuTopBanner}>
          {/* <div className={styles.home}>Home</div> */}
          <Link to="/" className={styles.home}>Home</Link> 
          <Link to="/sell"className={styles.sell}>Sell</Link>   {/* Link to Sell.js */}
            <Link to="/buy" className={styles.buy}>Buy</Link> 
          <b className={styles.about1}>About</b>
        </div>
        <img className={styles.profileIcon} alt="" src="/profile-icon.svg" />
      </div>
      <div className={styles.atVoltlinksOurContainer}>
        <p className={styles.atVoltlinksOur}>
          At VoltLinks, our mission is to revolutionize the energy landscape by
          empowering individuals, communities, and renewable energy producers to
          participate in a sustainable and equitable energy ecosystem. We
          envision a world where clean and renewable energy is accessible to
          all, and where the trading of energy resources is transparent,
          efficient, and environmentally conscious.
        </p>
        <p className={styles.atVoltlinksOur}>&nbsp;</p>
        <p className={styles.atVoltlinksOur}>
          The adoption of renewable energy is essential to combat global warming
          and mitigate the impacts of climate change. It represents a crucial
          step toward a more sustainable, cleaner, and resilient future for our
          planet and future generations. By embracing renewable resources, we
          can reduce emissions, improve air quality, create economic
          opportunities, and protect the environment.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
