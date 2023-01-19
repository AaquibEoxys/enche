import "./AllProduct.scss";
import ShippedFrom from "../ShippedFrom/ShippedFrom";
import BusinessModule from "../BusinessModule/BusinessModule";
import PriceRange from "../PriceRange/PriceRange";
import ByCategory from "../ByCategory/ByCategory";
import ByRating from "../ByRating/ByRating";
import Filterbar from "../FilterBar/Filterbar";
import ProductsCardsAL from "../ProductsCardsAL/ProductsCardsAL";
import SubHeader from "../../../../components/subHead/SubHeader";
import Images from "../../../../components/Images/Images";
import { Container } from "react-bootstrap";

const AllProducts = () => {
  return (
    <div className="container-fluid">
      <SubHeader />
      <div className="hr_ln"></div>
      <Container>
        <div className="al_prdt py-5">
          <div className="sec_1">
            <div className="al_prdc_hd">
              <div className="alprdc_sec1">
                <div className="icon mx-2">
                  <img src={Images.filter_1} />
                </div>
                <span className="al_prdc_hd_1">Filter Result</span>
              </div>
              <div className="alprdc_sec2 mx-5">
                <div className="icon mx-3 mt-3">
                  <img src={Images?.searchResult} />
                </div>
                <div className="al_prdc_hd_2 mt-3">
                  Search result for <span className="fltr_reslt">Leather</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sec_2">
            <div className="sidebar">
              <ShippedFrom />
              <BusinessModule />
              <PriceRange />
              <ByCategory />
              <ByRating />
            </div>
            <div className=" row mt-2 bodybar">
              <div className="">
                <Filterbar />
              </div>
              <div className="">
                <ProductsCardsAL />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
