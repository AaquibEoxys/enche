import SubHeader from "../../../components/subHead/SubHeader";
import "./AllProduct.scss";
import ShippedFrom from "../ShippedFrom/ShippedFrom";
import BusinessModule from "../BusinessModule/BusinessModule";
import PriceRange from "../PriceRange/PriceRange";
import ByCategory from "../ByCategory/ByCategory";
import ByRating from "../ByRating/ByRating";
import Filterbar from "../FilterBar/Filterbar";
import ProductsCardsAL from "../ProductsCardsAL/ProductsCardsAL";
import Images from "../../../components/Images/Images";
import { Container } from "react-bootstrap";

const AllProducts = () => {
  return (
    <>
      <SubHeader />
      <Container>
        <div className="al_prdt p-5">
          <div className="sec_1">
            <div className="icon mx-3 mt-3">
              <img src={Images?.filter_1} alt="" />
            </div>
            <div className="h5 fw-bold mt-3">Filter Result</div>
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
            <div className=" row mt-5 bodybar">
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
    </>
  );
};

export default AllProducts;
