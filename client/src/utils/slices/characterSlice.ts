import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Character } from "../../interfaces/ICharacter"


export interface CharacterState {
    activeCharacter: Character
}

const initialState: CharacterState = {
    activeCharacter: {
        name: '',
        description: '',
        size: '',
        race: {
            name: '',
            description: ''
        },
        class: {
            name: '',
            description: ''
        },
        backstory: '',
        bonds: [],
        goals: [],
        fears: [],
        isNPC: false
    }
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setActiveCharacter: ((state, action: PayloadAction<Character>) => {
            state.activeCharacter = action.payload
        })
    }
})

export const { setActiveCharacter } = characterSlice.actions

export default characterSlice.reducer

