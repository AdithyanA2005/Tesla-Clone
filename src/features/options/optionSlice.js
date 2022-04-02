import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    options: ["Shop", "Account"]
}

const optionSlice = createSlice({
    name: "option",
    initialState,
    reducers: {}
})

export const selectOptions = state => state.option.options
export default optionSlice.reducer