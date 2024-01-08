import React from "react";

const Login = () => {
  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <div>
            {/* <img alt="Your Company" loading="lazy" width="192" height="192" decoding="async" data-nimg="1" class="mx-auto h-12 w-auto rounded-full" srcset="" src="" /> */}
            <h2 class="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-md text-gray-600">
              Or{" "}
              <a
                class="font-medium text-emerald-600 hover:text-emerald-500"
                href="/signup"
              >
                Create an Account
              </a>
            </p>
          </div>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
            <form>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-black"
                >
                  Email address
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required=""
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 border-gray-300 border rounded-lg focus:outline-emerald-500"
                    value=""
                    fdprocessedid="1mie8p"
                  />
                </div>
              </div>
              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-black"
                >
                  Password
                </label>
                <div class="mt-1 rounded-md shadow-sm flex">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required=""
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 border-gray-300 border rounded-lg focus:outline-emerald-500 -mr-11"
                    value=""
                    fdprocessedid="aspv5"
                  />
                  <button type="button" class="ml-2" fdprocessedid="aush3e">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6 flex items-center justify-end">
                <div class="text-sm leading-5">
                  <a
                    class="font-medium text-emerald-600 hover:text-emerald-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    href="/resetpassword"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div class="mt-6">
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:border-emerald-700 focus:shadow-outline-emerald active:bg-emerald-700 transition duration-150 ease-in-out"
                  fdprocessedid="6b92m9"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
