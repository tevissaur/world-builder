import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../interfaces/IUser"

export interface UserState {
    userData: Object;
}

const initialState: UserState = {
    userData: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: ((state, action: PayloadAction<User>) => {
            state.userData = action.payload
        })
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer