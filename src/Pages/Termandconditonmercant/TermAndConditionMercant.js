import React from "react";
import SubHeader from "../../components/subHead/SubHeader";
import "./TermAndConditionMercant.scss";
import Images from "../../components/Images/Images";

const TermAndConditionMercant = () => {
  return (
    <div>
      <SubHeader />
      <div>
        <img className="banner2-img" src={Images?.Banner2} alt="" />
      </div>
      <div>
        <div className="term-cond-merc container">
          <div className="term-condition">
            <div className="banner-content">
              <h1 className="banner-h1">
                enche sdn Bhd was established as a new venture in the
              </h1>
              <h1 className="banner-h2">
                digital sector through the creation of an e-commerce platform.
              </h1>
              <h5 className="banner-h">
                encehe is a marketplace portal well designed to allow corparate
                business (B2B),customer marketplace(B2C).
              </h5>
              <h5 className="banner-h5">
                charity initiative(charity catt),referral program
                (encheffiliate),olline as well as
              </h5>
              <h5 className="banner-h5">
                offline enterpreneurship (enchepreneur) being carried out
                through a single platform.
              </h5>
              <h5 className="banner-h5">
                A brand with a mission to provide a business solution for
                businesses globally by
              </h5>
              <h5 className="banner-h5">
                providing an e-commerce platform that has boundless capacity.
              </h5>
              <button className="banner-btn">Explore enche</button>
            </div>
          </div>
          <div>
            <h1 className="enche-market">
              enche marketplace lets grow together
            </h1>
            <h5 className="enche-h5">
              what better way to bring nations closer other than through
              business and charity
            </h5>
            <h5 className="enche-h5">
              whether you are here to grow your business, be an inspiration to
              your clients, find your purpose
            </h5>
            <h5 className="enche-h5">
              make business a charity commitment or change the world, enche can
              help
            </h5>
            <div className="enche-market-img">
              <img id="enche-mart-img" src={Images?.computer} alt="" />
            </div>
          </div>
          <div className="vision-card">
            <div className="ourvision-ench">
              <h2 className="our-vrn-head">Our vision</h2>
              <h6 className="our-vrn">
                to make ench as a one-stop digital sopping
              </h6>
              <h6 className="our-vrn">center for the global audience</h6>
              <h6 className="our-vrn">
                To be a significant e-commerce marketplace portal
              </h6>
              <h6 className="our-vrn">
                that strives in uplifting SME and Artisan products globally.
              </h6>
            </div>
            <div className="ourposition-ench">
              <h2 className="our-pos-head">Our Positioning</h2>
              <h6 className="our-post">
                To internet users across the region shopee offers a
              </h6>
              <h6 className="our-post">
                one-stop onlinesgopping experience that provides a wide
              </h6>
              <h6 className="our-post">
                selection of products a social community for
              </h6>
              <h6 className="our-post">
                exporation ,and seemless fulfilment services.
              </h6>
            </div>
          </div>
          <div className="layalty-img">
            <img id="layal-img" src={Images?.loyalty} alt="" />
          </div>
          <div>
            <h2 className="layalty-text">
              Trustworthiness, Courage, Discipline, Digigence, and Loyalty
            </h2>
            <h6 className="loyalty-h6">
              At enche all employees shae five fundamental values to form the
              roots of company corporate culture.
            </h6>
            <h6 className="loyalty-h6">
              We are convinced that only in an environment shaped by these
              values can accenture and develop services better,
            </h6>
            <h6 className="loyalty-h6">
              provide a position outcome of solution as well as obtain a
              well-grounded team of peers
            </h6>
          </div>
          <div className="loyalty-para">
            <h6 className="layalty-ex">
              <span>enche.com</span> aims to develop role models within the
              company with admirable quality to support
            </h6>
            <h6 className="layalty-ex">
              secure and give back to the society by working closely with the
              community non-profit and charity organization.
            </h6>
            <h6 className="layalty-ex">
              it is hoped that through CSR programs skills and teamwork can be
              nutured across the generations
            </h6>
            <h6 className="layalty-ex">
              whilst doing something positive for the community the "do good
              feel good" phenomenon would be an experience
            </h6>
            <h6 className="layalty-ex">
              of a warm feeling from acts of altruism and charity at same point
              in our lives.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndConditionMercant;
