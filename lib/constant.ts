export const API_NICE_URL =
  process.env.NODE_ENV === "test"
    ? "http://localhost:8000"
    : "https://notion-nice.com/api/";
