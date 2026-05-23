import "./globals.css";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
} from "lucide-react";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          background: "#f4f7f5",
          fontFamily:
            "'Inter', sans-serif",
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
              width: "110px",
              background: "#ffffff",
              borderRight: "1px solid #e5e7eb",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "24px 0",
              gap: "22px",
            }}
          >
            {/* LOGO */}
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg,#22c55e,#16a34a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "900",
                fontSize: "22px",
                marginBottom: "28px",
                boxShadow:
                  "0 10px 25px rgba(34,197,94,0.25)",
              }}
            >
              +
            </div>

            <SidebarItem
              icon={<LayoutDashboard size={24} />}
              href="/"
              active
            />

            <SidebarItem
              icon={<Users size={24} />}
              href="/pacientes"
            />

            <SidebarItem
              icon={<Calendar size={24} />}
              href="/consultas"
            />

            <SidebarItem
              icon={<Settings size={24} />}
              href="/configuracoes"
            />
          </aside>

          {/* MAIN */}
          <main
            style={{
              flex: 1,
              padding: "40px",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                marginBottom: "40px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "42px",
                  color: "#111827",
                  fontWeight: "900",
                  letterSpacing: "-1.5px",
                }}
              >
                Clínica
              </h1>

              <p
                style={{
                  marginTop: "10px",
                  color: "#6b7280",
                  fontSize: "18px",
                }}
              >
                Gestão de pacientes e consultas
              </p>
            </div>

            {/* CONTENT */}
            <div
              style={{
                display: "grid",
                gap: "24px",
              }}
            >
              {/* HERO CARD */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg,#22c55e,#16a34a)",
                  borderRadius: "34px",
                  padding: "42px",
                  color: "white",
                  boxShadow:
                    "0 20px 50px rgba(34,197,94,0.20)",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "34px",
                    fontWeight: "900",
                  }}
                >
                  Bem-vindo de volta
                </h2>

                <p
                  style={{
                    marginTop: "12px",
                    opacity: 0.9,
                    fontSize: "18px",
                    maxWidth: "520px",
                    lineHeight: 1.5,
                  }}
                >
                  Gerencie sua clínica de forma simples,
                  rápida e organizada.
                </p>
              </div>

              {/* MAIN CARD */}
              <div
                style={{
                  background: "white",
                  borderRadius: "30px",
                  padding: "32px",
                  minHeight: "500px",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

function SidebarItem({
  icon,
  href,
  active = false,
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
          width: "64px",
          height: "64px",
          borderRadius: "22px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: active
            ? "#22c55e"
            : "transparent",

          color: active
            ? "white"
            : "#6b7280",

          transition: ".2s",

          boxShadow: active
            ? "0 10px 25px rgba(34,197,94,.25)"
            : "none",
        }}
      >
        {icon}
      </div>
    </Link>
  );
}