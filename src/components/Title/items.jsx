const TitleItem = (props) => {
  const {children, classs} = props;
  return (
        <div >
          <h1 className={`text-2xl lg:text-3xl font-bold py-5 lg:py-12 ${classs} `}>{children}</h1>
        </div>
  );
}

export default TitleItem;