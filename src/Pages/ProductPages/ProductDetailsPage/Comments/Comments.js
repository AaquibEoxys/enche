import React from "react";
import Images from "../../../../components/Images/Images";
import "./Comments.scss";

const Comments = () => {
  const commentdata = [
    {
      img: Images.seekpng,
      name: "syrian",
      date: "2022 - 04 - 14",
      time: 13.47,
      Variation: "Black",
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
    quod voluptatem illum aliquid laboriosam obcaecati commodi numquam
    neque impedit temporibus, nulla nesciunt dignissimos veritatis?
    Sint hic laborum soluta tempore ad!`,
      imgscmt: Images.seekpng,
    },
    {
      img: Images.seekpng,
      name: "syrian",
      date: "2022 - 04 - 14",
      time: 13.47,
      Variation: "Black",
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
    quod voluptatem illum aliquid laboriosam obcaecati commodi numquam
    neque impedit temporibus, nulla nesciunt dignissimos veritatis?
    Sint hic laborum soluta tempore ad!`,
      imgscmt: Images.seekpng,
    },
    {
      img: Images.seekpng,
      name: "syrian",
      date: "2022 - 04 - 14",
      time: 13.47,
      Variation: "Black",
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
    quod voluptatem illum aliquid laboriosam obcaecati commodi numquam
    neque impedit temporibus, nulla nesciunt dignissimos veritatis?
    Sint hic laborum soluta tempore ad!`,
      imgscmt: Images.seekpng,
    },
    {
      img: Images.seekpng,
      name: "syrian",
      date: "2022 - 04 - 14",
      time: 13.47,
      Variation: "Black",
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
    quod voluptatem illum aliquid laboriosam obcaecati commodi numquam
    neque impedit temporibus, nulla nesciunt dignissimos veritatis?
    Sint hic laborum soluta tempore ad!`,
    },
  ];
  return (
    <div>
      <div className="cmnt_sctn p-3 container">
        {commentdata?.map((item, key) => (
          <div className="cmtr_ns row container">
            <div className="img_cmtr col-1">
              <img src={item?.img} alt="" />
            </div>
            <div className="col-11">
              <div className="nam_star ">
                <div className="nam_cmtr">{item.name}</div>
                <div className="rat_cmtr">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div className="dat_sec_cmtr">
                <div className="dat_sc_cmt mx-2">{item.date}</div>
                <div className="dat_tme_cmt mx-2">{item.time}</div>
                <div className="ls_vrnt">
                  <div className="varnt_hd mx-2">Variation</div>
                  <div className="varnt_typ mx-1">{item.Variation}</div>
                </div>
              </div>
              <div className="cmt_sec_cmtr mt-3">{item.comment}</div>
              <div className="img_shw_cmtr mt-3 mb-3">
                <div className="shw_cmtr_img">
                  <img src={Images.seekpng} alt="" />
                </div>
                <div className="shw_cmtr_img">
                  <img src={Images.seekpng} alt="" />
                </div>
                <div className="shw_cmtr_img">
                  <img src={Images.seekpng} alt="" />
                </div>
                <div className="shw_cmtr_img">
                  <img src={Images.seekpng} alt="" />
                </div>
                <div className="shw_cmtr_img">
                  <img src={Images.seekpng} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
