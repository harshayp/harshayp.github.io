const Contact = () => {
  return (
    <div className="min-h-[auto] pb-28 pt-40 px-[9%]">
      <h2 className="text-[4.5rem] font-[700] mb-12 text-center">
        Contact <span className="text-mainColor">Me</span>
      </h2>

      <form action="#" className="max-w-[70rem] my-0 mx-auto text-center">
        <div className="flex justify-between flex-wrap relative">
          <div className="relative w-[49%] my-[0.8rem] mx-0">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-full p-6 text-[1.6rem] text-textColor bg-transparent rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor placeholder:text-textColor"
              required
            />
            <span></span>
          </div>
          <div className="relative w-[49%] my-[0.8rem] mx-0">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full h-full p-6 text-[1.6rem] text-textColor bg-transparent rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor placeholder:text-textColor"
              required
            />
            <span></span>
          </div>
        </div>

        <div className="flex justify-between flex-wrap relative">
          <div className="relative w-[49%] my-[0.8rem] mx-0">
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full h-full p-6 text-[1.6rem] text-textColor bg-transparent rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor placeholder:text-textColor"
              required
            />
            <span></span>
          </div>
          <div className="relative w-[49%] my-[0.8rem] mx-0">
            <input
              type="text"
              placeholder="Email Subject"
              className="w-full h-full p-6 text-[1.6rem] text-textColor bg-transparent rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor placeholder:text-textColor"
              required
            />
            <span></span>
          </div>
        </div>

        <div className="flex relative mt-[0.8rem] mx-0 mb-[2.7rem]">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            className="w-full h-full p-6 text-[1.6rem] text-textColor bg-transparent rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor placeholder:text-textColor resize-none"
            required
          ></textarea>
          <span></span>
        </div>

        <div className="relative inline-block w-[15rem] h-[4.5rem]">
          <button
            type="submit"
            className="inline-flex justify-center items-center bg-mainColor w-44 h-full relative rounded-[0.8rem] text-[1.5rem] font-[600] text-bgColor transition-all duration-500 ease-out hover:text-mainColor hover:bg-transparent hover:border-2 hover:border-solid hover:border-mainColor"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
