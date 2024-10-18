const Experience = (props) => {
  const {image, mitra, position, time, classs} = props;
  return (
    <>
    <div className={`flex flex-row gap-5 ${classs}`}>
            <img src={image} alt="" className="rounded-full h-20 "/>
            <div>  
              <h3 className="font-bold text-xl">{position}</h3>
              <p>{mitra}</p>
              <p className="italic text-sm">{time}</p>
            </div>
          </div>
          <div class="divider"></div>
    </>
  )
}

export default Experience;