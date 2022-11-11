interface CardInfo {
  key: number;
  source: any;
  author: string;
  title: string;
  description: string;
  url: string;
  img?: string;
  publishedAt: string;
  content?: string;
}

const Card = (props: CardInfo) => {
  const date = new Date(props.publishedAt);
  return (
    <div className="news-card">
      <section className="news-card-header">
        <div className="image-wrapper">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img src={props.img} alt={`${props.source.name} article`} />
          </a>
        </div>

        <h3>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </h3>
      </section>

      <section className="news-card-body">
        <p> {props.description} </p>

        <div className="news-card-footer">
          <button className="btn">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </button>
          <span>published: {date.toLocaleString()}</span>
        </div>
      </section>
    </div>
  );
};

export default Card;
