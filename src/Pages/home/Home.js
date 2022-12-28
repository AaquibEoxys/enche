import React from "react";
import SubHeader from "../../components/subHead/SubHeader";
import Images from "../../components/Images/Images";
import "./home.scss";
import StarRating from "../../components/Rating/Rating";

const Home = () => {
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
        <div className="container">
          <div className="banner_back row">
            <div className="d-flex">
              <div className="col-lg-2">bjkkb</div>
              <div className="col-lg-10">
                <img src={Images?.banners} alt="" className="banner_img" />
              </div>
            </div>
            <div>
              <div className="stores_title"> Stores For You </div>
              <div className="stores_cart">
                {storesFiles?.map((item, key) => (
                  <div className="stores_cart_align" key={key}>
                    <img src={item?.img} alt="" />
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
            <div className="arrival_content">
              {newArrival.map((item, key) => (
                <div className="card_arrival" key={key}>
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
          <div className="arrival_div">
            <div className="arrival_head">Artisan Craft</div>
            <div className="row">
              <div className="col-lg-8">
                <div className="arrival_content">
                  {craft.map((item, key) => (
                    <div className="card_arrival" key={key}>
                      <div className="card_arrival_Img">
                        <img src={item?.img} alt="" />
                      </div>
                      <div className="card_text">{item.label}</div>
                      <div className="star_icons">
                        <StarRating rating={item.rating} />
                      </div>
                      <div className="card_price">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <img src={Images.tailor} alt="" className="art_tailor" />
              </div>
            </div>
          </div>
          <div className="banner_div">
            <div className="bannerYellow"></div>
            <div className="explore_div">
              <div className="cards_box">
                {craftBox.map((item, key) => (
                  <div className="explore_card" key={key}>
                    <img src={item?.img} alt="" />
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
        </div>
      </div>
    </>
  );
};

export default Home;
