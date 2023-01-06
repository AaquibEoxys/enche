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
                    <span className="offer_discount"> -15% OFF </span>
                    <div className="hover_icons">
                      <div className="heart_icons">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_251_72)">
                            <path d="M23.328 40.992L7.536 25.344C6.864 24.72 6.336 24 5.856 23.232C3.264 18.96 3.936 13.488 7.536 9.936C9.6 7.872 12.384 6.72 15.312 6.72C19.92 6.72 22.8 9.408 24 10.944C25.2 9.408 28.08 6.72 32.688 6.72C35.616 6.72 38.4 7.872 40.464 9.936C44.016 13.488 44.736 18.96 42.144 23.232C41.664 24 41.136 24.72 40.464 25.344L24.672 40.992C24.288 41.376 23.712 41.376 23.328 40.992ZM15.312 8.64C12.864 8.64 10.608 9.6 8.88 11.28C5.952 14.208 5.376 18.72 7.488 22.224C7.872 22.848 8.352 23.472 8.88 24L24 38.976L39.12 24C39.648 23.472 40.128 22.896 40.512 22.224C42.624 18.672 42.096 14.16 39.12 11.28C37.392 9.6 35.088 8.64 32.688 8.64C29.232 8.64 26.352 10.512 24.816 13.104C24.432 13.728 23.52 13.728 23.136 13.104C21.648 10.512 18.768 8.64 15.312 8.64V8.64Z" />
                            <path
                              d="M453.12 -177.6V630.72H-403.2V-177.6H453.12ZM456.96 -181.44H-407.04V634.56H456.96V-181.44Z"
                              fill="#0000FF"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_251_72">
                              <rect width="48" height="48" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="cart_icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 19.87 17.92"
                        >
                          <defs></defs>
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="AW">
                              <path
                                class="cls-1"
                                d="M0,.62c0,.54.34.65.75.65.69,0,1.38,0,2.07,0S3.89,1.59,4,2.36Q4.39,8.2,4.86,14a.65.65,0,0,1-.35.66,1.76,1.76,0,0,0-.69,2.07,1.67,1.67,0,0,0,1.7,1.13,1.65,1.65,0,0,0,1.4-1.7c0-.44.13-.51.49-.51,1.85,0,3.7,0,5.56,0,.35,0,.49.07.51.51a1.63,1.63,0,0,0,1.63,1.71,1.73,1.73,0,0,0,1.55-1.75A1.67,1.67,0,0,0,15,14.42c-2.7,0-5.4,0-8.1,0a1,1,0,0,1-1-1.41c.13-.39.46-.2.68-.2,3.15,0,6.3,0,9.45,0a1.15,1.15,0,0,0,1.31-1c.77-2.73,1.6-5.43,2.4-8.15.26-.89.09-1.13-.79-1.13H7.38c-.42,0-.87,0-.89.58s.47.64.9.64c3.47,0,6.94,0,10.4,0,.67,0,.73.13.52.79C17.65,6.6,17,8.7,16.45,10.8c-.14.51-.32.73-.86.73-3,0-6.09,0-9.13,0-.5,0-.68-.13-.71-.69C5.55,8,5.31,5.08,5.1,2.21A2.12,2.12,0,0,0,3,0C2.27,0,1.53,0,.79,0,.38,0,0,.1,0,.62ZM14.59,16.16a.44.44,0,0,1,.47-.46.43.43,0,0,1,.45.46.42.42,0,0,1-.46.46A.43.43,0,0,1,14.59,16.16Zm-9.71,0c0-.29.2-.46.48-.45a.39.39,0,0,1,.41.41c0,.31-.13.49-.42.5S4.92,16.46,4.88,16.16Z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
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
                      <span className="offer_discount"> -15% OFF </span>
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
                      <span className="offer_discount"> -15% OFF </span>
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
