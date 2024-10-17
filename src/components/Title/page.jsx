const TitlePage = (props) => {
  const {children} = props;
  return (
        <div >
          <h1 className="text-3xl lg:text-5xl font-bold text-center py-10 lg:py-24">{children}</h1>
        </div>
  );
}

export default TitlePage;