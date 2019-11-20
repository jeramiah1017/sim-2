import axios from 'axios'


const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    img: "",
    mortgage: 0,
    rent: 0
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";
export const CLEAR = "CLEAR";

export default function reducer(state = initialState, action) {
console.log(action.payload)
    switch (action.type) {
    case STEP_ONE: 
    return {...state, ...action.payload}
    case STEP_TWO: 
    return {...state, img: action.payload}
    case STEP_THREE:
    return  {...state, ...action.payload}
    default:
        return state


    }
}

export function stepOne(name, address, city, state, zipcode) {
    return {
        type: STEP_ONE, 
        payload: {
            name,
            address,
            city,
            state,
            zipcode
        }
    }
}
export function stepTwo(img) {
    console.log({img})
    return {
    type: STEP_TWO,
    payload:img
    
    }
}
export function stepThree(mortgage, rent){
    return {
        type: STEP_THREE,
        payload: {
            mortgage,
            rent
        }
    }
}

export function clear() {
    return {
type: CLEAR,
payload: initialState
    }
}
export function createHouse() {
    axios.post('/api/houses', {
    name: this.state.name,
    address: this.state.address,
    city: this.state.city,
    state: this.state.state,
    zipcode: this.state.zipcode,
    img: this.state.img,
    mortgage: this.state.mortgage,
    rent: this.state.rent
       }).then(res => {
           console.log(res)
       })
    }