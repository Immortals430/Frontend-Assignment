import "./Githubpage.css"

export default function ErrorState({ error }) {
  return (
    <main className="githubpage">
      <div className="exception">
        <h3 className="error">{error}</h3>
      </div>
    </main>
  );
}
