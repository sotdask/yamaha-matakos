import React from "react";
import { Form } from "../../assets/ui";

function ContactOptions() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
      <div className="order-2 md:order-1 flex flex-col gap-y-7 w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12">
        <div className="wrapper text-center md:text-start">
          <h5 className="text-[#720303] font-bold text-2xl">Visit Our Store</h5>
          <a href="#" target="_blank" className="text-lg break-words">
            Lagkada 127, Neapoli, Thessaloniki, 54351
          </a>
        </div>

        <div className="wrapper flex flex-col text-center md:text-start">
          <h5 className="text-[#720303] font-bold text-2xl">
            How To Contact Us
          </h5>
          <a href="#" target="_blank" className="text-lg">
            2310522774
          </a>
          <a href="#" target="_blank" className="text-lg break-words">
            info@yamaha-matakos.gr
          </a>
        </div>

        <div className="wrapper text-center md:text-start">
          <h5 className="text-[#720303] font-bold text-2xl">
            How To Get To Us
          </h5>
          <p className="text-lg">
            McClintock, a Latin professor at Hampden comes from a line in
            section 1.10.32.
          </p>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-8/12">
        <Form />
      </div>
      
    </div>
  );
}

export default ContactOptions;
