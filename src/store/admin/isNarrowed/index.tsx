import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isNarrowed: false,
};

const narrowed = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.isNarrowed = !state.isNarrowed
        }
    }
})
export const narrowedAction = narrowed.actions
export default narrowed