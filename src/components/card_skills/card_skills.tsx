import styles from "@/components/card_skills/card_skills.module.css"
import Image, { StaticImageData } from "next/image"

interface Card_Skills{
    titulo: string,
    skills: string,
    imagem: StaticImageData,
}

export const Card_Skill: React.FC<Card_Skills> = ({ titulo, skills, imagem }) =>{
    return(
        <div className={styles.div_skills}>
            <Image src={imagem} alt={"Imagem"} className={styles.image_card}/>
            <h1 className={styles.titulo_card}>{titulo}</h1>
            <p className={styles.skills_card}>{skills}</p>
        </div>
    )
}