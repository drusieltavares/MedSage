"use client";

import { useState } from "react";

export default function ChildPugh() {
  const [score, setScore] = useState(5);

  let classe = "";
  let prognostico = "";
  let cor = "";

  if (score <= 6) {
    classe = "Classe A";
    prognostico = "Doença hepática compensada";
    cor = "#14532d";
  } else if (score <= 9) {
    classe = "Classe B";
    prognostico = "Comprometimento hepático moderado";
    cor = "#78350f";
  } else {
    classe = "Classe C";
    prognostico = "Doença hepática avançada";
    cor = "#7f1d1d";
  }

  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "32px",
          borderRadius: "24px",
          boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
        }}
      >
        {/* TÍTULO */}
        <h1
          style={{
            fontSize: "38px",
            marginBottom: "10px",
            color: "#0f172a",
            fontWeight: "800",
          }}
        >
          Child-Pugh
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "32px",
            fontSize: "17px",
          }}
        >
          Classificação prognóstica da cirrose hepática
        </p>

        {/* INPUT */}
        <div
          style={{
            background: "#f8fafc",
            padding: "24px",
            borderRadius: "18px",
            border: "1px solid #cbd5e1",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "14px",
              fontSize: "17px",
              fontWeight: "700",
              color: "#0f172a",
            }}
          >
            Pontuação total
          </label>

          <input
            type="number"
            min={5}
            max={15}
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #94a3b8",
              fontSize: "22px",
              fontWeight: "700",
              outline: "none",
              color: "#0f172a",
              background: "white",
            }}
          />

          <p
            style={{
              marginTop: "12px",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            Insira um valor entre 5 e 15 pontos
          </p>
        </div>

        {/* RESULTADO PREMIUM */}
        <div
          style={{
            marginTop: "32px",

            background: cor,

            padding: "32px",
            borderRadius: "24px",

            boxShadow: "0 10px 30px rgba(0,0,0,0.20)",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Classificação Child-Pugh
          </div>

          <h2
            style={{
              margin: "10px 0 0 0",
              fontSize: "64px",
              fontWeight: "900",
              color: "white",
              lineHeight: 1,
            }}
          >
            {classe}
          </h2>

          <div
            style={{
              marginTop: "24px",

              background: "rgba(255,255,255,0.14)",

              border: "1px solid rgba(255,255,255,0.18)",

              padding: "18px",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.75)",
                marginBottom: "6px",
                fontWeight: "600",
              }}
            >
              Prognóstico clínico
            </div>

            <div
              style={{
                fontSize: "24px",
                fontWeight: "800",
                color: "white",
              }}
            >
              {prognostico}
            </div>
          </div>
        </div>

        {/* INFO */}
        <div
          style={{
            marginTop: "24px",
            background: "#dbeafe",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #93c5fd",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#1e293b",
              lineHeight: 1.7,
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            O escore Child-Pugh auxilia na avaliação da gravidade da cirrose,
            risco cirúrgico e sobrevida estimada do paciente hepatopata.
          </p>
        </div>

        {/* REFERÊNCIA */}
        <div
          style={{
            marginTop: "24px",
            background: "#f8fafc",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            color: "#334155",
            lineHeight: 1.7,
            fontSize: "15px",
          }}
        >
          Baseado em parâmetros clínicos e laboratoriais utilizados
          internacionalmente para estratificação da insuficiência hepática.
        </div>
      </div>
    </div>
  );
}