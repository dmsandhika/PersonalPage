import PageLayout from "../Layouts/PageLayout";
import Divider from "../components/Divider";
import Hero from "../components/Hero";


const HomePage = () => {
  return (
    <>
    <PageLayout>
    <div className="home-page">
      <Hero></Hero>
      <p className="mx-12 pt-12  text-l lg:text-2xl text-center font-bold ">Explore my work, check out my recent projects, or feel free to get in touch if you're interested in collaboration. Let’s build something amazing together!</p>
      <Divider/>
    </div> 
    </PageLayout>
    </>
  )
}

export default HomePage;
