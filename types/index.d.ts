interface StyleObject {
  [key: string]: string | number | boolean;
}

interface PageNavigationItem {
  id: string;
  text?: string;
  icon?: any; // ReactElement
}

interface TrendItem {
  name: string;
  count: number;
}

interface User {
  id: string;
  name: string;
  image: string;
  isFollowed: boolean;
}
