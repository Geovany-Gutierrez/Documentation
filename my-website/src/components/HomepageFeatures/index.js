import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const CardList = [
  {
    title: "Em construção",
    description: (
      <div>
        <p>
          Tecnologias atualmente em uso ou em processo de implementação,
          incluindo:
        </p>
        <ul>
          <li>
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS3"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=white"
              alt="JavaScript"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"
              alt="React"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
              alt="Git"
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "A ser adicionado",
    description: (
      <div>
        <p>Tecnologias planejadas para futura implementação, incluindo:</p>
        <ul>
          <li>
            <img
              src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
              alt="Angular"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
              alt="Vue.js"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
              alt="Redux"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="PostgreSQL"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
              alt="PHP"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Versionamento",
    description: (
      <div>
        <p>Controle de versão do código-fonte, incluindo:</p>
        <ul>
          <li>
            <img
              src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
            />
          </li>
        </ul>
      </div>
    ),
  },
];

function Card({ title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CustomCards() {
  return (
    <section className={styles.customCards}>
      <div className="container">
        <div className="row" style={{ display: "grid" }}>
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
