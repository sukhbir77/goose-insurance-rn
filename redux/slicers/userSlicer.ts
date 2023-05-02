import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit';

type User = {
    name: string;
    address: string;
    birthday: string;
};

interface UserState {
    user: User
}

const initialState: UserState = {
    user: {
        name: "",
        address: "",
        birthday: ""
    }
};

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        addUser: (state: UserState, action: PayloadAction<User>) => {
           state.user = action.payload
        }, 
        deleteUser: (state) => {
            state.user = {name: "", address: "", birthday: ""}
        }
    }
});

export const { addUser, deleteUser} = userSlice.actions;

export const selectUser = (state: RootState) => state.userData.user;

export default userSlice.reducer;