import React from "react";
import { Header, Footer, ContactOptions, Map } from "../components";
import { Title } from "../assets/ui";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          CONTACT
        </h1>
      </div>
      <div className="my-(--html-spacing) section-padding">
        <Title text="reach out to us" />
        <ContactOptions />
        <Map/>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
