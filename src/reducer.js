const initialState = {
  user: null,
  profileInfo: {
    id: "",
    purchase_history: []
  },
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  phone_number: ""
};

export const SET_USER = "SET_USER";
export const GET_PROFILE_INFO = "GET_PROFILE_INFO";
export const PASSWORD = "PASSWORD";
export const FIRSTNAME = "FIRSTNAME";
export const LASTNAME = "LASTNAME";
export const EMAIL = "EMAIL";
export const PHONE_NUMBER = "PHONE_NUMBER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case GET_PROFILE_INFO:
      return { ...state, profileInfo: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    case FIRSTNAME:
      return { ...state, firstName: action.payload };
    case LASTNAME:
      return { ...state, lastName: action.payload };
    case EMAIL:
      return { ...state, email: action.payload };
    case PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
export function getProfileInfo(profile) {
  return {
    type: GET_PROFILE_INFO,
    payload: profile
  };
}
export function enterPassword(password) {
  return {
    type: PASSWORD,
    payload: password
  };
}
export function enterFirstName(firstName) {
  return {
    type: FIRSTNAME,
    payload: firstName
  };
}
export function enterLastName(lastName) {
  return {
    type: LASTNAME,
    payload: lastName
  };
}
export function enterEmail(email) {
  return {
    type: EMAIL,
    payload: email
  };
}
export function enterPhoneNumber(phone_number) {
  return {
    type: PHONE_NUMBER,
    payload: phone_number
  };
}
