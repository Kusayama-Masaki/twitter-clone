export const getApiBaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : `${process.env.BASE_URL}/api`;
