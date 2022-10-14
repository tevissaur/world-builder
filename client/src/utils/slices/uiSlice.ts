import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { sideDrawerLinks, SideDrawerLink } from "../../interfaces/SideBarLink"

export interface UiState {
    drawerOpen: boolean,
    modalOpen: boolean,
    sideDrawerLinks: Array<SideDrawerLink>
}

const initialState: UiState = {
    drawerOpen: true,
    modalOpen: false,
    sideDrawerLinks
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleDrawer: ((state) => {
            state.drawerOpen = !state.drawerOpen
        }),
        toggleModal: ((state) => {
            state.modalOpen = !state.modalOpen
        })
    }
})


export const { toggleDrawer, toggleModal } = uiSlice.actions

export default uiSlice.reducer