const initialState = {
  user: null,
  // cart: [],
  // amount: 0,
  // purchase_history: [],
  password: "",
  // firstName: "",
  // lastName: "",
  email: "",
  phone_number: ""
};

export const SET_USER = "SET_USER";
// export const GET_ENTIRE_CART = "GET_ENTIRE_CART";
// export const ADD_TO_CART = "ADD_TO_CART";
// export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// export const GET_PURCHASE_HISTORY = "GET_PURCHASE_HISTORY";
export const PASSWORD = "PASSWORD";
// export const FIRSTNAME = "FIRSTNAME";
// export const LASTNAME = "LASTNAME";
export const EMAIL = "EMAIL";
export const PHONE_NUMBER = "PHONE_NUMBER";

export default function reducer(state = initialState, action) {
  // let {type, payload} = action

  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    // case GET_ENTIRE_CART:
    //   return { ...state, cart: action.payload };
    // case ADD_TO_CART:
    //   return { ...state, cart: action.payload, amount: action.payload };
    // case REMOVE_FROM_CART:
    //   return { ...state, cart: action.payload, amount: action.payload };
    // case GET_PURCHASE_HISTORY:
    //   return { ...state, purchase_history: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    // case FIRSTNAME:
    //   return { ...state, firstName: action.payload };
    // case LASTNAME:
    //   return { ...state, lastName: action.payload };
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
// export function getEntireCart(arr) {
//   return {
//     type: GET_ENTIRE_CART,
//     payload: arr
//   };
// }
// export function addToCart(arr) {
//   return {
//     type: ADD_TO_CART,
//     payload: arr
//   };
// }
// export function removeFromCart(arr) {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: arr
//   };
// }
// export function getPurchaseHistory(arr) {
//   return {
//     type: GET_PURCHASE_HISTORY,
//     payload: arr
//   };
// }
export function enterPassword(password) {
  return {
    type: PASSWORD,
    payload: password
  };
}
// export function enterFirstName(firstName) {
//   return {
//     type: FIRSTNAME,
//     payload: firstName
//   };
// }
// export function enterLastName(lastName) {
//   return {
//     type: LASTNAME,
//     payload: lastName
//   };
// }
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
