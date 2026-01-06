export default function Home() {

  const now = new Date();

const formattedDate = now.toLocaleDateString("es-PE", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

const formattedTime = now.toLocaleTimeString("es-PE", {
  hour: "2-digit",
  minute: "2-digit"
});

  return (
    <main style={styles.container}>

      {/* PRESENTACIÓN */}
      <section style={styles.hero}>
        <h1 style={styles.header}>Práctica Frontend con Next.js</h1>

        <p style={styles.text}>
          Hola, mi nombre es <strong>Gary Salguero</strong>. Tengo un perfil orientado al análisis,
          soporte y desarrollo de software.  
          Esta es una página desarrollada en <strong>Next.js</strong> como prueba técnica.
        </p>

        <section style={styles.section}>
          <h2 style={styles.subHeader}>Tecnologías</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </section>

        <a
          href="https://wa.me/51993986191"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Contactar
        </a>
      </section>

      {/* NOTICIA */}
      <section style={styles.newsSection}>
        <p style={styles.category}>MUNDO</p>

          <p style={styles.datetime}>
  Lima, {formattedDate} | {formattedTime}
</p>


        <h2 style={styles.header}>
          Audiencia internacional genera atención política en Estados Unidos
        </h2>

        <p style={styles.meta}>
          Publicado el 05 de enero de 2026 | Redacción Internacional
        </p>

        {/* IMÁGENES REFERENCIALES */}
        <div style={styles.imagePlaceholder}>Imagen referencial</div>
        <div style={styles.imagePlaceholder}>Imagen referencial</div>

        <p style={styles.text}>
          Una audiencia judicial realizada en Estados Unidos ha generado expectativa internacional
          debido a la relevancia del personaje involucrado.
        </p>

        <div style={styles.imagePlaceholder}>Imagen referencial</div>

        <p style={styles.text}>
          El proceso se desarrolla en un tribunal federal y es seguido de cerca por medios,
          analistas y organismos internacionales.
        </p>

        <h3 style={styles.subHeader}>Noticias relacionadas</h3>

        <div style={styles.imageGrid}>
          <div style={styles.imagePlaceholderSmall}>Imagen</div>
          <div style={styles.imagePlaceholderSmall}>Imagen</div>
          <div style={styles.imagePlaceholderSmall}>Imagen</div>
        </div>

        <ul>
          <li>Tribunal federal evalúa nuevas pruebas</li>
          <li>Reacciones políticas tras audiencia</li>
          <li>Organismos internacionales se pronuncian</li>
        </ul>
      </section>

    </main>
  );
}

const styles = {

  datetime: {
  fontSize: "14px",
  color: "#555",
  textAlign: "center",
  marginBottom: "20px"
},


  container: {
    backgroundColor: "#ffffff",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#000"
  },

  hero: {
    marginBottom: "60px"
  },

  header: {
    backgroundColor: "#c00000",
    color: "#ffffff",
    padding: "15px 20px",
    borderRadius: "4px",
    fontSize: "26px",
    marginBottom: "20px",
    textAlign: "center"
  },

  subHeader: {
    backgroundColor: "#c00000",
    color: "#ffffff",
    padding: "10px 15px",
    borderRadius: "4px",
    fontSize: "18px",
    marginTop: "30px",
    marginBottom: "15px",
    textAlign: "center"
  },

  text: {
    fontSize: "16px",
    marginBottom: "15px"
  },

  section: {
    marginTop: "20px"
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 30px",
    fontSize: "16px",
    backgroundColor: "#c00000",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    textAlign: "center"
  },

  category: {
    color: "#c00000",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center"
  },

  meta: {
    color: "#555",
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "center"
  },

  newsSection: {
    marginTop: "40px"
  },

  imagePlaceholder: {
    width: "100%",
    height: "300px",
    backgroundColor: "#e0e0e0",
    border: "2px dashed #c00000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#555",
    fontStyle: "italic",
    marginBottom: "20px"
  },

  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginBottom: "20px"
  },

  imagePlaceholderSmall: {
    height: "120px",
    backgroundColor: "#e0e0e0",
    border: "2px dashed #c00000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#555",
    fontStyle: "italic"
  }
};
