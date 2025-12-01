import React from "react";
import { Images, Icons } from "../../assets/assets";

function Info() {
  return (
    <div className="my-(--html-spacing) section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6 lg:gap-10">
      <div className="md:col-span-1 lg:col-span-6 flex flex-col gap-4">
        <img
          src={Images.about1}
          alt="Yamaha Matakos History"
          className="w-full h-auto object-cover"
        />
        <div className="flex flex-col gap-3 text-gray-700 text-base lg:text-lg">
          <p>
            <span className="text-primary font-bold">YAMAHA MATAKOS</span> has
            been active in the motorcycle industry since 1964, when the founder
            of the business, Apostolos Matakos, opened his first repair shop for
            two- and three-wheel vehicles in Thessaloniki, at 54 Lagkada Street.
          </p>
          <p>
            In 1973, he began dealing in spare parts and accessories, and in
            1978 he expanded his activities to include the import and sale of
            motorcycles. A few years later, in 1983, he entered into a
            partnership with YAMAHA Hellas and became an official representative
            of YAMAHA products.
          </p>
          <p>
            Just one year later, he was invited to YAMAHA Japan along with 24
            other dealers, where he distinguished himself and received an award.
          </p>
          <p className="mt-6">
            In 1988, the company relocated to its privately-owned facilities at
            120 Lagkada Street and founded the company{" "}
            <span className="text-primary font-bold">
              A. MATAKOS & Co. O.E.
            </span>
            Since then and to this day, the company has maintained a path of
            continuous national and international distinctions in the field of
            YAMAHA motorcycles, spare parts, and accessories.
          </p>
          <p>
            The company{" "}
            <span className="text-primary font-bold">
              A. MATAKOS & Co. O.E.
            </span>{" "}
            is, and will always remain, in the motorcycle industry, offering
            riders the best possible services, with customer care and
            satisfaction at the forefront.
          </p>
        </div>
      </div>
      <div className="md:col-span-1 lg:col-span-3 flex flex-col">
        <img
          src={Images.about2}
          alt="Yamaha Matakos Award"
          className="w-full h-auto object-cover"
        />
        <div className="flex flex-col gap-3 bg-secondary text-gray-700 text-base lg:text-lg">
          <div className="inline-flex">
            <div className="bg-[#720303] text-white text-2xl font-bold py-2 px-4 tracking-wide">
              OPENING HOURS
            </div>
          </div>
          <ul className="mt-10">
            <li className="text-center font-bold text-xl">
              Monday: 9:00 - 18:00
            </li>
            <li className="text-center font-bold text-xl">
              Tuesday: 9:00 - 18:00
            </li>
            <li className="text-center font-bold text-xl">
              Wednesday: 9:00 - 18:00
            </li>
            <li className="text-center font-bold text-xl">
              Thursday: 9:00 - 18:00
            </li>
            <li className="text-center font-bold text-xl">
              Friday: 9:00 - 18:00
            </li>
            <li className="text-center font-bold text-xl">
              Saturday: 9:00 - 14:00
            </li>
            <li className="text-center  font-bold text-xl">Sunday: Closed</li>
          </ul>
          <ul className="text-center font-bold text-xl mt-4 mb-7 flex flex-col gap-y-5">
            <li>
              <a href="#" target="_blank" className="flex flex-col items-center hover:text-primary transition duration-300">
                <img src={Icons.pin} alt="" className="mb-2" />
                Lagkada 126, Thessaloniki
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="flex flex-col items-center hover:text-primary transition duration-300">
                <img src={Icons.tel2} alt="" className="mb-2"/>
                2310111111
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="flex flex-col items-center hover:text-primary transition duration-300">
                <img src={Icons.mail} alt="" className="mb-2" />
                info@yamaha-matakos.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;
