import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../interfaces/IUser"

export interface UserState {
    userData: User | undefined
}

const initialState: UserState = {
    userData: undefined
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