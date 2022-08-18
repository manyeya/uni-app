import { atom } from "recoil";

export const userState = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: {
      loggedIn: false,
    }, // default value (aka initial value)
  });