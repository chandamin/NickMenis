import React from "react";
import bannerImg from "../../assets/banner.jpg"; 

function ImageWithTextAbout() {
  return (<div className="custom-about-banner-main"> <div className="custom-about-banner-inner"> <div className="custom-about-banner-flex">
 <div className="about-left"> <h2 className="about-title">What is Lorem Ipsum?</h2>

        <p className="about-text">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </p>

        <p className="about-text">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </p>

        <button className="about-btn">Contact Us →</button>
      </div>

      {/* RIGHT */}
      <div className="about-right">
        <img src={bannerImg} alt="kitchen" className="about-image" />
      </div>
    </div>
  </div>
</div>


);
};

export default ImageWithTextAbout;
