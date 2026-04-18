export default function Contact() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: 16, padding: "2rem 2.5rem", marginBottom: "2rem",
        border: "0.5px solid rgba(148,163,184,0.15)"
      }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 500, color: "#f8fafc", marginBottom: ".75rem" }}>Contact</h1>
        <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7, maxWidth: 580 }}>
          Je suis ouverte aux opportunités de stage, aux collaborations et aux projets en
          développement web et logiciel. N'hésitez pas à me contacter par email ou via mes réseaux professionnels.
        </p>
      </div>

      {/* Grid 2 cartes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>

        {/* Mes coordonnées */}
        <div style={{ background: "#0f172a", border: "0.5px solid rgba(148,163,184,0.15)", borderRadius: 16, padding: "1.5rem" }}>
          
          <h2 style={{ fontSize: "1rem", fontWeight: 500, color: "#f8fafc", marginBottom: "1.25rem" }}>Mes coordonnées</h2>
          {[
            { label: "Nom", value: "Fatima-Ezzahra Sahmad" },
            { label: "Email", value: "f.sahmad6480@uca.ac.ma" },
            { label: "Localisation", value: "Marrakech, Maroc" },
            { label: "Profil", value: "Etudiant" },
          ].map(({ label, value }) => (
            <div key={label} style={{ marginBottom: "1rem" }}>
              <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#e2e8f0" }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Réseaux professionnels */}
        <div style={{ background: "#0f172a", border: "0.5px solid rgba(148,163,184,0.15)", borderRadius: 16, padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 500, color: "#f8fafc", marginBottom: "1.25rem" }}>Réseaux professionnels</h2>
          {[
            { name: "Email", url: "mailto:f.sahmad6480@uca.ac.ma", display: "f.sahmad6480@uca.ac.ma" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/fatima-ezzahra-sahmad-25b984402", display: "lwww.linkedin.com/in/fatima-ezzahra-sahmad-25b984402" },
            { name: "GitHub", url: "https://github.com/fe045001-netizen", display: "https://github.com/fe045001-netizen" },
          ].map(({ name, url, display }) => (
            <div key={name} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "0.5px solid rgba(148,163,184,0.08)" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 2 }}>{name}</div>
                <a href={url} style={{ fontSize: 13, color: "#60a5fa", textDecoration: "none" }}>{display}</a>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: "1.25rem" }}>
            <a href="mailto:f.sahmad6480@uca.ac.ma" style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              background: "rgba(255,255,255,0.06)", color: "#e2e8f0",
              border: "0.5px solid rgba(148,163,184,0.2)", borderRadius: 8,
              padding: "9px 14px", fontSize: 13, fontWeight: 500, textDecoration: "none"
            }}>M'envoyer un email</a>
            <a href= "https://www.linkedin.com/in/fatima-ezzahra-sahmad-25b984402" target="_blank" style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              background: "rgba(255,255,255,0.06)", color: "#e2e8f0",
              border: "0.5px solid rgba(148,163,184,0.2)", borderRadius: 8,
              padding: "9px 14px", fontSize: 13, fontWeight: 500, textDecoration: "none"
            }}>Voir mon LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
