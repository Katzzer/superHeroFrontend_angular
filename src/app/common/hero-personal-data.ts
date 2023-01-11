export interface HeroPersonalData {
  id: string;
  name: string;
  biography: {
    fullName: string;
    placeOfBirth: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    weight: string[];
  } | undefined;
  connections: {
    groupAffiliation: string;
  };
}
