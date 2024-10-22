import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageLayout = (props) => {
  const {children} = props;
  return (
      <>
        <Navbar/>
        <div className="bg-base-200 pt-24 overflow-x-hidden">
        {children}
        </div>
        <Footer/>
        
      </>
  )
}

export default PageLayout;