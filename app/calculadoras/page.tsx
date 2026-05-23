export default function Calculadoras() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "12px",
          color: "#8aa4e0",
        }}
      >
        Calculadoras Médicas
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Ferramentas clínicas rápidas para apoio à decisão médica
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {/* WELLS */}
        <a
          href="/calculadoras/wells"
          style={cardStyle}
        >
          <h2 style={titleStyle}>Score de Wells</h2>
          <p style={textStyle}>
            Estratificação de risco para TEP/TVP
          </p>
        </a>

        {/* CURB65 */}
        <a
          href="/calculadoras/curb65"
          style={cardStyle}
        >
          <h2 style={titleStyle}>CURB-65</h2>
          <p style={textStyle}>
            Gravidade da pneumonia comunitária
          </p>
        </a>

        {/* CHADSVASC */}
        <a
          href="/calculadoras/chadsvasc"
          style={cardStyle}
        >
          <h2 style={titleStyle}>CHA₂DS₂-VASc</h2>
          <p style={textStyle}>
            Risco tromboembólico na fibrilação atrial
          </p>
        </a>

        {/* GLASGOW */}
        <a
          href="/calculadoras/glasgow"
          style={cardStyle}
        >
          <h2 style={titleStyle}>Glasgow</h2>
          <p style={textStyle}>
            Avaliação neurológica do nível de consciência
          </p>
        </a>

        {/* CHILD PUGH */}
        <a
          href="/calculadoras/childpugh"
          style={cardStyle}
        >
          <h2 style={titleStyle}>Child-Pugh</h2>
          <p style={textStyle}>
            Classificação prognóstica da cirrose hepática
          </p>
        </a>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "24px",
  borderRadius: "20px",
  textDecoration: "none",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  transition: "0.2s",
  border: "1px solid #e2e8f0",
};

const titleStyle = {
  color: "#0f172a",
  marginBottom: "10px",
};

const textStyle = {
  color: "#64748b",
  lineHeight: 1.6,
};