

const ContectInfo = () => {
    return (
        <div className="pb-10">
            <h1 className="font-bold text-5xl text-center   w-[280px] mx-auto mt-16 mb-16">Contact Me</h1>
            <div className="flex justify-between w-[1000px] h-[300px]  mx-auto gap-10 border-2 p-10 rounded-2xl">
            <div className="mt-14 ml-10">
                <p className="font-semibold text-xl mb-4">E-mail   : mdnaeemhossin0311@gmail.com</p>
                <p className="font-semibold text-xl mb-4">Location : Uttar Badda,Dhaka</p>
                <p className="font-semibold text-xl mb-4">Phone    : 01721246683</p>
            </div>
            <div>
            <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
<label className="input input-bordered mt-2 flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input input-bordered mt-2 flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
<textarea className="textarea w-full mt-2 textarea-bordered" placeholder="Massage"></textarea>
            </div>
        </div>
        </div>
    );
};

export default ContectInfo;