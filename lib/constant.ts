export const API_NICE_URL =
  process.env.NODE_ENV === "test"
    ? "http://localhost:8000"
    : "https://nice.superai42.com/api";

export const WEB_URL =
  process.env.NODE_ENV === "test"
    ? "http://localhost:7766"
    : "https://www.superai42.com";
