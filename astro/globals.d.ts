declare module '*.svg' {
  const content: string;
  export default content;
}

declare interface Plant {
  name: string;
  slug: string;
  alternate_names: string[];
  botanical_name: string;
  class_peek: string;
  difficulty_peek: number;
  light_peek: number;
  water_peek: number;
  toxic_peek: boolean;
  temp_peek: number[];
  zone_peek: number[];
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  summary: string;
  light: string;
  water: string;
  fertilizing: string;
  humidity: string;
  pests: string;
  propagation: string;
  pruning: string;
  repotting: string;
  // irrelevant
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
