import PageLayout from "../Layouts/PageLayout";
import Divider from "../components/Divider";
import Hero from "../components/Hero";


const HomePage = () => {
  return (
    <>
    <PageLayout>
    <div className="home-page">
      <Hero></Hero>
      <div className="bg-base-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#191e24" fill-opacity="1" d="M0,192L40,160C80,128,160,64,240,37.3C320,11,400,21,480,58.7C560,96,640,160,720,165.3C800,171,880,117,960,112C1040,107,1120,149,1200,144C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <p className="mx-12 pt-12  text-lg lg:text-2xl text-center font-bold ">Explore my work, check out my recent projects, or feel free to get in touch if you're interested in collaboration. Let’s build something amazing together!</p>
      <Divider/>
      </div>
    </div> 
    </PageLayout>
    </>
  )
}

export default HomePage;
