import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/54192694?s=460&u=a0ac6a9b16621a72fd3bfd6bba0c0081c2259d5b&v=4"
          alt="Charles Pereira"
        />
        <div>
          <strong>Charles Pereira</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de Matemática Avançada.
        <br />
        <br />
        Apaixonado pelos melhores calculos, para mudar as vidas da pessoas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 59,90</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
