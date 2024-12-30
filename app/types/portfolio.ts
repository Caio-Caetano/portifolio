import { Aboutme } from "./aboutme";
import { Bucketlist } from "./bucketlist";
import { Me } from "./me";
import { TabsType } from "./tabs";
import { Project } from "./projects";

export interface PortfolioData {
  me: Me;
  tabs: TabsType[];
  bucketlist: Bucketlist;
  aboutme: Aboutme;
  projects: Project[];
}