const Button = (props) => {
  const { title, handleClick, Icon, iconPosition = "right" } = props;
  // const handleClick = () => {
  //   alert("Button Component!");
  // };
  return (
    <button type="button" className="" onClick={handleClick}>
      {Icon && iconPosition === "left" && (
        <span>
          <Icon />
        </span>
      )}
      {title}
      {Icon && iconPosition === "right" && (
        <span>
          <Icon />
        </span>
      )}
    </button>
  );
};

export { Button };
