function HomeCard({ title, img, span, btitle }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      }}
    >
      <div className="info">
        <h2>
          {title}
        </h2>
        <span>
          {span}
        </span>
      </div>
      <div className="animate-span">
        <span>
          {btitle}
        </span>
      </div>
    </div>
  );
}

export default HomeCard;
