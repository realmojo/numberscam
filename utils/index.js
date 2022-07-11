import { PHONE_START_NUMBER, LOCATION_START_NUMBER } from "../config";

export const convertIP = (value) => {
  const s = value.split(".");
  return `${s[0]}.x.x.${s[3]}`;
};

export const getTitle = (n) => {
  const length = n.length;
  let dashNumber = "";
  let d = n.split("");
  if (length === 8) {
    // 1544-3323
    d.splice(4, 0, "-");
    dashNumber = d.join("");
  } else if (
    length === 11 &&
    PHONE_START_NUMBER.includes(`${n[0]}${n[1]}${n[2]}`)
  ) {
    // 010-xxxx-xxxx
    d.splice(3, 0, "-");
    d.splice(8, 0, "-");
    dashNumber = d.join("");
  } else if (
    length === 12 &&
    PHONE_START_NUMBER.includes(`${n[0]}${n[1]}${n[2]}`)
  ) {
    // 0507-xxxx-xxxx
    d.splice(4, 0, "-");
    d.splice(9, 0, "-");
    dashNumber = d.join("");
  } else if (length === 9 && LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}`)) {
    // 02-xxx-xxxx
    d.splice(2, 0, "-");
    d.splice(6, 0, "-");
    dashNumber = d.join("");
  } else if (
    length === 10 &&
    LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}`)
  ) {
    // 02-xxxx-xxxx
    d.splice(2, 0, "-");
    d.splice(7, 0, "-");
    dashNumber = d.join("");
  } else if (
    length === 10 &&
    LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}${n[2]}`)
  ) {
    // 031-xxx-xxxx
    d.splice(3, 0, "-");
    d.splice(7, 0, "-");
    dashNumber = d.join("");
  } else if (
    length === 11 &&
    LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}${n[2]}`)
  ) {
    // 031-xxxx-xxxx
    d.splice(3, 0, "-");
    d.splice(8, 0, "-");
    dashNumber = d.join("");
  } else {
    dashNumber = n;
  }

  return `${n} / ${dashNumber}`;
};
