import data from "../data/data.json";
import "../index.css";

function MapCard() {
  return (
    <section className="mainComp">
      {data.map((item, i) => (
        <div>
          <img src={item.image} alt="mkbhd" width="400" />
          <h3>{item.title}</h3>
          
          <h4>{item.channel}</h4>
          <div>
            <p>{item.views}</p>
            <p>{item.uploaded}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MapCard;
