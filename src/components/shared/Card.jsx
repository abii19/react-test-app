const Card = () => {
  return (
    <>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
          className=""
          width="200"
          height="200"
          alt=""
        />
        <h4>Card Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod
          totam eum commodi reprehenderit vero? Blanditiis ducimus omnis,
          doloremque natus illum placeat similique ullam assumenda corporis
          beatae tempore rem quasi....
        </p>
        <div>
          <div>Uploaded Date</div>
          <a href="/">Read More</a>
        </div>
      </div>
    </>
  );
};

export { Card };
