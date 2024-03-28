const Footer = () => {
  return (
    <div className=" bg-base-200 text-base-content">
      <footer className="footer py-10 px-8 md:px-0 container mx-auto">
        <aside>
          <h2 className="text-4xl text-[#0c12b0] font-bold">HouseNest</h2>
          <p>
            HouseNest Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr />
      <p className="text-center pb-8 pt-4">
        Copyright © 2024 - All right reserved by HouseNest Industries Ltd
      </p>
    </div>
  );
};

export default Footer;
