import gpt3Logo from "../../assets/logo.svg";

import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Apakah anda ingin mengenal lebih dalam tentang masa depan</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Daftar lebih awal</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3 logo" />
          <p>Jakarta, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Kontak</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Perusahaan</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Kontak</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Hubungi Kami</h4>
          <p>Jakarta, Indonesia.</p>
          <p>085-132567</p>
          <p>info@gpt.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
