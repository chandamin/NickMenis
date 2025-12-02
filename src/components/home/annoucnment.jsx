function Announcement() {
  return (
    <div className="custom-announcement-bar-main">
      <div className="custom-announcement-bar-inner">
        <div className="custom-announcement-bar-inner-flex">

          
          <div className="announcement-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>


          
          <div className="announcement-contact">
            <div className="contact-item">
              <i className="far fa-envelope"></i>
              contact@mail.com
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              +9212345678910
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Announcement;