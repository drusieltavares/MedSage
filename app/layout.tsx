import "./globals.css";
import Link from "next/link";
import {
  Calculator,
  BookOpen,
  FlaskConical,
} from "lucide-react";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          background: "#fafafa",
          color: "#111",
          fontFamily:
            "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
          }}
        >
          {/* SIDEBAR */}
          <aside
            style={{
              width: "220px",
              borderRight: "1px solid #eaeaea",
              padding: "28px",
              background: "white",
            }}
          >
            <div
              style={{
                marginBottom: "40px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "700",
                  letterSpacing: "-0.5px",
                }}
              >
                MED
              </h1>

              <p
                style={{
                  marginTop: "6px",
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                Plataforma educacional
              </p>
            </div>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <NavItem
                href="/calculadoras"
                icon={<Calculator size={18} />}
                label="Calculadoras"
              />

              <NavItem
                href="/protocolos"
                icon={<BookOpen size={18} />}
                label="Protocolos"
              />

              <NavItem
                href="/interacoes"
                icon={<FlaskConical size={18} />}
                label="Interações"
              />
            </nav>
          </aside>

          {/* CONTENT */}
          <main
            style={{
              flex: 1,
              padding: "48px",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function NavItem({
  href,
  icon,
  label,
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",

          padding: "12px 14px",

          borderRadius: "12px",

          color: "#333",

          transition: "0.2s",

          fontSize: "15px",

          fontWeight: "500",
        }}
      >
        {icon}
        {label}
      </div>
    </Link>
  );
}