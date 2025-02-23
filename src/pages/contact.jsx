import PageLayout from "../Layouts/PageLayout";
import TitlePage from "../components/Title/page";
const ContactPage = () => {
  return (
    <>
    <PageLayout>
      <TitlePage>
        Let's Connect
      </TitlePage>
      <div className="flex place-items-center justify-evenly pb-48 flex-wrap ">
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <a href="https://github.com/dmsandhika" target="blank">
       <img src="https://img.icons8.com/?size=100&id=80462&format=png&color=000000" alt="Github" />
       <span >Github</span>
        </a>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <a href="https://www.linkedin.com/in/dmsandhika/" target="blank">
       <img src="https://img.icons8.com/?size=100&id=60ZV_wYC0BM2&format=png&color=000000" alt="Linkedin" />
       <span >LinkedIn</span>
        </a>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <a href="https://www.instagram.com/dmasandhika_/" target="blank">
       <img src="https://img.icons8.com/?size=100&id=80593&format=png&color=000000" alt="Instagram" />
       <span >Instagram</span>
        </a>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dmsandhika87@gmail.com" target="blank">
          <img src="https://img.icons8.com/?size=100&id=td499GRWwrWC&format=png&color=000000" alt="Email" />
          <span >Email</span>
            </a>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <a href="https://api.whatsapp.com/send/?phone=6289630147925&text&type=phone_number&app_absent=0" target="blank">
       <img src="https://img.icons8.com/?size=100&id=99g_nik1bya1&format=png&color=000000" alt="Whatsapp" />
       <span >Whatsapp</span>
        </a>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <a href="https://open.spotify.com/user/31mea5klczl5psdw5mv7igok2kyu?si=7256fb402b3e4d04" target="blank">
       <img src="https://img.icons8.com/?size=100&id=vR7IePJZt06j&format=png&color=000000" alt="Spotify" />
       <span >Spotify</span>
        </a>
        </div>
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <a href="https://boxd.it/aSmph" target="blank">
       <img src="https://img.icons8.com/?size=100&id=qfCSJdK1z0zq&format=png&color=000000" alt="Letterboxd" />
       <span>Letterboxd</span>
        </a>
        </div>
      </div>
    </PageLayout>
    </>
  )
}

export default ContactPage