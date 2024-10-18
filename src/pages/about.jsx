import PageLayout from "../Layouts/PageLayout";
import TitlePage from "../components/Title/page";
import TitleItem from "../components/Title/items";
import images from "../assets/img/images";
import Experience from "../components/Experience";

const Works = [
  {
    name : "SchoolTech Indonesia",
    position : "IT Back End Developer",
    time : "August 2024 - Present",
    img : images.schooltech
  },
  {
    name : "Techarea Indonesia",
    position : "Web Developer",
    time : "November 2024 - Present",
    img : images.techarea
  }
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
  return (
    <>
    <PageLayout>
      <TitlePage>About Me</TitlePage>
      <div className="flex flex-row justify-center mx-12">
        <img src={images.profile} alt="dmsandhika" className="w-full rounded-full lg:block hidden " />
        <div className="lg:mx-12 mx-4 text-justify">
        <p className="mb-5">
        Hello! My name is Dimas Andhika Firmansyah, a web developer specializing in web-based application development and more than 1 year of experience in the technology industry. I am Ungraduated of Informatics and Computer Engineering Education at Semarang State University, where I developed a strong interest in programming and system design.
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
        <TitleItem classs="ml-12 my-0 lg:my-0">
          Work Experience
        </TitleItem>
        <div class="flex lg:w-1/2 w-auto flex-col mt-12 mx-12">
        {Works.map((work)=> (
          <Experience mitra={work.name} position={work.position} image={work.img} time = {work.time}/>
        ))}
        </div>
      </div>
      <div className="bg-base-100 ">
      <TitleItem classs="mx-12 my-0 lg:my-0 lg:text-right text-left">
          Organization Experience
      </TitleItem>
      <div className="flex lg:w-1/2 w-auto flex-col mt-12 mx-12 lg:ml-auto place-content-end ">
      {Orgs.map((org)=>(
      <Experience classs="lg:flex-row-reverse lg:justify-between" mitra={org.name} position={org.position} image={org.img} time = {org.time}/>
      ))}
      </div>
      </div>
    </PageLayout>
    </>
  )
}

export default AboutPage;