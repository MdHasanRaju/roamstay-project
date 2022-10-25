export const setLocalStorageAuth = ({ accessToken, user, loggedInType }) => {
  localStorage.setItem(
    "auth",
    JSON.stringify({
      accessToken: accessToken,
      user: user,
      loggedInType: loggedInType,
    })
  );
};
