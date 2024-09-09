import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import accent from "@/assets/accenture-4.png"
import airbnb from "@/assets/airbnb.png"
import react from "@/assets/react.png"
import sky from "@/assets/sky-4.png"

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center my-16">
      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[960px] w-full bg-white rounded-lg overflow-hidden">
        
        {/* Left Side: Trusted Companies */}
        <div className="hidden md:flex flex-col justify-center items-start  p-10">
          <h2 className="text-3xl font-bold text-[#160637] mb-6">
            See why the world's best companies use Qubly to become truly data-driven.
          </h2>
        
          <div className="divider my-4 text-lg text-[#3A265E] ">Trusted by</div>
          <div className="grid grid-cols-2 gap-4 w-full items-center justify-center  ">
            <Image src={accent} width={80} height={40} alt="Accenture" />
            <Image src={react} width={80} height={40} alt="Company 2" />
            <Image src={airbnb} width={80} height={40} alt="Airbnb" />
            <Image src={sky} width={80} height={40} alt="Sky" />
          </div>
        </div>

        {/* Right Side: Sign-up Form */}
        <div className="flex flex-col justify-center p-6 w-full bg-[#F9F0FF]">
            <div className="bg-white  p-4 -translate-y-10 rounded-md shadow-lg ">

          <h3 className="text-2xl font-bold text-center mb-3">Sign Up</h3>
          <div className="text-center mb-6">
              <button className="btn w-full bg-purple-600 text-white hover:bg-purple-700">
                Start your free trial
              </button>
            </div>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Your primary email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Re-type Password"
                className="input input-bordered w-full"
              />
            </div>
         
          </form>
      
          <button className="mx-auto  flex items-center justify-center border border-blue-500  rounded-sm my-4">
            <FcGoogle className="mr-2 text-2xl " /> <span className="bg-blue-500 px-6 py-2 text-white">Sign in with Google</span>
          </button>
          <div className="divider my-4"></div>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="#" className="text-purple-600">
                Login
              </a>
            </p>
          </div>
        </div>
            </div>

      </div>
    </div>
  );
};

export default SignUpForm;
