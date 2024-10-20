import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
const Card = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  const {image, title, link, desc} = props
  return (
    <div className="card bg-base-200 w-72 shadow-xl mb-12" data-aos="flip-right" data-aos-duration="1000">
    <figure className="px-5 pt-5">
      <img
        src={image}
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{desc}</p>
      <div className="card-actions">
        <a href={link} className="btn btn-primary" target="blank">Go To Website</a>
      </div>
    </div>
  </div>
  )
}

export default Card;