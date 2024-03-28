const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-12"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/4fNh4PJ/pexels-binyamin-mellish-186077.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="min-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to HouseNest 2.0
            </h1>
            <p className="mb-5 text-lg">
              Packed with 100+ new features and improvements, it is the biggest{" "}
              <br />
              all-in-one solution for real estate companies and professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
