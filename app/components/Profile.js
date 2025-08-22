import styles from "@/app/page.module.css";

export function Profile() {
  return (
    <div className={styles.profileCard}>
      <img
        src="/images/foto_de_perfil.jpg"
        alt="foto de perfil"
        width={128}
        height={128}
        className={styles.profilePhoto}
      />
      <h2>Helleson Allan</h2>
      <p>
        Sou um entusiasta da programação apaixonado por resolver problemas e
        criar soluções inovadoras. Minha jornada começou no ensino médio, onde
        fiz um curso técnico em programação. Desde então, tenho explorado
        linguagens como HTML, CSS, JavaScript, Kotlin e TypeScript sempre em
        busca de desafios que me permitam aprender e crescer como profissional.
        Estou ansioso para aplicar minhas habilidades em um ambiente
        profissional e contribuir para o sucesso da equipe.
      </p>
    </div>
  );
}
