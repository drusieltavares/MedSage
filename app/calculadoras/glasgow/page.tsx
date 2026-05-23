"use client";

import { useState } from "react";

export default function Glasgow() {
  const [ocular, setOcular] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motora, setMotora] = useState(6);

  const score = ocular + verbal + motora;

  let interpretacao = "";
  let cor = "";

  if (score >= 13) {
    interpretacao = "Trauma leve";
    cor = "#16a34a";
  } else if (score >= 9) {
    interpretacao = "Trauma moderado";
    cor = "#d97706";
  } else {
    interpretacao = "Trauma grave";
    cor = "#dc2626";
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
          Escala de Glasgow
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "32px",
            fontSize: "17px",
          }}
        >
          Avaliação neurológica do nível de consciência
        </p>

        {/* CAMPOS */}
        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {/* OCULAR */}
          <div style={cardStyle}>
            <label style={labelStyle}>
              Abertura ocular
            </label>

            <select
              value={ocular}
              onChange={(e) =>
                setOcular(Number(e.target.value))
              }
              style={selectStyle}
            >
              <option value={4}>Espontânea (4)</option>
              <option value={3}>À voz (3)</option>
              <option value={2}>À dor (2)</option>
              <option value={1}>Nenhuma (1)</option>
            </select>
          </div>

          {/* VERBAL */}
          <div style={cardStyle}>
            <label style={labelStyle}>
              Resposta verbal
            </label>

            <select
              value={verbal}
              onChange={(e) =>
                setVerbal(Number(e.target.value))
              }
              style={selectStyle}
            >
              <option value={5}>Orientado (5)</option>
              <option value={4}>Confuso (4)</option>
              <option value={3}>Palavras (3)</option>
              <option value={2}>Sons (2)</option>
              <option value={1}>Nenhuma (1)</option>
            </select>
          </div>

          {/* MOTORA */}
          <div style={cardStyle}>
            <label style={labelStyle}>
              Resposta motora
            </label>

            <select
              value={motora}
              onChange={(e) =>
                setMotora(Number(e.target.value))
              }
              style={selectStyle}
            >
              <option value={6}>Obedece comandos (6)</option>
              <option value={5}>Localiza dor (5)</option>
              <option value={4}>Retira à dor (4)</option>
              <option value={3}>Flexão anormal (3)</option>
              <option value={2}>Extensão anormal (2)</option>
              <option value={1}>Nenhuma (1)</option>
            </select>
          </div>
        </div>

        {/* RESULTADO PREMIUM */}
        <div
          style={{
            marginTop: "32px",

            background:
              score >= 13
                ? "#14532d"
                : score >= 9
                ? "#78350f"
                : "#7f1d1d",

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
            Escore de Glasgow
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
            {score}
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
              Classificação clínica
            </div>

            <div
              style={{
                fontSize: "26px",
                fontWeight: "800",
                color: "white",
              }}
            >
              {interpretacao}
            </div>
          </div>
        </div>

        {/* REFERÊNCIA */}
        <div
          style={{
            marginTop: "24px",
            background: "#dbeafe",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #93c5fd",
            color: "#1e3a8a",
            lineHeight: 1.7,
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Escala amplamente utilizada na avaliação neurológica inicial,
          especialmente em trauma cranioencefálico e pacientes críticos.
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#f8fafc",
  padding: "18px",
  borderRadius: "18px",
  border: "1px solid #cbd5e1",
};

const labelStyle = {
  display: "block",
  marginBottom: "12px",
  fontWeight: "700",
  color: "#0f172a",
  fontSize: "16px",
};

const selectStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "14px",
  border: "1px solid #94a3b8",
  fontSize: "16px",
  fontWeight: "600",
  outline: "none",
  background: "white",
  color: "#0f172a",
};