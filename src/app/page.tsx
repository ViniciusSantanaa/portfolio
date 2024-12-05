import styles from "@/app/page.module.css"
import Image from "next/image"
import imagem_programador from "@/assets/imagem_programador.png"
import { Card_Skill } from "@/components/card_skills/card_skills"
import imagem_front from "@/assets/imagem_front_end.jpg"
import imagem_back from "@/assets/imagem_back_end.png"
import imagem_data from "@/assets/imagem_data_base.jpg"
import imagem_tools from "@/assets/imagem_chave_de_boca.png"
import { Card_Projetos } from "@/components/card_projetos/card_projetos"

export default function Home() {
  return (
    <>
    <main>
      <section className={styles.container}>
        <div className={styles.container__apresentacao}>
          <h1 className={styles.apresentacao__nome}>Vinícius De Souza Sant Anna</h1>
          <p className={styles.apresentacao__texto}>Sou um desenvolvedor apaixonado por explorar o mundo da programação, sempre buscando aprender e aprimorar minhas habilidades.</p>
        </div>
        <Image src={imagem_programador} alt={"imagem ilustrativa"} className={styles.imagem_programador}/>
      </section>

      <section id="skills">
        <h1 className={styles.h1_titulo}>Skills</h1>
        <div className={styles.div_skills}>  
          <Card_Skill titulo={"Front End"} skills={"Html, CSS, Javascript, React, Next.js"} imagem={imagem_front} />
          <Card_Skill titulo={"Back end"} skills={"Python"} imagem={imagem_back} />
          <Card_Skill titulo={"Data-Base"} skills={"Oracle"} imagem={imagem_data} />
          <Card_Skill titulo={"Ferramentas"} skills={"Git"} imagem={imagem_tools} />
        </div>
      </section>

      <section className={styles.section_projetos} id="projetos">
        <h1 className={styles.h1_titulo}>Projetos</h1>
        <div className={styles.div_projetos}>
          <Card_Projetos titulo_projeto={"Eleve seu negócio"} descricao_projeto={"Projeto feito com o auxílio da Alura. Nele comecei meus conhecimentos em Front-End, com apenas um texto e imagem fictícia, e dois botões com meu instagram e github."} tecnologias={["HTML", "CSS"]} />
          <Card_Projetos titulo_projeto={"Tesla"} descricao_projeto={"Projeto focado em aprimorar meus conhecimentos em HTML e CSS. Sendo um clone do site da Tesla, sem funcionalidades."} tecnologias={["HTML", "CSS"]} />
          <Card_Projetos titulo_projeto={"Alura Plus"} descricao_projeto={"Projeto novamente feito com o auxílio da Alura, onde fazemos o 'marketing' de um produto fictício. Nele descubro novas funções em HTML e CSS."} tecnologias={["HTML", "CSS"]} />
          <Card_Projetos titulo_projeto={"Guardian"} descricao_projeto={"Projeto feito para trabalho de faculdade, onde criamos um site feito para uma empresa de automóveis fictícia."} tecnologias={["Next.JS", "CSS", "Typescript"]} />
          <Card_Projetos titulo_projeto={"Gaia"} descricao_projeto={"Projeto feito para a faculdade, onde divulgamos um produto, que consiste em uma rede de financiamento coletivo para projetos de energia renovável em locais de baixa renda."} tecnologias={["Next.JS", "CSS", "Typescript"]} />
          <Card_Projetos titulo_projeto={"Temperatura"} descricao_projeto={"Projeto pessoal. Dando início aos meus estudos por conta própria. Converte a temperatura passada pelo usuário em Celsius, para Kelvin e Fahrenheit."} tecnologias={["Python"]} />
          <Card_Projetos titulo_projeto={"Jogo da Adivinhação"} descricao_projeto={"Projeto pessoal, feito para treinar meus conhecimentos em Back-End. O sistema consiste em um jogo onde deve-se acertar um número inteiro, sorteado entre 0 e 50."} tecnologias={["Python", "Biblioteca Python"]} />
          <Card_Projetos titulo_projeto={"Senha Forte"} descricao_projeto={"Projeto pessoal. Sistema para criar senhas fortes, com os requisitos, de 8 caracteres, uma letra maiúscula, letra minuscula e um número."} tecnologias={["Python", "Biblioteca Python"]} />
          <Card_Projetos titulo_projeto={"Cadastro"} descricao_projeto={"Projeto pessoal, feito para cadastrar usuários. O sistema só aceita nomes de login diferentes e uma senha a escolha do usuário, após isso os dados ficam salvos em um banco."} tecnologias={["Python", "Oracle"]} />
        </div>
      </section>

    </main>

    <footer className={styles.footer}>
      <div className={styles.div_footer}>
        <p className={styles.footer_direitos}>&copy; 2024 Vinícius De Souza. Todos os direitos reservados</p>
      </div>
    </footer>
    </>
  )
}
