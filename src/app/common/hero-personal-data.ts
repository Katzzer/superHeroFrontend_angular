export interface HeroPersonalData {
  id: string;
  name: string;
  biography: {
    'full-name': string;
    'place-of-birth': string;
    alignment: string;
  };
  appearance: {
    gender: string;
    weight: string[];
  } | undefined;
  connections: {
    'group-affiliation': string;
  };
}
