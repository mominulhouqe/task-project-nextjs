"use client";
import Image from "next/image";
import logos from "@/assets/Logos.png";
import cirle from "@/assets/circle.png";

import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect } from "react";

const ProductTeam = () => {
  const controls = useAnimation();

  // Animate when the component is in view
  const handleScroll = useCallback(() => {
    const element = document.querySelector("#product-team");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      id="product-team"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 my-16 justify-items-center items-center  md:grid-cols-2  px-2 py-14  mx-auto  "
    >
      <div className="relative">
        <Image
          src={logos}
          width={397}
          height={435}
          alt="team"
          className="absolute"
        />
        <Image src={cirle} width={397} height={435} alt="team" />
      </div>

      <div className="mt-6">
        <div className="bg-[#F7F1FF] rounded-full inline-block px-6 py-2 mb-6">
          <span className="flex items-center justify-center space-x-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.50001 7.598V5.828C9.16722 5.5921 9.72956 5.12793 10.0876 4.51752C10.4457 3.90711 10.5765 3.18976 10.4568 2.49227C10.3371 1.79477 9.97473 1.16204 9.43367 0.705895C8.8926 0.249753 8.20769 -0.000427246 7.50001 -0.000427246C6.79232 -0.000427246 6.10741 0.249753 5.56635 0.705895C5.02528 1.16204 4.66288 1.79477 4.54321 2.49227C4.42354 3.18976 4.5543 3.90711 4.91237 4.51752C5.27045 5.12793 5.83279 5.5921 6.50001 5.828V8.012C6.50006 8.27719 6.60546 8.53151 6.79301 8.719L9.50001 11.426V23.012C9.50001 23.2772 9.60536 23.5316 9.7929 23.7191C9.98044 23.9066 10.2348 24.012 10.5 24.012C10.7652 24.012 11.0196 23.9066 11.2071 23.7191C11.3946 23.5316 11.5 23.2772 11.5 23.012V11.012C11.4999 10.7468 11.3946 10.4925 11.207 10.305L8.50001 7.598Z"
                fill="#722ED1"
              />
              <path
                d="M4.50001 16.598V14.828C5.16722 14.5921 5.72956 14.1279 6.08764 13.5175C6.44571 12.9071 6.57647 12.1898 6.4568 11.4923C6.33713 10.7948 5.97474 10.162 5.43367 9.70589C4.8926 9.24975 4.20769 8.99957 3.50001 8.99957C2.79232 8.99957 2.10741 9.24975 1.56635 9.70589C1.02528 10.162 0.662882 10.7948 0.543211 11.4923C0.423539 12.1898 0.554298 12.9071 0.912375 13.5175C1.27045 14.1279 1.83279 14.5921 2.50001 14.828V17.012C2.50006 17.2772 2.60546 17.5315 2.79301 17.719L5.50001 20.426V23.012C5.50001 23.2772 5.60536 23.5316 5.7929 23.7191C5.98044 23.9066 6.23479 24.012 6.50001 24.012C6.76522 24.012 7.01958 23.9066 7.20711 23.7191C7.39465 23.5316 7.50001 23.2772 7.50001 23.012V20.012C7.49995 19.7468 7.39456 19.4925 7.20701 19.305L4.50001 16.598Z"
                fill="#722ED1"
              />
              <path
                d="M18.5 8.012V5.828C19.1672 5.5921 19.7296 5.12793 20.0876 4.51752C20.4457 3.90711 20.5765 3.18976 20.4568 2.49227C20.3371 1.79477 19.9747 1.16204 19.4337 0.705895C18.8926 0.249753 18.2077 -0.000427246 17.5 -0.000427246C16.7923 -0.000427246 16.1074 0.249753 15.5663 0.705895C15.0253 1.16204 14.6629 1.79477 14.5432 2.49227C14.4235 3.18976 14.5543 3.90711 14.9124 4.51752C15.2704 5.12793 15.8328 5.5921 16.5 5.828V7.598L13.793 10.305C13.6055 10.4925 13.5001 10.7468 13.5 11.012V23.012C13.5 23.2772 13.6054 23.5316 13.7929 23.7191C13.9804 23.9066 14.2348 24.012 14.5 24.012C14.7652 24.012 15.0196 23.9066 15.2071 23.7191C15.3946 23.5316 15.5 23.2772 15.5 23.012V11.426L18.207 8.719C18.3946 8.53151 18.4999 8.27719 18.5 8.012Z"
                fill="#722ED1"
              />
              <path
                d="M24.5 12.012C24.5023 11.4615 24.353 10.9209 24.0686 10.4496C23.7842 9.97824 23.3755 9.59424 22.8874 9.33965C22.3993 9.08506 21.8505 8.96968 21.3012 9.00617C20.7519 9.04265 20.2232 9.22959 19.7731 9.5465C19.3229 9.86341 18.9686 10.2981 18.749 10.8029C18.5294 11.3077 18.453 11.8633 18.528 12.4086C18.6031 12.954 18.8268 13.4682 19.1746 13.895C19.5224 14.3217 19.981 14.6445 20.5 14.828V16.598L17.793 19.305C17.6054 19.4925 17.5001 19.7468 17.5 20.012V23.012C17.5 23.2772 17.6054 23.5316 17.7929 23.7191C17.9804 23.9066 18.2348 24.012 18.5 24.012C18.7652 24.012 19.0196 23.9066 19.2071 23.7191C19.3946 23.5316 19.5 23.2772 19.5 23.012V20.426L22.207 17.719C22.3946 17.5315 22.4999 17.2772 22.5 17.012V14.828C23.0829 14.6219 23.5879 14.2408 23.9459 13.7367C24.3039 13.2326 24.4974 12.6303 24.5 12.012Z"
                fill="#722ED1"
              />
            </svg>
            <span className="text-purple-600">For Product Teams</span>
          </span>
        </div>
        <div className="p-3">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Launch with the best stack
          </h2>
          <p className="text-gray-500 mx-auto">
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductTeam;
