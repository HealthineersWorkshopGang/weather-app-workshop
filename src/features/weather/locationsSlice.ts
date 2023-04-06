import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Location, WeatherDataType } from '../../types'
import { RootState } from '../../app/store'

interface LocationState {
    city: string;
    locations: Location[];
    topThree: Location[];
}


const initialState: LocationState = {
    city: "",
    locations: [],
    topThree: []
}

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<LocationState["city"]>) => {
            state.city = action.payload;
        },
        setLocations: (state, action: PayloadAction<LocationState["locations"]>) => {
            state.locations = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCity, setLocations } = locationsSlice.actions
export const topThreeLocationsSelector = (state: RootState) => state.locations.topThree;

export default locationsSlice.reducer