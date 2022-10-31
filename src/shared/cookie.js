import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 3);
  // const expireDate = new Date(new Date().getTime() + 60 * 1000* 60 *24);
  return cookies.set("user_token", accessToken, {
    samSite: "none",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  // const expireDate = new Date(new Date().getTime() + 60 * 1000* 60* 24);
  const expireDate = today.setDate(today.getDate() + 3);
  return cookies.set("fresh_Token", refreshToken, {
    sameSite: "none",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies?.get("user_token");
};

export const getRefreshToken = () => {
  return cookies?.get("fresh_Token");
};

export const removeCookieToken = () => {
  return cookies?.remove("user_token", { sameSite: "none", path: "/" });
};

export const removeRefreshCookieToken = () => {
  return cookies?.remove("fresh_Token", { sameSite: "none", path: "/" });
};
