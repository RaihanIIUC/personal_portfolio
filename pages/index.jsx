import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Software</h1>
          <h1>Engineer</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Mohammed Raihan</h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Research
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Computer-Vision
                    </span>
                    <span key='LLMs' className='LLMs'>
                      LLMs
                    </span>
                    <span key='MIM' className='MIM'>
                      Masked-Image-Modeling
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Apache-Spark
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='MLOps' className='MLOps'>
                      MLOps
                    </span>
                    <span key='Data-Engineering' className='Data-Engineering'>
                     Data-Engineering
                    </span>
                    <span key='Bots' className='Bots'>
                      Bots
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me_image.jpg"
                width={300}
                height={300}
                alt="Mohammed Raihan"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
