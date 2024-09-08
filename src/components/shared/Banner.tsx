"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Banner.module.css";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className="lg:w-[960px] mx-auto">
        <div className="flex justify-center items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F7F1FF]  rounded-full inline-block px-6 py-2"
            >
              <div className="flex items-center gap-3">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 6C12.8011 6 12.6103 5.92098 12.4697 5.78033C12.329 5.63968 12.25 5.44891 12.25 5.25C12.25 4.85218 12.092 4.47064 11.8107 4.18934C11.5294 3.90804 11.1478 3.75 10.75 3.75C10.5511 3.75 10.3603 3.67098 10.2197 3.53033C10.079 3.38968 10 3.19891 10 3C10 2.80109 10.079 2.61032 10.2197 2.46967C10.3603 2.32902 10.5511 2.25 10.75 2.25C11.1478 2.25 11.5294 2.09196 11.8107 1.81066C12.092 1.52936 12.25 1.14782 12.25 0.75C12.25 0.551088 12.329 0.360322 12.4697 0.21967C12.6103 0.0790176 12.8011 0 13 0C13.1989 0 13.3897 0.0790176 13.5303 0.21967C13.671 0.360322 13.75 0.551088 13.75 0.75C13.75 1.14782 13.908 1.52936 14.1893 1.81066C14.4706 2.09196 14.8522 2.25 15.25 2.25C15.4489 2.25 15.6397 2.32902 15.7803 2.46967C15.921 2.61032 16 2.80109 16 3C16 3.19891 15.921 3.38968 15.7803 3.53033C15.6397 3.67098 15.4489 3.75 15.25 3.75C14.8522 3.75 14.4706 3.90804 14.1893 4.18934C13.908 4.47064 13.75 4.85218 13.75 5.25C13.75 5.44891 13.671 5.63968 13.5303 5.78033C13.3897 5.92098 13.1989 6 13 6Z"
                      fill="#722ED1"
                    />
                    <path
                      d="M6 16C5.73478 16 5.48043 15.8946 5.29289 15.7071C5.10536 15.5196 5 15.2652 5 15C5 13.9391 4.57857 12.9217 3.82843 12.1716C3.07828 11.4214 2.06087 11 1 11C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9C2.06087 9 3.07828 8.57857 3.82843 7.82843C4.57857 7.07828 5 6.06087 5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4C6.26522 4 6.51957 4.10536 6.70711 4.29289C6.89464 4.48043 7 4.73478 7 5C7 6.06087 7.42143 7.07828 8.17157 7.82843C8.92172 8.57857 9.93913 9 11 9C11.2652 9 11.5196 9.10536 11.7071 9.29289C11.8946 9.48043 12 9.73478 12 10C12 10.2652 11.8946 10.5196 11.7071 10.7071C11.5196 10.8946 11.2652 11 11 11C9.93913 11 8.92172 11.4214 8.17157 12.1716C7.42143 12.9217 7 13.9391 7 15C7 15.2652 6.89464 15.5196 6.70711 15.7071C6.51957 15.8946 6.26522 16 6 16Z"
                      fill="#722ED1"
                    />
                  </svg>
                </span>
                <p className="text-[#722ED1]">
                  v3.1 released.{" "}
                  <a href="" className="underline underline-offset-1">
                    Learn more
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold">
                Your data with <br /> real-time analytics
              </h1>
              <p className="text-gray-500">
                Harness the potential of Big Data Analytics & Cloud Services{" "}
                <br /> and become a data-driven organization with Needle tail
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Image src={banner} height={370} width={472} alt="banner" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
