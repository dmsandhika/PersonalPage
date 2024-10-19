import { useEffect } from "react";
import PageLayout from "../Layouts/PageLayout";
import TitlePage from "../components/Title/page";
import TitleItem from "../components/Title/items";
import images from "../assets/img/images";
import Experience from "../components/Experience";
import AOS from "aos";
import 'aos/dist/aos.css';

const Works = [
  {
    name : "Techarea Indonesia",
    position : "Web Developer",
    time : "November 2024 - Present",
    img : images.techarea
  },
  {
    name : "SchoolTech Indonesia",
    position : "IT Back End Developer",
    time : "August 2024 - Present",
    img : images.schooltech
  },
]

const Orgs = [
  {
    name : "Google Developer Students Club UNNES",
    position : "Event Organizer",
    time : "August 2023 - August 2024",
    img:images.gdsc
  },
  {
    name : "IMPP UNNES",
    position : "Departement of Talent Interest and Economy Creative",
    time : "August 2023 - July 2024",
    img:images.impp
  },
  {
    name : "UKM Riptek",
    position : "Expert Staff for Information Technology",
    time : "January 2022 - December 2022",
    img:images.riptek
  },
]

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <PageLayout>
      <TitlePage>About Me</TitlePage>
      <div className="flex flex-row justify-center mx-12">
        <img src={images.profile} alt="dmsandhika" className="w-full rounded-full lg:block hidden " data-aos="fade-right" data-aos-duration="1500"/>
        <div className="lg:mx-12 mx-4 text-justify" data-aos="fade-left" data-aos-duration="1500">
        <p className="mb-5">
        Hello! My name is Dimas Andhika Firmansyah, a web developer specializing in web-based application development and more than 1 year of experience in the technology industry. I am Undergraduated of Informatics and Computer Engineering Education at Semarang State University, where I developed a strong interest in programming and system design.
        </p>
        <p className="mb-5"> 
        With expertise in programming languages ​​such as PHP, JavaScript, and frameworks such as Laravel, I have experience in building effective and user-friendly digital solutions. In addition, I also have UI/UX design skills that enable me to create attractive and intuitive displays for users.
        </p>
        <p className="mb-5">
        Outside of work, I am actively involved in various technology communities and organizations that focus on developing digital skills.
        </p>
        <p className="mb-5">
        If you are interested in collaborating, feel free to contact me. I am always open to discussing new tech projects and exciting collaboration opportunities!
        </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1d232a" fill-opacity="1" d="M0,288L40,256C80,224,160,160,240,138.7C320,117,400,139,480,128C560,117,640,75,720,96C800,117,880,203,960,229.3C1040,256,1120,224,1200,192C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div className="bg-base-100">
        <TitleItem classs="ml-12 ">
          Work Experience
        </TitleItem>
        <div class="flex lg:w-1/2 w-auto flex-col mt-12 mx-12">
        {Works.map((work)=> (
          <Experience mitra={work.name} position={work.position} image={work.img} time = {work.time}/>
        ))}
        </div>
      </div>
      <div className="bg-base-100 ">
        <TitleItem classs="mx-12  lg:text-right text-left">
            Organization Experience
        </TitleItem>
        <div className="flex lg:w-1/2 w-auto flex-col mt-12 mx-12 lg:ml-auto place-content-end ">
        {Orgs.map((org)=>(
        <Experience classs="lg:flex-row-reverse lg:justify-between" mitra={org.name} position={org.position} image={org.img} time = {org.time}/>
        ))}
        </div>
      </div>
      <div className="bg-base-100 pt-12 pb-24">
        <TitleItem classs="text-center" >
          Education
        </TitleItem>
        <div
      class="flex justify-center items-center mt-12"
    >
      <div
      data-aos="flip-left"
      data-aos-duration="1000"
        class="align-center items-center [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-[300px]"
      >
        <div
          class="flex flex-col items-center pt-9 px-6 pb-6 relative"
        >
          <span class="relative mx-auto -mt-16 mb-8">
            <img src={images.unnes} className="rounded-full h-20"/>
          </span>

          <h5 class="text-sm font-semibold mb-2 text-center  text-zinc-700">
            Universitas Negeri Semarang
          </h5>

          <p class="w-full mb-4 text-sm text-center">
            2021 - Present
            <br />
          </p>
            <p className="text-zinc-600 text-sm text-center">

            Undergraduated Computer Engineering an Infromatics Education
            </p>
        </div>
      </div>
    </div>
    </div>

    </PageLayout>
    </>
  )
}

export default AboutPage;