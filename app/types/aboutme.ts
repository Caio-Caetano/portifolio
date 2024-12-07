type Experience = {
    title: string;
    time: string;
    icon: string;
}

export interface Aboutme {
    p1: string;
    p2: string;
    experience: Experience[];
    action: {
        title: string;
        ref: string;
    };
  }