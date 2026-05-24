import Image from "next/image";

export default function Home() {
  const calculadoras = [
    {
      nome: "Wells",
      descricao: "Probabilidade clínica de TEP",
      link: "/calculadoras/wells",
      cor: "#7f1d1d",
      icone: "🩸",
    },
    {
      nome: "CURB-65",
      descricao: "Gravidade da pneumonia",
      link: "/calculadoras/curb65",
      cor: "#14532d",
      icone: "🫁",
    },
    {
      nome: "Glasgow",
      descricao: "Avaliação neurológica",
      link: "/calculadoras/glasgow",
      cor: "#1e3a8a",
      icone: "🧠",
    },
    {
      nome: "CHA₂DS₂-VASc",
      descricao: "Risco tromboembólico",
      link: "/calculadoras/chadsvasc",
      cor: "#78350f",
      icone: "❤️",
    },
    {
      nome: "Child-Pugh",
      descricao: "Prognóstico hepático",
      link: "/calculadoras/childpugh",
      cor: "#0f766e",
      icone: "🧬",
    },

    // NOVA FEATURE
    {
      nome: "Interações",
      descricao:
        "Interações medicamentosas e farmacologia",
      link: "/interacoes",
      cor: "#7c3aed",
      icone: "💊",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #e0f2fe, #f8fafc, #dbeafe)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "8px 16px",
              borderRadius: "999px",
              fontWeight: "700",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            Plataforma médica inteligente
          </div>

          <h1
            style={{
              fontSize: "58px",
              fontWeight: "900",
              color: "#0f172a",
              marginBottom: "14px",
            }}
          >
            MedSage
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#475569",
              maxWidth: "760px",
              lineHeight: 1.8,
            }}
          >
            Plataforma médica moderna com
            calculadoras clínicas,
            interpretação automatizada,
            farmacologia e suporte inteligente
            à decisão clínica.
          </p>

          {/* HERO CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              marginTop: "36px",
            }}
          >
            <div style={heroCard}>
              <div style={heroEmoji}>🩺</div>

              <h3 style={heroTitle}>6+</h3>

              <p style={heroText}>
                Ferramentas clínicas integradas
              </p>
            </div>

            <div style={heroCard}>
              <div style={heroEmoji}>🤖</div>

              <h3 style={heroTitle}>IA</h3>

              <p style={heroText}>
                Interpretação automatizada de
                scores médicos
              </p>
            </div>

            <div style={heroCard}>
              <div style={heroEmoji}>💊</div>

              <h3 style={heroTitle}>Drug Check</h3>

              <p style={heroText}>
                Verificação de interações
                medicamentosas
              </p>
            </div>

            <div style={heroCard}>
              <div style={heroEmoji}>⚡</div>

              <h3 style={heroTitle}>Rápido</h3>

              <p style={heroText}>
                Interface premium otimizada para
                uso hospitalar
              </p>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {calculadoras.map((calc) => (
            <a
              key={calc.nome}
              href={calc.link}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "28px",
                  padding: "28px",
                  minHeight: "230px",

                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.08)",

                  border: "1px solid #e2e8f0",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
              >
                <div>
                  {/* ÍCONE */}
                  <div
                    style={{
                      width: "62px",
                      height: "62px",
                      borderRadius: "20px",
                      background: calc.cor,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      color: "white",
                      fontSize: "30px",

                      marginBottom: "22px",

                      boxShadow: `0 10px 20px ${calc.cor}40`,
                    }}
                  >
                    {calc.icone}
                  </div>

                  <h2
                    style={{
                      margin: 0,
                      fontSize: "28px",
                      color: "#0f172a",
                      fontWeight: "800",
                    }}
                  >
                    {calc.nome}
                  </h2>

                  <p
                    style={{
                      marginTop: "14px",
                      color: "#475569",
                      lineHeight: 1.7,
                    }}
                  >
                    {calc.descricao}
                  </p>
                </div>

                {/* BOTÃO */}
                <div
                  style={{
                    marginTop: "26px",
                    background: calc.cor,
                    color: "white",

                    padding: "15px",
                    borderRadius: "16px",

                    textAlign: "center",
                    fontWeight: "700",

                    boxShadow: `0 10px 20px ${calc.cor}30`,
                  }}
                >
                  Abrir ferramenta
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* SOBRE */}
        <div
          style={{
            marginTop: "70px",
            background: "white",
            borderRadius: "28px",
            padding: "32px",

            display: "flex",
            alignItems: "center",
            gap: "24px",

            boxShadow:
              "0 12px 30px rgba(0,0,0,0.06)",

            flexWrap: "wrap",
          }}
        >
          <Image
            src="/perfil.jpg"
            alt="Usiel Tavares"
            width={96}
            height={96}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #dbeafe",
            }}
          />

          <div>
            <h3
              style={{
                margin: 0,
                color: "#0f172a",
                fontSize: "28px",
                fontWeight: "800",
              }}
            >
              Desenvolvido por Usiel Tavares
            </h3>

            <p
              style={{
                marginTop: "14px",
                color: "#475569",
                lineHeight: 1.9,
                maxWidth: "850px",
              }}
            >
              Olá! Sou Usiel Tavares,
              bacharel em Ciência e
              Tecnologia pela UFRN e quase
              médico pela UERJ.
            </p>

            <p
              style={{
                marginTop: "10px",
                color: "#475569",
                lineHeight: 1.9,
                maxWidth: "850px",
              }}
            >
              Sempre gostei de construir
              soluções usando tecnologia,
              principalmente quando elas podem
              gerar impacto real na vida das
              pessoas.
            </p>

            <p
              style={{
                marginTop: "10px",
                color: "#475569",
                lineHeight: 1.9,
                maxWidth: "850px",
              }}
            >
              A MedSage surgiu justamente
              dessa mistura entre medicina,
              inovação e curiosidade em criar
              coisas úteis.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "36px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "14px",
            paddingBottom: "20px",
          }}
        >
          MedSage © 2026 — Plataforma médica
          para suporte clínico e interpretação
          inteligente.
        </div>
      </div>
    </div>
  );
}

const heroCard = {
  background: "rgba(255,255,255,0.85)",
  padding: "22px",
  borderRadius: "22px",
  border: "1px solid #dbeafe",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
};

const heroEmoji = {
  fontSize: "34px",
  marginBottom: "10px",
};

const heroTitle = {
  margin: 0,
  fontSize: "30px",
  color: "#0f172a",
  fontWeight: "900",
};

const heroText = {
  marginTop: "8px",
  color: "#475569",
  lineHeight: 1.6,
};