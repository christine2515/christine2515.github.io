import CardImage from './CardImage.js';

function Card(props) {
  const { data } = props;

  const getLink = (content, image) => {
    const className = image ? "image-link" : "text-link";
    return (
      <a href={data.link} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <div className="card">
      {getLink(<CardImage data={data} />, true)}
      <div className="description">
        <p style={{paddingLeft: "10px"}}>
          {getLink(<b>{data.name}</b>, false)}<br />
          <b>{data.tags.join(', ')}</b>
          <span> {data.date}</span>
          <br />
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default Card;
