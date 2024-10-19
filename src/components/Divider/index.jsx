import { Link } from "react-router-dom";
const Divider = () => {
  return (
    <div className="flex my-24 lg:mx-12 mx-auto lg:scale-100 scale-75">
  <Link
    to="/portfolio" 
    className="flex-grow place-items-center text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700 flex justify-center items-center"
  >
    Explore My Portfolio
  </Link>

  <div className="divider divider-horizontal">OR</div>
  
  <Link
    to="/" 
    className="flex-grow place-items-center text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700 flex justify-center items-center"
  >
    Contact Me for Collaborations
  </Link>
</div>
  )
}
export default Divider;