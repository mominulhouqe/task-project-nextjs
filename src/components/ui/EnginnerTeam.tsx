"use client";
import Image from "next/image";
import dataDriven from "@/assets/data-driven.png";

const EnginnerTeam = () => {


  return (
    <div
     
      className="flex flex-col md:flex-row-reverse  my-16 justify-items-center items-center   px-2 py-14  mx-auto  "
    >
      <div className="">
        <Image
          src={dataDriven}
          width={684}
          height={414}
          alt="team"
         
        />
      </div>

      <div className="mt-6">
        <div className="bg-[#F7F1FF] rounded-full inline-block px-6 py-2 mb-6">
          <span className="flex items-center justify-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.387 2.4V0H10.842V2.4C9.90207 2.59181 9.06683 3.12581 8.49824 3.89845C7.92965 4.6711 7.6682 5.62734 7.7646 6.5818C7.86099 7.53626 8.30835 8.42092 9.01995 9.06427C9.73155 9.70762 10.6567 10.0638 11.616 10.0638C12.5753 10.0638 13.5005 9.70762 14.2121 9.06427C14.9237 8.42092 15.371 7.53626 15.4674 6.5818C15.5638 5.62734 15.3024 4.6711 14.7338 3.89845C14.1652 3.12581 13.3299 2.59181 12.39 2.4H12.387Z"
                fill="#722ED1"
              />
              <path
                d="M19.8 17.032H21.681V15.484H19.021L15.974 9.397C15.3365 10.2632 14.4564 10.921 13.445 11.287L15.545 15.487H12.387V13.935H10.839V15.483H7.682L9.782 11.283C8.77053 10.9172 7.89037 10.2594 7.253 9.393L4.2 15.484H1.548V17.032H3.429L0 23.881C0.878326 24.1006 1.80527 24.014 2.62777 23.6357C3.45028 23.2573 4.11917 22.6098 4.524 21.8L6.908 17.033H10.839V18.581H12.387V17.032H16.318L18.7 21.8C19.1048 22.6098 19.7737 23.2573 20.5962 23.6357C21.4187 24.014 22.3457 24.1006 23.224 23.881L19.8 17.032Z"
                fill="#722ED1"
              />
            </svg>

            <span className="text-purple-600">For Engineering Teams</span>
          </span>
        </div>
        <div className="p-3">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Data-driven pipelines in minutes
          </h2>
          <p className="text-gray-500 mx-auto">
          Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnginnerTeam;
