import styles from "@/app/page.module.css"
import Image from "next/image"
import imagem_programador from "@/assets/imagem_programador.png"
import { Card_Skill } from "@/components/card_skills/card_skills"
import imagem from "@/assets/imagem_freepik.avif"

export default function Home() {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.container__apresentacao}>
          <h1 className={styles.apresentacao__nome}>Vinícius De Souza Sant Anna</h1>
          <p className={styles.apresentacao__texto}>Sou um desenvolvedor apaixonado por explorar o mundo da programação, sempre buscando aprender e aprimorar minhas habilidades</p>
        </div>
        <Image src={imagem_programador} alt={"imagem ilustrativa"} className={styles.imagem_programador}/>
      </section>

        <h1 className={styles.h1_Skills}>Skills</h1>
      <section className={styles.container_skills}>
        <Card_Skill titulo={"Front End"} skills={"Html, CSS, Javascript, React, Next"} imagem={imagem} />
        <Card_Skill titulo={"Front End"} skills={"Html, CSS, Javascript, React, Next"} imagem={imagem} />
        <Card_Skill titulo={"Front End"} skills={"Html, CSS, Javascript, React, Next"} imagem={imagem} />
        <Card_Skill titulo={"Front End"} skills={"Html, CSS, Javascript, React, Next"} imagem={imagem} />
      </section>

    </main>
  )
}
