import img from '../../dist/assets/project1.jpg';
import img1 from '../../dist/assets/project 2.jpg';

const MyProjects = () => {
    return (
       <div className='w-[1400px] mx-auto'>
        <h1 className="font-bold text-5xl text-center   w-[280px] mx-auto mt-16 mb-16">My Projects</h1>
         <div className=" flex gap-10">
            <div>
                <h1><img className='w-[700px] h-[600px] rounded-lg hover:border-[6px] hover:border-blue-200' src={img} alt="" /></h1>
                
            </div>
            <div>
            <h1><img className='w-[700px] h-[600px] rounded-lg hover:border-[6px] hover:border-white-200' src={img1} alt="" /> </h1>
                
            </div>
        </div>
       </div>
    );
};

export default MyProjects;