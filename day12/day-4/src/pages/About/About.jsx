import styles from './About.module.css'

function About() {
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Hello</h1>
      <h3>This is About</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex,
        nihil suscipit accusantium, numquam architecto iusto, distinctio
        voluptatibus tempore officiis culpa possimus nulla? Qui doloremque sunt
        inventore earum architecto officia!
      </p>
    </div>
  );
}

export default About;
