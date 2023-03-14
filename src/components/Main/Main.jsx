import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {/* // veri cekme */}
      {data.map(
        (item, index) => (
          <Card {...item} key={index} />
        )
        // return (
        //   <div className="cards">
        //     <h1>{item.title}</h1>
        //     <img src={item.image} alt="img" />
        //   </div>
        // );
      )}
    </div>
  );
};

export default Main;
