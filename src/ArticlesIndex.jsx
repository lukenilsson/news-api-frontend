export function ArticlesIndex(props) {
  return (
    <div>
      <h1>All Dem Newz</h1>
      {props.articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
