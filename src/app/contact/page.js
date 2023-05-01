import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-1 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7720962.4445920745!2d75.21597803302494!3d19.107603567479906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1682328519368!5m2!1sen!2sin"
              width={800}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              // className={styles.mapping}
            ></iframe>
          </div>
          <div className="rounded lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-2xl text-slate-800 text-center">Contact Me!</h2>
            <Image
              src="/contact_me.jpg"
              alt="Pic"
              width={400}
              height={200}
              className="mx-auto my-2"
            />
            <h3 className="text-xl text-slate-900 text-center mt-2">Amann</h3>
            <p className="text-xl text-slate-800 text-center">The Programmer</p>
            <p className="text-xl text-slate-800 text-center mt-3">
              Email : yadavaman413@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
