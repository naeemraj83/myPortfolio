import img from '../../dist/assets/banner.png';

const Banner = () => {
    return (
        <div className="bg-slate-500 w-full h-[500px] gap-48 flex pl-44 ">
            <div className="pt-16">
            <h1 className="font-semibold text-2xl pt-10"> Hi I am Naeem</h1>
            <h1 className="font-bold text-5xl mt-5">Frontend Web Devloper</h1>
            <h1 className="font-medium text-xl w-[500px] mt-3">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</h1>


            <p className='btn bg-purple-500 border-none text-slate-200 hover:text-purple-500 hover:text-lg hover:font-bold mt-10 pl-10 pr-10'>Hire me</p>
                
            </div>
            <div className='pt-5 pl-44'>
                   <img className='w-[450px] h-[450px] rounded-full border-[3px] border-purple-500 hover:border-purple-500 hover:border-[7px]' src={img} alt="" />
                  
                </div>
        </div>
    );
};

export default Banner;