const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <>
          <span className="client_review">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 10.36 10.36"
            >
              <defs></defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="AW">
                  <polygon
                    style={{ fill: "#f3c746" }}
                    points="5.18 0 6.4 3.96 10.36 3.96 7.16 6.41 8.38 10.36 5.18 7.92 1.98 10.36 3.2 6.41 0 3.96 3.96 3.96 5.18 0"
                  />
                </g>
              </g>
            </svg>
          </span>
        </>
      );
    } else {
      stars.push(
        <>
          <span className="client_review">
            <svg
              width="15"
              height="15"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_147_48)">
                <path
                  d="M5.18 0L6.4 3.96H10.36L7.16 6.41L8.38 10.36L5.18 7.92L1.98 10.36L3.2 6.41L0 3.96H3.96L5.18 0Z"
                  fill="#F4EBD0"
                />
              </g>
              <defs>
                <clipPath id="clip0_147_48">
                  <rect width="10.36" height="10.36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </>
      );
    }
  }
  return (
    <>
      <div className="reviews">
        <div className="stars">
          {stars?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default StarRating;
