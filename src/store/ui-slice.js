import { createSlice } from "@reduxjs/toolkit"


const initialUiState ={
    hamburgerIsToggled : false,
    lightBoxIsToggled : false
} 

const uiSlice = createSlice({
    name: "ui",
    initialState : initialUiState,
    reducers: {
        hamburgerHandler(state){
            state.hamburgerIsToggled = !state.hamburgerIsToggled
            console.log(state.hamburgerIsToggled);
        },
        lightBoxHandler(state){
            state.lightBoxIsToggled = !state.lightBoxIsToggled
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;