import React from 'react';

const Footer = () => {
    return (
       <footer  className="footer  footer-center bg-base-150   shadow-2xl text-base-content  lg:p-10 ">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ByteBlaze Industries Ltd</p>
  </aside>
</footer>
    );
};

export default Footer;
