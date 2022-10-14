import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { World } from "../../interfaces/IWorld"

export interface WorldState {
    openWorld: World | undefined,
    worlds: Array<World>
}

const initialState: WorldState = {
    openWorld: undefined,
    worlds: [],
}

export const worldSlice = createSlice({
    name: 'world',
    initialState,
    reducers: {
        setOpenWorld: ((state, action: PayloadAction<World>) => {
            state.openWorld = action.payload
        }),
        updateWorlds: ((state, action: PayloadAction<World>) => {
            if (!state.worlds.includes(action.payload))
                state.worlds.push(action.payload)
            else
                state.worlds = state.worlds.filter((world) => {
                    if (world != action.payload) {
                        return world
                    }
                })
        })
    }
})


export const { setOpenWorld, updateWorlds } = worldSlice.actions

export default worldSlice.reducer
