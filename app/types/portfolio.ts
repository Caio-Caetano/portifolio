import { Aboutme } from "./aboutme";
import { Bucketlist } from "./bucketlist";
import { Me } from "./me";

export interface PortfolioData {
    me: Me;
    bucketlist: Bucketlist;
    aboutme: Aboutme;
  }