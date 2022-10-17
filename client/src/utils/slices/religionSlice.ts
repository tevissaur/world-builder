import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Religion, God } from "../../interfaces/IReligion"

export interface ReligionState {
    activeReligion: Religion
    activeGod: God
}

const initialState: ReligionState = {
    activeReligion: {
        _id: '',
        gods: [],
        name: ''
    },
    activeGod: {
        _id: '',
        name: '',
        description: '',
        domains: [],
        alignment: '',
        symbol: ''
    }
}

export const religionSlice = createSlice({
    name: 'religion',
    initialState,
    reducers: {
        setActiveReligion: ((state, action: PayloadAction<Religion>) => {
            state.activeReligion = action.payload
        }),
        setActiveGod: ((state, action: PayloadAction<God>) => {
            state.activeGod = action.payload
        })
    }
})

export const { setActiveGod, setActiveReligion } = religionSlice.actions

export default religionSlice.reducer