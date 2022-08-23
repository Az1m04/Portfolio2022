import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="works" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
   <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
         My works
    </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Live projects that i have worked on with azmazing peoples in my organization.
      </p>

     
    </div>
 

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
