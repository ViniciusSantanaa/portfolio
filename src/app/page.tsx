import styles from "@/app/page.module.css"
import Image from "next/image"
import imagem_programador from "@/assets/imagem_programador.png"
import { Card_Skill } from "@/components/card_skills/card_skills"
import imagem_front from "@/assets/imagem_front_end.jpg"
import imagem_back from "@/assets/imagem_back_end.png"
import imagem_data from "@/assets/imagem_data_base.jpg"

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

      <section>
        <h1 className={styles.h1_Skills}>Skills</h1>
        <div className={styles.div_skills}>  
          <Card_Skill titulo={"Front End"} skills={"Html, CSS, Javascript, React, Next.js"} imagem={imagem_front} />
          <Card_Skill titulo={"Back end"} skills={"Python"} imagem={imagem_back} />
          <Card_Skill titulo={"Data-Base"} skills={"Oracle"} imagem={imagem_data} />
          <Card_Skill titulo={"Ferramentas"} skills={"Git"} imagem={imagem_front} />
        </div>
      </section>

    </main>
  )
}
