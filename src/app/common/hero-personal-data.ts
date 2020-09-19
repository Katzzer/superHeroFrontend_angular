export class HeroPersonalData {
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
  };
  connections: {
    'group-affiliation': string;
  };
}
