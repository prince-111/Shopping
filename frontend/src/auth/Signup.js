import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          {/* <img alt="Your Company" loading="lazy" width="192" height="192" decoding="async" data-nimg="1" className="mx-auto h-12 w-auto rounded-full" srcset="" src=""> */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create a new Account
          </h2>
          <p className="mt-2 text-center text-md text-gray-600">
            Or{" "}
            <a
              className="font-medium text-emerald-600 hover:text-emerald-500"
              href="/login"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <form>
            <div>
              <label
                for="name"
                className="block text-sm font-medium leading-5 text-black"
              >
                Name
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="name"
                  type="name"
                  name="name"
                  required=""
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 border-gray-300 border rounded-lg focus:outline-emerald-500"
                  value=""
                  fdprocessedid="p95rd"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                for="email"
                className="block text-sm leading-5 text-black"
              >
                Email address
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required=""
                  pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 border-gray-300 border rounded-lg focus:outline-emerald-500"
                  value=""
                  fdprocessedid="2o5b5m"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                for="password"
                className="block text-sm font-medium leading-5 text-black"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required=""
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 border-gray-300 border rounded-lg focus:outline-emerald-500"
                  value=""
                  fdprocessedid="fy1jpv"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                for="cpassword"
                className="block text-sm font-medium leading-5 text-black"
              >
                Confirm Password
              </label>
              <div classNameName="mt-1 rounded-md shadow-sm">
                <input
                  id="cpassword"
                  type="password"
                  name="cpassword"
                  required=""
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 border-gray-300 border rounded-lg focus:outline-emerald-500"
                  value=""
                  fdprocessedid="arr6sy"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:border-emerald-700 focus:shadow-outline-emerald active:bg-emerald-700 transition duration-150 ease-in-out"
                fdprocessedid="h0xo2"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
