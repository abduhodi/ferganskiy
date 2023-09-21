/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faUserSecret,
  faHouse,
  faStore,
  faCircleUser,
  faGear,
  faReceipt,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(
  faUserSecret,
  faHouse,
  faStore,
  faCircleUser,
  faWhatsapp,
  faGear,
  faReceipt,
  faLinkedin,
  faGithub,
  faTelegram,
  faAt
);
export default library;
