import cardData from "../data/data.json";
import Banner from "./banner/Banner";
import Card from "./card/Card";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
