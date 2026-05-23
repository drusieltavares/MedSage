"use client";

import { useState } from "react";
import Link from "next/link";

export default function Interacoes() {
  const [med1, setMed1] = useState("");
  const [med2, setMed2] = useState("");

  const [resultado, setResultado] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // =====================================
  // BASE LOCAL DE INTERAÇÕES
  // =====================================

  const interacoesConhecidas = [
    {
      meds: ["fluoxetina", "tramadol"],
      gravidade: "ALTA",
      resultado:
        "Risco aumentado de síndrome serotoninérgica e convulsões.",
    },

    {
      meds: ["sertralina", "linezolida"],
      gravidade: "ALTA",
      resultado:
        "Risco elevado de síndrome serotoninérgica potencialmente grave.",
    },

    {
      meds: ["varfarina", "amiodarona"],
      gravidade: "MODERADA",
      resultado:
        "Aumento do INR e maior risco de sangramento.",
    },

    {
      meds: ["fluvoxamina", "clorpromazina"],
      gravidade: "MODERADA",
      resultado:
        "Aumento de sedação e prolongamento do intervalo QT.",
    },

    {
      meds: ["clonazepam", "álcool"],
      gravidade: "ALTA",
      resultado:
        "Depressão importante do sistema nervoso central e risco respiratório.",
    },

    {
      meds: ["ibuprofeno", "varfarina"],
      gravidade: "ALTA",
      resultado:
        "Aumento importante do risco de sangramento gastrointestinal.",
    },

    {
      meds: ["omeprazol", "clopidogrel"],
      gravidade: "MODERADA",
      resultado:
        "Possível redução do efeito antiplaquetário do clopidogrel.",
    },
  ];

  // =====================================
  // VERIFICAR INTERAÇÃO
  // =====================================

  async function verificarInteracao() {
    if (!med1 || !med2) {
      setResultado(
        "Digite os dois medicamentos."
      );

      return;
    }

    try {
      setLoading(true);

      setResultado("");

      const m1 =
        med1.toLowerCase().trim();

      const m2 =
        med2.toLowerCase().trim();

      const encontrada =
        interacoesConhecidas.find(
          (item) => {
            return (
              (item.meds[0] === m1 &&
                item.meds[1] === m2) ||
              (item.meds[0] === m2 &&
                item.meds[1] === m1)
            );
          }
        );

      if (encontrada) {
        setResultado(
          `⚠️ Gravidade: ${encontrada.gravidade}

${encontrada.resultado}`
        );
      } else {
        setResultado(
          `✅ Nenhuma interação relevante encontrada entre ${med1} e ${med2}.`
        );
      }
    } catch (error) {
      console.error(error);

      setResultado(
        "Erro ao verificar interação medicamentosa."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",

        background:
          "linear-gradient(135deg, #0f172a 0%, #312e81 100%)",

        padding: "30px 20px",

        color: "white",
      }}
    >
      {/* TOPO */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 30px auto",

          display: "flex",
          justifyContent:
            "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: "20px",
        }}
      >
        {/* VOLTAR */}

        <Link
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{
              background:
                "rgba(255,255,255,0.12)",

              border:
                "1px solid rgba(255,255,255,0.2)",

              color: "white",

              padding:
                "12px 18px",

              borderRadius: "14px",

              cursor: "pointer",

              fontWeight: "700",

              backdropFilter:
                "blur(10px)",

              fontSize: "15px",
            }}
          >
            ← Voltar
          </button>
        </Link>

        {/* MENU */}

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={menuLink}
          >
            Home
          </Link>

          <Link
            href="/interacoes"
            style={menuLinkAtivo}
          >
            Interações
          </Link>

          <Link
            href="/bulas"
            style={menuLink}
          >
            Bulas
          </Link>

          <Link
            href="/calculadoras"
            style={menuLink}
          >
            Calculadoras
          </Link>
        </div>
      </div>

      {/* CARD PRINCIPAL */}

      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background:
              "rgba(255,255,255,0.96)",

            borderRadius: "32px",

            padding: "42px",

            boxShadow:
              "0 20px 50px rgba(0,0,0,0.35)",

            border:
              "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {/* HEADER */}

          <div
            style={{
              marginBottom: "38px",
            }}
          >
            <div
              style={{
                width: "84px",
                height: "84px",

                borderRadius: "24px",

                background:
                  "linear-gradient(135deg,#7c3aed,#4f46e5)",

                display: "flex",
                alignItems: "center",
                justifyContent:
                  "center",

                fontSize: "40px",

                marginBottom: "24px",

                boxShadow:
                  "0 14px 30px rgba(124,58,237,0.4)",
              }}
            >
              💊
            </div>

            <h1
              style={{
                margin: 0,

                fontSize: "48px",

                color: "#0f172a",

                fontWeight: "900",

                lineHeight: 1.1,
              }}
            >
              Interações
              Medicamentosas
            </h1>

            <p
              style={{
                marginTop: "18px",

                color: "#475569",

                lineHeight: 1.9,

                fontSize: "18px",
              }}
            >
              Analise riscos clínicos,
              interações farmacológicas
              e efeitos adversos entre
              medicamentos.
            </p>
          </div>

          {/* INPUTS */}

          <div
            style={{
              display: "grid",
              gap: "22px",
            }}
          >
            <div>
              <label style={labelStyle}>
                Primeiro medicamento
              </label>

              <input
                type="text"
                placeholder="Ex: fluoxetina"
                value={med1}
                onChange={(e) =>
                  setMed1(
                    e.target.value
                  )
                }
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Segundo medicamento
              </label>

              <input
                type="text"
                placeholder="Ex: tramadol"
                value={med2}
                onChange={(e) =>
                  setMed2(
                    e.target.value
                  )
                }
                style={inputStyle}
              />
            </div>
          </div>

          {/* BOTÃO */}

          <button
            onClick={
              verificarInteracao
            }
            disabled={loading}
            style={{
              marginTop: "30px",

              width: "100%",

              background:
                "linear-gradient(135deg,#7c3aed,#4f46e5)",

              color: "white",

              border: "none",

              padding: "20px",

              borderRadius: "20px",

              fontSize: "18px",

              fontWeight: "800",

              cursor: "pointer",

              boxShadow:
                "0 14px 28px rgba(124,58,237,0.35)",

              transition:
                "all 0.2s ease",
            }}
          >
            {loading
              ? "Verificando..."
              : "Verificar interação"}
          </button>

          {/* RESULTADO */}

          {resultado && (
            <div
              style={{
                marginTop: "34px",

                background:
                  "#f8fafc",

                border:
                  "2px solid #c4b5fd",

                padding: "28px",

                borderRadius: "24px",
              }}
            >
              <h2
                style={{
                  marginTop: 0,

                  color: "#6d28d9",

                  fontSize: "28px",

                  marginBottom: "16px",
                }}
              >
                Resultado
              </h2>

              <p
                style={{
                  color: "#0f172a",

                  lineHeight: 1.9,

                  fontSize: "17px",

                  whiteSpace:
                    "pre-wrap",
                }}
              >
                {resultado}
              </p>
            </div>
          )}

          {/* RODAPÉ */}

          <div
            style={{
              marginTop: "34px",

              background:
                "#eef2ff",

              padding: "18px",

              borderRadius: "18px",

              border:
                "1px solid #c7d2fe",

              color: "#4338ca",

              lineHeight: 1.7,

              fontWeight: "600",
            }}
          >
            Dados farmacológicos para
            fins educacionais e de apoio
            clínico.
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================
// ESTILOS
// =====================================

const labelStyle = {
  display: "block",

  marginBottom: "12px",

  color: "#0f172a",

  fontWeight: "800",

  fontSize: "16px",
};

const inputStyle = {
  width: "100%",

  padding: "18px",

  borderRadius: "16px",

  border: "1px solid #cbd5e1",

  fontSize: "16px",

  background: "#fff",

  color: "#0f172a",

  outline: "none",

  boxSizing: "border-box",

  transition: "0.2s",
};

const menuLink = {
  textDecoration: "none",

  color: "white",

  padding: "12px 18px",

  borderRadius: "14px",

  background:
    "rgba(255,255,255,0.08)",

  border:
    "1px solid rgba(255,255,255,0.15)",

  fontWeight: "700",

  backdropFilter: "blur(10px)",
};

const menuLinkAtivo = {
  textDecoration: "none",

  color: "white",

  padding: "12px 18px",

  borderRadius: "14px",

  background:
    "linear-gradient(135deg,#7c3aed,#4f46e5)",

  fontWeight: "800",

  boxShadow:
    "0 10px 24px rgba(124,58,237,0.4)",
};