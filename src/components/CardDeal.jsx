import { card, me } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      About me
      </h2>
      <div
        className={`w-[100px] h-[100px] my-10 rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={me} alt="star" className="w-[100%] h-[100%] object-contain" />
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      I am a nonchalant type of person who loves to do his work joyfully.
        Ready to learn new technologies and use my creative thinking &
        brainstorming to solve the problems. 
        <br/><br/>
        I have done my education from Lovely Professional University in 
        B.Tech (CSE) and now I am doing myinternship in SimbaQuartz as 
        Software Engineer position.
      </p>

     
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
