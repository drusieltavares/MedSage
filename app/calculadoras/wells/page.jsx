"use client";

import { useState } from "react";

export default function Wells() {
  const [tvt, setTvt] = useState(false);
  const [alt, setAlt] = useState(false);
  const [fc, setFc] = useState(false);
  const [imob, setImob] = useState(false);
  const [hist, setHist] = useState(false);
  const [hemo, setHemo] = useState(false);
  const [cancer, setCancer] = useState(false);

  const score =
    (tvt ? 3 : 0) +
    (alt ? 3 : 0) +
    (fc ? 1.5 : 0) +
    (imob ? 1.5 : 0) +
    (hist ? 1.5 : 0) +
    (hemo ? 1 : 0) +
    (cancer ? 1 : 0);

  let interpretacao = "";
  let conduta = "";
  let cor = "";

  if (score <= 4) {
    interpretacao = "TEP improvável";
    conduta =
      "Solicitar D-dímero. Se positivo, realizar angiotomografia pulmonar.";
    cor = "#14532d";
  } else {
    interpretacao = "TEP provável";
    conduta =
      "Alta probabilidade de TEP. Indicar angiotomografia pulmonar diretamente.";
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
          Score de Wells
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "32px",
            fontSize: "17px",
          }}
        >
          Avaliação de probabilidade clínica de tromboembolismo pulmonar
        </p>

        {/* CHECKBOXES */}
        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={tvt}
              onChange={() => setTvt(!tvt)}
            />
            Sinais clínicos de TVP (+3)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={alt}
              onChange={() => setAlt(!alt)}
            />
            Diagnóstico alternativo menos provável que TEP (+3)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={fc}
              onChange={() => setFc(!fc)}
            />
            Frequência cardíaca &gt; 100 bpm (+1.5)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={imob}
              onChange={() => setImob(!imob)}
            />
            Imobilização ou cirurgia recente (+1.5)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={hist}
              onChange={() => setHist(!hist)}
            />
            História prévia de TVP/TEP (+1.5)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={hemo}
              onChange={() => setHemo(!hemo)}
            />
            Hemoptise (+1)
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={cancer}
              onChange={() => setCancer(!cancer)}
            />
            Câncer ativo (+1)
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
            Score de Wells
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
              Interpretação clínica
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
          Baseado nos critérios clínicos de Wells para avaliação de
          tromboembolismo pulmonar (TEP), amplamente utilizados em medicina
          de emergência e terapia intensiva.
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