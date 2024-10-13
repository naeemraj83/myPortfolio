import img from '../../dist/assets/banner.png';

const AboutMe = () => {
    return (
        <div>
            <h1 className="font-bold text-5xl text-center   w-[280px] mx-auto mt-16 mb-16">About Me</h1>
            <div className='flex gap-10 w-[1200px] mx-auto mt-10'>
                <div >
                    <img className='w-[500px] h-[500px] rounded-2xl' src={img} alt="" />
                </div>
                <div className='w-[550px]'>
                    <h1 className='font-bold text-2xl mb-5 mt-5'>Hello,</h1>
                    <p className='font-semibold text-lg pl-5 mb-5'>I am MD Naeem Hossain, a passionate student and frontend web developer</p>
                    <p className='font-medium text-md pl-5'> Currently pursuing my studies, I am dedicated to enhancing my skills in web development while gaining valuable knowledge in my academic field. My journey in web development began with a fascination for creating dynamic and user-friendly websites, leading me to specialize in frontend technologies. I have experience with HTML, CSS, and JavaScript, and I am continuously learning new frameworks and tools to improve my craft.

In addition to my technical skills, I enjoy collaborating with others on projects and contributing to team efforts. I believe that effective communication and teamwork are essential in the tech industry. Outside of my studies and work, I love exploring new technologies, reading about industry trends, and engaging in online coding communities. I am excited to connect with like-minded individuals and contribute to innovative projects that make a difference.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;