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
    <>
      <SubHeader />
      <Container>
        <div className="al_prdt p-5">
          <div className="sec_1">
            <div className="al_prdc_hd">
              <div className="alprdc_sec1">
                <div className="icon mx-3 mt-3">
                  <img src={Images?.filter_1} alt="" />
                </div>
                <div className="al_prdc_hd_1 mt-3">Filter Result</div>
              </div>
              <div className="alprdc_sec2 mx-5">
                <div className="icon mx-3 mt-3">
                  <img src={Images?.searchResult} />
                </div>
                <div className="al_prdc_hd_2 mt-3 mb-3">
                  Search result for <span className="fltr_reslt">Leather</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sec_2">
            <div className="sidebar">
              <div className="mx-3 mt-3">
                <ShippedFrom />
              </div>
              <div className="mx-3">
                <BusinessModule />
              </div>
              <div className="mx-3">
                <PriceRange />
              </div>
              <div className="mx-3">
                <ByCategory />
              </div>
              <div className="mx-3">
                <ByRating />
              </div>
            </div>
            <div className="bodybar">
              <Filterbar />
              <ProductsCardsAL />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AllProducts;
