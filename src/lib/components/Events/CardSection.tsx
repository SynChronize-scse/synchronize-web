import Card from "./Card";

interface Card {
  title: string;
  img?: string;
  description?: string;
  date?: string;
  time?: string;
}

const CardSection = ({
  title,
  cards = [],
  titleImg,
}: {
  title: string;
  cards: Card[];
  titleImg?: string;
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mt-5 rounded-xl w-full">
        <div className="flex justify-between relative w-full">
          <h1 className="text-2xl lg:text-4xl my-5">{title}</h1>

          {titleImg && (
            <img
              src={titleImg}
              alt="title"
              className="max-[350px]:hidden h-16 object-cover rounded-lg"
            />
          )}
        </div>
        <div className="flex flex-row gap-5 overflow-x-auto pb-3">
          {cards.map((card, index) => (
            // <CardProto
            //   key={index}
            //   title={card.title || "Untitled"}
            //   description={card.description || "No description available."}
            //   img={card.img}
            //   />

            <Card
              key={index}
              title={card.title}
              img={card.img}
              description={card.description}
              date={card.date}
              time={card.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
