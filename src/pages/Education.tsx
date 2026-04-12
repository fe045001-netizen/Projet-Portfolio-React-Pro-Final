import { Helmet } from "react-helmet-async";

const formations = [
  {
    type: "Licence",
    title: "Licence en Informatique",
    school: "École Normale Supérieure (ENS)",
    city: "Marrakech",
    date: "09/2023 — En cours",
    active: true,
    annee: 3,
    status: "3ème année — En cours",
    points: [
      "Formation pédagogique orientée enseignement et recherche en informatique",
      "Algorithmique avancée, structures de données et programmation orientée objet",
      "Développement de compétences en conception logicielle et génie logiciel",
    ],
    modules: ["Algorithmique", "POO", "Réseaux", "Bases de données", "Systèmes d'exploitation"],
  },

];

export default function Formations() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta name="description" content="Parcours académique ENS Marrakech." />
      </Helmet>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: 16, padding: "2rem 2.5rem", marginBottom: "2.5rem",
        border: "0.5px solid rgba(148,163,184,0.15)"
      }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 600, color: "#f8fafc", marginBottom: ".75rem" }}>Formations</h1>
        <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7, maxWidth: 620 }}>
          Voici mon parcours académique à l'École Normale Supérieure de Marrakech, avec mes principales formations et éléments clés d'apprentissage.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
        <div style={{
          position: "absolute", left: 7, top: 8, bottom: 8,
          width: 1, background: "rgba(148,163,184,0.15)"
        }} />

        {formations.map((f, i) => (
          <div key={i} style={{ position: "relative", marginBottom: i < formations.length - 1 ? "1.5rem" : 0 }}>
            {/* Dot */}
            <div style={{
              position: "absolute", left: "-2.5rem", top: "1.6rem",
              width: 14, height: 14, borderRadius: "50%",
              background: f.active ? "#1e40af" : "#0f172a",
              border: `2px solid ${f.active ? "#60a5fa" : "#334155"}`,
            }} />

            {/* Card */}
            <div style={{
              background: "#0f172a",
              border: `0.5px solid ${f.active ? "rgba(96,165,250,0.3)" : "rgba(148,163,184,0.15)"}`,
              borderRadius: 16, padding: "1.5rem 1.75rem"
            }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: ".75rem", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "#94a3b8", marginBottom: ".35rem" }}>{f.type}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "#f8fafc" }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#64748b", marginTop: 3 }}>{f.school} • {f.city}</div>
                </div>
                <span style={{
                  background: f.active ? "rgba(96,165,250,0.1)" : "rgba(255,255,255,0.06)",
                  border: `0.5px solid ${f.active ? "rgba(96,165,250,0.3)" : "rgba(148,163,184,0.15)"}`,
                  borderRadius: 99, padding: "4px 14px", fontSize: 12,
                  color: f.active ? "#60a5fa" : "#94a3b8", whiteSpace: "nowrap"
                }}>{f.date}</span>
              </div>

              {/* En cours badge */}
              {f.active && f.status && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  background: "rgba(34,197,94,0.1)", color: "#4ade80", fontSize: 11,
                  padding: "3px 10px", borderRadius: 99, border: "0.5px solid rgba(74,222,128,0.2)",
                  marginBottom: ".85rem"
                }}>{f.status}</div>
              )}

              {/* Barre années */}
              {f.active && f.annee && (
                <div style={{ display: "flex", gap: 4, marginBottom: ".85rem" }}>
                  {[1, 2, 3].map(n => (
                    <div key={n} style={{
                      flex: 1, height: 5, borderRadius: 99,
                      background: n < f.annee ? "#1d4ed8" : n === f.annee ? "#60a5fa" : "rgba(255,255,255,0.06)"
                    }} />
                  ))}
                </div>
              )}

              {/* Divider */}
              <div style={{ height: "0.5px", background: "rgba(148,163,184,0.08)", margin: ".85rem 0" }} />

              {/* Points forts */}
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#475569", marginBottom: ".6rem" }}>Points forts</div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", marginBottom: ".85rem" }}>
                {f.points.map((p, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: f.active ? "#3b82f6" : "#334155", flexShrink: 0, marginTop: 6, display: "inline-block" }} />
                    {p}
                  </div>
                ))}
              </div>

              {/* Modules */}
              <div style={{ height: "0.5px", background: "rgba(148,163,184,0.08)", margin: ".85rem 0" }} />
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#475569", marginBottom: ".6rem" }}>Modules clés</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {f.modules.map(m => (
                  <span key={m} style={{
                    background: f.active ? "rgba(96,165,250,0.08)" : "rgba(255,255,255,0.05)",
                    color: f.active ? "#60a5fa" : "#94a3b8",
                    border: `0.5px solid ${f.active ? "rgba(96,165,250,0.2)" : "rgba(148,163,184,0.1)"}`,
                    fontSize: 11, padding: "3px 9px", borderRadius: 6
                  }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}