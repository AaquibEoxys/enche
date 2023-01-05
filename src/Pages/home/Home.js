import React from "react";
import SubHeader from "../../components/subHead/SubHeader";
import Images from "../../components/Images/Images";
import "./home.scss";
import StarRating from "../../components/Rating/Rating";
import Title from "../../components/Title/Title";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Title(" | Homepage");
  }, []);

  const storesFiles = [
    { img: Images.charity, label: "Charity Cart" },
    { img: Images.enchepre, label: "enchepreneur" },
    { img: Images.encheff, label: "encheffiliate" },
    { img: Images.b2b, label: "B2B" },
    { img: Images.fluencer, label: "enchefluencer" },
    { img: Images.b2c, label: "B2C" },
    { img: Images.C2C, label: "C2C" },
    { img: Images.Dropship, label: "Dropship" },
  ];
  const data = [
    { img: Images.book, label: "Book" },
    { img: Images.book, label: "Hygiene" },
    { img: Images.book, label: "Cooked Food" },
    { img: Images.book, label: "Row Food" },
    { img: Images.book, label: "PPE" },
    { img: Images.book, label: "Stationaries" },
  ];

  const newArrival = [
    {
      img: Images.wood,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      rating: 4,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
  ];

  const categories = [
    { img: Images.Agriculture, label: "Agriculture" },
    { img: Images.books, label: "Books" },
    { img: Images.beautyPer, label: "Beauty & Personal Care" },
    { img: Images.fabricAndTextile, label: "Fabric & Textile" },
    { img: Images.fashion, label: "Fashion" },
    { img: Images.healthSupplements, label: "Health Supplements" },
    { img: Images.homeAppliances, label: "Home Appliances" },
    { img: Images.mommyAndBabies, label: "Mommy & Babies" },
    { img: Images.muslimFashion, label: "Muslim Fashion" },
    { img: Images.electronicsAccessories, label: "Electronics Accessories" },
    { img: Images.entertainment, label: "Enterainment" },
    { img: Images.SouvenirGift, label: "Souvenir, Handicraft, Gift" },
    { img: Images.securityProtection, label: "Security & Protection" },
    { img: Images.productPackaging, label: "Product Packaging" },
    { img: Images.officeSupplies, label: "Office Supplies" },
    { img: Images.weddingSupplies, label: "Wedding Supplies" },
    { img: Images.toolHome, label: "Tools & Home Improvement" },
    { img: Images.sportsAndHobbies, label: "Sports and Hobbies" },
  ];

  const craft = [
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 3,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 3,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 5,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 5,
      price: "RM 184.88",
    },
  ];

  const craftBox = [
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 3,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 3,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 5,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 5,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 3,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 3,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 5,
      price: "RM 184.88",
    },
    {
      img: Images.bracelet,
      label: "Gold-laced Black Leather [Size 22cm]",
      rating: 5,
      price: "RM 184.88",
    },
  ];

  return (
    <>
      <SubHeader />
      <div className="home_banner">
        <div className="back_banner"></div>
        <div className="container">
          <div className="banner_back row">
            <div className="d-flex home_banner_card">
              <div className="col-lg-2 col-md-3 banner_links">
                <div className="banner_link">
                  <span>Artisan Craft</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>Automotive</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>B2B</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>Health & Beauty</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>Charity</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>Electrical Tools</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>Enterainment</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>Fabric & Textile</span>
                  <span>&#62;</span>
                </div>
                <div className="banner_link">
                  <span>All Categories</span>
                  <span>&#62;</span>
                </div>
              </div>
              <div className="col-lg-10 col-md-9">
                <img src={Images?.banners} alt="" className="banner_img" />
              </div>
            </div>
            <div className="stores_row">
              <div className="stores_title"> Stores For You </div>
              <div className="stores_cart">
                {storesFiles?.map((item, key) => (
                  <div className="stores_cart_align" key={key}>
                    <div>
                      <img src={item?.img} alt="" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="charity_cart">
          <div className="container">
            <div className="explore_head"> Explore our </div>
            <div className="explore_subhead"> Charity Cart </div>
            <div className="charity_flex">
              {data?.map((item, key) => (
                <div className="exp_imgs" key={key}>
                  <img src={item?.img} alt="" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="arrival_div">
            <div className="arrival_head">New Arrival</div>
            <div className="arrival_content arrival_resp row">
              {newArrival.map((item, key) => (
                <div
                  className="card_arrival col-xl-2 col-lg-4 col-md-4 "
                  key={key}
                >
                  <div className="card_arrival_Img">
                    <img src={item?.img} alt="" />
                  </div>
                  <div className="card_text">{item.label}</div>
                  <div className="star_icons">
                    <StarRating rating={item.rating} />
                  </div>
                  <div className="card_x_price">{item.xprice}</div>
                  <div className="card_price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="category_section">
            <div className="category_head"> Categories </div>
            <div className="category_div">
              {categories.map((item, key) => (
                <div className="categories_icon" key={key}>
                  <img src={item?.img} alt="" />
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="artisan_div">
            <div className="artisan_head">
              <div> Artisan Craft </div>
              <div> See More &gt; </div>
            </div>
            <div className="row">
              {craft.map((item, key) => (
                <div
                  className="artisan_content col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 "
                  key={key}
                >
                  <div className="card_artisan">
                    <div className="card_artisan_Img">
                      <img src={item?.img} alt="" />
                    </div>
                    <div className="card_text">{item.label}</div>
                    <div className="star_icons">
                      <StarRating rating={item.rating} />
                    </div>
                    <div className="card_price">{item.price}</div>
                  </div>
                </div>
              ))}
              <div className="col-xl-4 col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
                <img src={Images.tailor} alt="" className="art_tailor" />
              </div>
            </div>
          </div>
          <div className="banner_div">
            <div className="bannerYellow d-flex">
              <div className="col-lg-8 col-sm-7 banner_resp">
                <div className="explore_card">
                  <div className="explore_head_text">
                    <div className="just_for"> JUST FOR YOU </div>
                    <div className="exp_all_pro"> Explore All Products </div>
                    <div className="find_prod"> Finding Products </div>
                  </div>
                  <div className="brows_btn">
                    <button className="banner_btn"> Browse More </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-5 yello_Img">
                <img src={Images.seekpng} alt="" />
              </div>
            </div>
            <div className="explore_div">
              <div className="cards_box">
                {craftBox.map((item, key) => (
                  <div className="explore_card" key={key}>
                    <div className="explore_div_img">
                      <img src={item?.img} alt="" />
                    </div>
                    <div className="explore_text">{item.label}</div>
                    <div className="star_icons">
                      <StarRating rating={item.rating} />
                    </div>
                    <div className="card_price">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="news_search">
            <div className="news_search_head">
              We will deliver the latest product trends and industry news
              straight to your inbox.
            </div>
            <div className="news_search_box">
              <input
                type="text"
                placeholder="Your Email"
                className="news_search_inp"
              />
              <button className="subscribe_btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
