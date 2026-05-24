"use client";

import { useState } from "react";

export default function ChadsVasc() {
  const [idade75, setIdade75] = useState(false);
  const [idade65, setIdade65] = useState(false);
  const [has, setHas] = useState(false);
  const [dm, setDm] = useState(false);
  const [avc, setAvc] = useState(false);
  const [vasc, setVasc] = useState(false);
  const [sexo, setSexo] = useState(false);

  const score =
    (idade75 ? 2 : 0) +
    (idade65 ? 1 : 0) +
    (has ? 1 : 0) +
    (dm ? 1 : 0) +
    (avc ? 2 : 0) +
    (vasc ? 1 : 0) +
    (sexo ? 1 : 0);

  let conduta = "";
  let risco = "";
  let cor = "";

  if (score === 0) {
    risco = "Baixo risco";
    conduta = "Não anticoagular.";
    cor = "#14532d";
  } else if (score === 1) {
    risco = "Risco intermediário";
    conduta = "Considerar anticoagulação.";
    cor = "#78350f";
  } else {
    risco = "Alto risco";
    conduta = "Indicar anticoagulação.";
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
          CHA₂DS₂-VASc
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "32px",
            fontSize: "17px",
          }}
        >
          Estratificação de risco tromboembólico em fibrilação atrial
        </p>

        {/* CAMPOS */}
        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={idade75}
              onChange={() => setIdade75(!idade75)}
            />
            Idade ≥ 75 anos (+2)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={idade65}
              onChange={() => setIdade65(!idade65)}
            />
            Idade entre 65–74 anos (+1)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={has}
              onChange={() => setHas(!has)}
            />
            Hipertensão arterial (+1)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={dm}
              onChange={() => setDm(!dm)}
            />
            Diabetes mellitus (+1)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={avc}
              onChange={() => setAvc(!avc)}
            />
            AVC/AIT prévio (+2)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={vasc}
              onChange={() => setVasc(!vasc)}
            />
            Doença vascular (+1)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={sexo}
              onChange={() => setSexo(!sexo)}
            />
            Sexo feminino (+1)
          </label>
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
            Score CHA₂DS₂-VASc
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
              Risco tromboembólico
            </div>

            <div
              style={{
                fontSize: "26px",
                fontWeight: "800",
                color: "white",
              }}
            >
              {risco}
            </div>
          </div>
        </div>

        {/* CONDUTA */}
        <div
          style={{
            marginTop: "24px",
            background: "#dbeafe",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #93c5fd",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "10px",
              color: "#1e3a8a",
              fontSize: "20px",
            }}
          >
            Conduta recomendada
          </h3>

          <p
            style={{
              margin: 0,
              color: "#1e293b",
              lineHeight: 1.7,
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {conduta}
          </p>
        </div>

        {/* REFERÊNCIA */}
        <div
          style={{
            marginTop: "22px",
            background: "#f8fafc",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            color: "#334155",
            lineHeight: 1.7,
            fontSize: "15px",
          }}
        >
          Baseado nas diretrizes internacionais para prevenção de AVC em
          pacientes com fibrilação atrial não valvar.
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",

  background: "#f8fafc",

  padding: "16px",

  borderRadius: "16px",

  border: "1px solid #cbd5e1",

  fontSize: "16px",

  fontWeight: "600",

  color: "#0f172a",
};