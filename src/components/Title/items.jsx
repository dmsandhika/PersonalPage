const TitleItem = (props) => {
  const {children, classs} = props;
  return (
        <div >
          <h1 className={`text-xl lg:text-3xl font-bold my-5 lg:my-12 ${classs} `}>{children}</h1>
        </div>
  );
}

export default TitleItem;