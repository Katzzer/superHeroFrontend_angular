export class HeroPersonalData {
  id: string = "";
  name: string = "";
  biography: {
    'full-name': string;
    'place-of-birth': string;
    alignment: string;
  } | undefined;
  appearance: {
    gender: string;
    weight: string[];
  } | undefined;
  connections: {
    'group-affiliation': string;
  } | undefined;
}
