const Container = ({ children }: { children?: React.ReactNode }) => {
    return (
      <div className="max-w-screen-md mx-auto mt-16 px-4 p-3 relative custom-card rounded-2xl ">
        {children}
      </div>
    );
  };
  
  export default Container;