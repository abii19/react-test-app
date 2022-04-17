const Card = (props) => {
  const { title, description, created_at, img } = props.blog;
  // const {blog} = props;
  //const {title, desc} = blog;

  const imgStyles = {
    objectFit: "cover",
  };
  const contentStyles = {
    padding: "15px",
  };
  const cardFooterStyles = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <>
      <div className="">
        <img
          src={img}
          className=""
          width="100%"
          height="200"
          alt=""
          style={imgStyles}
        />
        <div style={contentStyles}>
          <h4>{title}</h4>
          <p>{description}</p>
          <div style={cardFooterStyles}>
            <div>{created_at}</div>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
