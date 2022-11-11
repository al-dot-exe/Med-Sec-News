import Card from "./Card";

// data type for Cards info
export interface cardObject {
  cards: any; // should change this to a more robust type
}

const NewsCards = (props: cardObject) => {
  return (
    <section className="container">
      <section className="title">
        <h1>Stay up to date with the latest in healthcare security</h1>
      </section>

      <section className="cards">
        {props.cards.map((card: any, id: number) => (
          <Card
            key={id}
            source={card.source}
            author={card.author}
            title={card.title}
            description={card.description}
            url={card.url}
            img={card.urlToImage}
            publishedAt={card.publishedAt}
            content={card.content && card.content}
          />
        ))}
      </section>
    </section>
  );
};

export default NewsCards;
