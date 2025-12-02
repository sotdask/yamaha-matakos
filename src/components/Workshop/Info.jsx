import React from "react";
import { Images, Icons } from "../../assets/assets";

function Info() {
  return (
    <div className="my-(--html-spacing) section-padding">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col gap-5">
          <div>
            <img
              src={Images.workshop2}
              alt="Yamaha Workshop Technician"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-4 text-gray-700 text-center text-base lg:text-lg leading-relaxed">
            <p>
              Our specialized and{" "}
              <span className="text-primary font-bold">
                YTA Silver Certificate–certified
              </span>{" "}
              technical staff, trained by the Yamaha Technical Academy, offers
              the highest quality in the maintenance of your motorcycle.
            </p>
            <p>
              The use of genuine Yamaha spare parts and consumables by our
              experienced technicians ensures the proper and safe operation of
              your motorcycle.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="w-11/12 md:w-9/12">
            <img
              src={Images.workshop1}
              alt="Yamaha Workshop"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
