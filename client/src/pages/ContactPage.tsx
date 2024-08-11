import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-secondary h-[500px] rounded-xl shadow-lg my-4">
      <div className="w-full">
        <h2 className="font-bold text-2xl w-full flex justify-center my-2 text-darkDanger">
          İletişime Geçelim
        </h2>
      </div>

      <div className="w-full h-full flex items-center justify-center gap-x-4 py-10">
        <div className="flex-1 h-full flex justify-center items-center">
          <iframe
            className="w-11/12 h-full border border-black rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.835610358049!2d-122.0842496846927!3d37.42199997982552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb730ec0d4a73%3A0xe0a8d06d64e6e043!2sGoogleplex!5e0!3m2!1sen!2sus!4v1618312953744!5m2!1sen!2sus"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>

        <div className="flex-1 h-full flex items-center justify-center">
          <form className="w-11/12 h-full flex flex-col justify-center gap-y-5">
            <div className="flex flex-col">
              <label className="mb-2">Email Adresiniz</label>
              <input
                type="email"
                placeholder="email giriniz"
                className="p-2 border border-gray-300 rounded-lg focus:border-darkDanger"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2">Mesajınız</label>
              <textarea
                rows={6}
                className="p-2 border border-gray-300 focus:border-darkDanger rounded-lg"
                placeholder="Mesajınızı giriniz"
              ></textarea>
            </div>

            <div className=" flex justify-center">
              <button className=" bg-darkDanger text-white w-1/2 p-1 rounded-lg active:scale-95 transform transition-all">Gönder</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
