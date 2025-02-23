import TitlePage from "../components/Title/page";
import TitleItem from "../components/Title/items";
import PageLayout from "../Layouts/PageLayout";
import GitHubCalendar from 'react-github-calendar';
import Card from "../components/Card";
import images from "../assets/img/images";

const Ports = [
  {
    title : "OrgEnroll",
    desc : "OrgEnroll is a web-based system for campus organization registration, developed to streamline administrative processes as a final project for the MSIB program at NF Computer.",
    link : "https://orgenroll.dmsandhika.my.id/",
    image: images.orgenroll
  },
  {
    title: "Website Desa Jatijajar",
    desc : "The Jatijajar Village Website, part of the 'Digitalisasi Administrasi Desa Berbasis Web' program, enhances village administration by offering easy access to information, online forms, and updates, promoting transparency and engagement",
    link : "https://jatijajar.dmsandhika.my.id/",
    image: images.jatijajar
  },
  {
    title : "MyFutsal",
    desc : "MyFutsal is an online futsal booking website I developed as a fake project for my personal portfolio, showcasing my skills in web development.",
    link : "https://myfutsal.dmsandhika.my.id/",
    image: images.futsal
  }
]
const PortfolioPage = () => {
  return(
    <>
      <PageLayout>
        <TitlePage>
          Portfolio
        </TitlePage>
        <TitleItem classs="text-center">
          Github Contributor Calendar
        </TitleItem>
        <div className="flex justify-center mx-12 mb-23">
          <GitHubCalendar username="dmsandhika" />
        </div>
        <div class="bg-base-200 dark:bg-base-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" class="fill-base-100 dark:fill-[#1d232a]">
          <path d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,224C672,203,768,117,864,112C960,107,1056,181,1152,218.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

  <div className="bg-base-100 py-12">
          <TitleItem classs="text-center">
            My Project
          </TitleItem>
          <div className="flex  flex-wrap justify-evenly">
            {
              Ports.map((port) => (
                <Card title={port.title} desc={port.desc} link={port.link} image={port.image}></Card>
              )
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default PortfolioPage;