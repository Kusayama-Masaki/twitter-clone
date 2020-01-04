interface StyleObject {
  [key: string]: string | number | boolean;
}

interface PageNavigationItem {
  id: string;
  path: string;
  text?: string;
  icon?: any; // ReactElement
}

interface User {
  id: string;
  name: string;
  image: string;
  isFollowed: boolean;
}
