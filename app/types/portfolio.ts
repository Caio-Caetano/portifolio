import { Aboutme } from "./aboutme";
import { Bucketlist } from "./bucketlist";
import { Me } from "./me";
import { TabsType } from "./tabs";
import { Project } from "./projects";
import { Career } from "./career";
import { Education } from "./education";
import { Experience } from "./experience";
import { Contact } from "./contact";

export interface PortfolioData {
  me: Me;
  tabs: TabsType[];
  bucketlist: Bucketlist;
  aboutme: Aboutme;
  projects: Project[];
  career: Career[];
  education: Education[];
  experience: Experience[];
  contact: Contact;
}