const Button = () => {
  const handleClick = () => {
    alert("Button Component!");
  };
  return (
    <button type="button" className="" onClick={handleClick}>
      See More
    </button>
  );
};

export { Button };
