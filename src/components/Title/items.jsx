const TitleItem = (props) => {
  const {children} = props;
  return (
        <div >
          <h1 className="text-xl lg:text-3xl font-bold text-center my-5 lg:my-12">{children}</h1>
        </div>
  );
}

export default TitleItem;