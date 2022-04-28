const Button = (props) => {
  const {
    type = "button",
    title = "Button",
    handleClick,
    Icon,
    iconPosition = "right",
    children,
  } = props;
  // const handleClick = () => {
  //   alert("Button Component!");
  // };
  return (
    <button type={type} className="" onClick={handleClick}>
      {children ? (
        children
      ) : (
        <>
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
        </>
      )}
    </button>
  );
};

export { Button };
