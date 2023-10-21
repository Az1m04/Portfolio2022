import Marquee from "react-fast-marquee";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <Marquee pauseOnHover gradient gradientColor="rgb(0,4,15)">
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 cursor-pointer`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] max-width: 200px;
              max-height: 90px;
              width: auto;
              height: auto; object-contain grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

export default Clients;
