import AboutMe from "../AboutMe";
import Banner from "../Banner";
import ContectInfo from "../ContectInfo";
import Hire from "../Hire";
import MyProjects from "../MyProjects";
import Skill from "../Skill";



const Home = () => {
    return (
        <div className="">
           <Banner ></Banner>
           <AboutMe></AboutMe>
           <Skill></Skill>
           <MyProjects></MyProjects>
           
           <Hire></Hire>
           <ContectInfo></ContectInfo>
        </div>
    );
};

export default Home;