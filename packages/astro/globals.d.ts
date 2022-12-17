// declare module '*.svg' {
//   const content: string;
//   export default content;
// }

declare interface Plant {
  name: string;
  slug: string;
  imageUrl: string;
  alternateNames: string[];
  botanicalName: string;
  classification: string;
  variant: boolean;
  difficulty: string;
  lightBar: number;
  waterBar: number;
  toxicity: boolean;
  temperatures: number[];
  zones: number[];
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

declare interface SearchObject {
  slug: string;
  name: string;
}

declare type SearchCollection = SearchObject[];

declare interface Filters {
  [key: string]: Object | string;
  classification: {
    [key: string]: boolean;
    palm: boolean;
    succulent: boolean;
    cactus: boolean;
    calathea: boolean;
    tree: boolean;
    orchid: boolean;
  };
  difficulty: string;
  light: {
    [key: string]: boolean;
    low: boolean;
    indirect: boolean;
    direct: boolean;
  };
  water: {
    [key: string]: boolean;
    dry: boolean;
    balanced: boolean;
    wet: boolean;
  };
  toxic: {
    [key: string]: boolean;
    petFriendly: boolean;
  };
}

declare interface Article {
  category: string;
  intro: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  sections: ArticleSection[];
}

declare interface ArticleSection {
  header: string;
  imageUrl: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  body: string;
}
