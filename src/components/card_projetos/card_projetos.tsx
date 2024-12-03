import styles from "@/components/card_projetos/card_projetos.module.css"

interface Card_Projeto{
    titulo_projeto: string,
    descricao_projeto: string,
    tecnologias: string[];
}

export const Card_Projetos: React.FC<Card_Projeto> = ({ titulo_projeto, descricao_projeto, tecnologias }) =>{
    return(
        <div className={styles.div_card_projetos}>
            <h1 className={styles.h1_projetos}>{titulo_projeto}</h1>
            <p className={styles.descricao_projetos}>{descricao_projeto}</p>
            <ul className={styles.ul_tecnologia}>
                {tecnologias.map((tecnologia, index) => (
                <li key={index} className={styles.tecnologia_projetos}>{tecnologia}</li>
                ))}
            </ul>
        </div>
    )
}