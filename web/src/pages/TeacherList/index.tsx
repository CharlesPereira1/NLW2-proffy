import React from "react";
import { Link } from "react-router-dom";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import PageHeader from "../../components/PageHeader";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Matéria</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
            Preço/hora
            <strong>R$ 59,90</strong>
          </footer>
          <button type="button">
            <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
          </button>
        </article>
      </main>
    </div>
  );
}
