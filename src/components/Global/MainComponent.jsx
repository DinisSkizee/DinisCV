const MainComponent = ({ id, children }) => {
  return (
    <div
      id={id}
      className="bg-bgBlue pt-[20%] md:text-lg pb-16 px-5 lg:px-[12%] md:px-12"
    >
      {children}
    </div>
  );
};

export default MainComponent;
