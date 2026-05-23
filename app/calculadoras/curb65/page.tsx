"use client";

import { useState } from "react";

export default function Curb65() {
  const [confusao, setConfusao] = useState(false);
  const [ureia, setUreia] = useState(false);
  const [fr, setFr] = useState(false);
  const [pa, setPa] = useState(false);
  const [idade, setIdade] = useState(false);

  const [explicacaoIA, setExplicacaoIA] = useState("");
  const [loading, setLoading] = useState(false);

  const score =
    (confusao ? 1 : 0) +
    (ureia ? 1 : 0) +
    (fr ? 1 : 0) +
    (pa ? 1 : 0) +
    (idade ? 1 : 0);

  let conduta = "";
  let cor = "";

  if (score <= 1) {
    conduta = "Tratamento ambulatorial";
    cor = "#16a34a";
  } else if (score === 2) {
    conduta = "Internação hospitalar";
    cor = "#ca8a04";
  } else {
    conduta = "Avaliar internação em UTI";
    cor = "#dc2626";
  }

  async function gerarIA() {
    try {
      setLoading(true);
      setExplicacaoIA("");

      const dados = `
Confusão: ${confusao ? "Sim" : "Não"}
Ureia > 50: ${ureia ? "Sim" : "Não"}
FR ≥ 30: ${fr ? "Sim" : "Não"}
PA baixa: ${pa ? "Sim" : "Não"}
Idade ≥ 65: ${idade ? "Sim" : "Não"}
`;

      const res = await fetch("/api/explicar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "CURB-65",
          score,
          dados,
        }),
      });

      const text = await res.text();

      if (!text) {
        throw new Error("Resposta vazia da API");
      }

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("Resposta inválida:", text);
        throw new Error("Erro ao interpretar resposta");
      }

      if (!res.ok) {
        throw new Error(data.texto || "Erro na API");
      }

      setExplicacaoIA(data.texto);
    } catch (err) {
      console.error("ERRO FRONT:", err);

      setExplicacaoIA(
        "A interpretação automática por IA encontra-se temporariamente indisponível. A avaliação clínica deve seguir diretrizes médicas validadas, incluindo BTS e IDSA."
      );
    } finally {
      setLoading(false);
    }
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
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        {/* TÍTULO */}
        <h1
          style={{
            fontSize: "34px",
            marginBottom: "10px",
            color: "#0f172a",
          }}
        >
          CURB-65
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          Avaliação de gravidade da pneumonia adquirida na comunidade
        </p>

        {/* CHECKBOXES */}
        <div
          style={{
            display: "grid",
            gap: "14px",
          }}
        >
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={confusao}
              onChange={() => setConfusao(!confusao)}
            />
            Confusão mental
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={ureia}
              onChange={() => setUreia(!ureia)}
            />
            Ureia &gt; 50 mg/dL
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={fr}
              onChange={() => setFr(!fr)}
            />
            Frequência respiratória ≥ 30
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={pa}
              onChange={() => setPa(!pa)}
            />
            Hipotensão arterial
          </label>

          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={idade}
              onChange={() => setIdade(!idade)}
            />
            Idade ≥ 65 anos
          </label>
        </div>

        {/* RESULTADO */}
        <div
          style={{
            marginTop: "30px",
            background: "#f8fafc",
            padding: "24px",
            borderRadius: "18px",
            border: `2px solid ${cor}`,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "30px",
              color: cor,
            }}
          >
            Score: {score}
          </h2>

          <p
            style={{
              marginTop: "14px",
              fontSize: "18px",
              color: "#0f172a",
            }}
          >
            <strong>Conduta:</strong> {conduta}
          </p>
        </div>

        {/* BOTÃO */}
        <button
          onClick={gerarIA}
          disabled={loading}
          style={{
            marginTop: "24px",
            width: "100%",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "16px",
            borderRadius: "14px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading ? "Gerando análise..." : "Explicar com IA"}
        </button>

        {/* EXPLICAÇÃO */}
        {explicacaoIA && (
          <div
            style={{
              marginTop: "24px",
              background: "#f8fafc",
              padding: "24px",
              borderRadius: "16px",
              lineHeight: 1.7,
              color: "#334155",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                color: "#0f172a",
              }}
            >
              Interpretação Clínica
            </h3>

            <p>{explicacaoIA}</p>
          </div>
        )}

        {/* REFERÊNCIA */}
        <div
          style={{
            marginTop: "24px",
            background: "#eff6ff",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #bfdbfe",
            color: "#1e3a8a",
            lineHeight: 1.6,
            fontSize: "15px",
          }}
        >
          Baseado nas recomendações da British Thoracic Society (BTS) e
          Infectious Diseases Society of America (IDSA).
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "#3f474e",
  padding: "14px",
  borderRadius: "12px",
};