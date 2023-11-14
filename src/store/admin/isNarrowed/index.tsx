import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isNarrowed: false,
  isClicked: false,
  isMobile: false,
};

const narrowed = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.isNarrowed = !state.isNarrowed
        },
        onNarrowed(state) {
            state.isNarrowed = false
        },
        offNarrowed(state) {
            state.isNarrowed = true
        },
        click(state) {
            state.isClicked = !state.isClicked
        },
        mobileToggle(state) {
            state.isMobile = !state.isMobile
        }

    }
})
export const narrowedAction = narrowed.actions
export default narrowed