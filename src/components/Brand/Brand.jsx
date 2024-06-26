import Marquee from "react-fast-marquee";
import CommonHeading from "../../shared/Heading/CommonHeading";

const Brand = () => {
  return (
    <div className="mt-12 container mx-auto ">
      <CommonHeading
        heading="Our Brands"
        paragraph="The Houzez Grids widgets allow you to display property cities, types, status, etc within different grid style variations, colors and typography options

"
      />
      <div className="py-12">
        <Marquee>
          <div className="flex gap-20">
            <img
              src="https://default.houzez.co/wp-content/uploads/2020/03/partner-01-e1582734705113.jpg"
              alt=""
            />
            <img
              src="https://default.houzez.co/wp-content/uploads/2020/03/partner-02-e1582734691936.jpg"
              alt=""
            />
            <img
              src="https://default.houzez.co/wp-content/uploads/2020/03/partner-04-e1582734649458.jpg"
              alt=""
            />
            <img
              src="https://default.houzez.co/wp-content/uploads/2020/03/partner-03-e1582734671602.jpg"
              alt=""
            />
            <img
              src="https://default.houzez.co/wp-content/uploads/2020/03/partner-05-e1582734603812.jpg"
              alt=""
            />
            <img
              src="https://default.houzez.co/wp-content/uploads/2020/03/partner-01-e1582734705113.jpg"
              alt=""
            />
            <img
              src="https://default.houzez.co/wp-content/uploads/2020/03/partner-02-e1582734691936.jpg"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brand;
