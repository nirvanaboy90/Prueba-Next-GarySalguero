export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>
        Práctica Frontend con Next.js
      </h1>

      <p style={styles.text}>
        Hola, soy Gary. Tengo un perfil orientado a análisis y soporte,
        y esta es una página simple desarrollada en Next.js como
        prueba técnica para una posición de practicante.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Tecnologías</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </section>

      <button style={styles.button}>
        Contactar
      </button>
    </main>
  )
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "700px",
    margin: "0 auto"
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "10px"
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6"
  },
  section: {
    marginTop: "30px"
  },
  button: {
    marginTop: "30px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  }
}
