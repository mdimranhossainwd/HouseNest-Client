import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
const SignInForm = () => {
  const { user, login, handleGoogle } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleToLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        axios.post("/auth/access-token", user);
        toast.success("User Login Success");
        navigate("/");
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const clickToGoogle = () => {
    handleGoogle()
      .then((res) => {
        axios.post("/auth/access-token", user);
        console.log(res);
        toast.success("Google Login Successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>HouseNest || Sign In Page</title>
      </Helmet>
      <div
        className="min-h-screen bg-cover bg-no-repeat px-6 md:px-0"
        style={{
          backgroundImage: "url(https://i.ibb.co/gwxz2ZS/Rectangle-75.png)",
        }}
      >
        <div className="container mx-auto">
          <div className="hero min-h-screen ">
            <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-5">
              <div>
                <img
                  className="w-full"
                  src="https://i.ibb.co/GnJBqgj/1811f344025539b7b4abb446eb6f910d-removebg-preview.png"
                  alt=""
                />
              </div>
              <div className="w-full borderp-4 rounded-lg  sm:p-6 md:p-8 ">
                <form onSubmit={handleToLogin} className="space-y-6" action="#">
                  <h5 className="text-4xl text-center font-bold text-[#151515] ">
                    Log In
                  </h5>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-md font-medium text-[#151515]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300  block w-full p-2.5 dark:placeholder-gray-400  py-3 px-4"
                      placeholder="Your mail address here ...."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-md font-medium text-[#151515]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300  block w-full p-2.5 dark:placeholder-gray-400  py-3 px-4"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 font-medium rounded-lg text-md px-5 py-4 text-center "
                  >
                    Sign In
                  </button>
                  <div className="text-md text-center font-medium ">
                    <p className="text-md mb-3 text-blue-600">
                      New here?{" "}
                      <NavLink to="/register" className="font-bold">
                        Create a New Account
                      </NavLink>
                    </p>
                    <a href="#" className="text-[#444]">
                      Or sign in with
                    </a>
                  </div>
                  <div
                    onClick={clickToGoogle}
                    className="flex items-center gap-8 text-md py-2 mx-10 text-center justify-center  border-2"
                  >
                    <Link>
                      <div className="flex items-center gap-4">
                        <img
                          className=" w-12"
                          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                          alt=""
                        />
                        <span>Continue With Google</span>
                      </div>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
