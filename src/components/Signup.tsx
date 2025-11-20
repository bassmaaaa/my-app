
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
const signup2 = () => {
  Swal.fire({
  title: "Remember me?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `No`
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("Your data are saved!", "", "success");
     localStorage.setItem("token", "123");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
     sessionStorage.setItem("token", "123");
  }
});
}

const Signup = () => {


  let loginRequest = {
  email: "",
  password: "",
  name:""
};

const handleChanges = (e) => {
  console.log(e);
  
  loginRequest = {
    ...loginRequest,
    [e.target.name]: e.target.value,
  };
};

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(loginRequest);
                    
                    if (
                      loginRequest.email == "ahmad.trad@hotmail.com" &&
                      loginRequest.password == "123" &&
                      loginRequest.name=="ahmad"
                    ) {
                      localStorage.setItem("username", loginRequest.name);
                     localStorage.setItem("email", loginRequest.email);
                     localStorage.setItem("pass", loginRequest.password);
                     
                    } else {
                      signup2();
                    }
                  }}
                   className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
               onChange={handleChanges}
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
               onChange={handleChanges}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Password
            </label>
            <div className="mt-2">
              <input
               onChange={handleChanges}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 font-semibold hover:underline hover:text-indigo-300 transition-colors duration-200"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

