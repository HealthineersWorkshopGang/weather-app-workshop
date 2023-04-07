import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { GeoData, Location } from '../../types';

interface LocationState {
    city: string;
    locations: Location[];
    topThree: Location[];
    geoData: GeoData
}


const initialState: LocationState = {
    city: "",
    locations: [],
    topThree: [],
    geoData: {} as GeoData
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
        },
        setGeoData: (state, action: PayloadAction<LocationState["geoData"]>) => {
            state.geoData = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCity, setLocations, setGeoData } = locationsSlice.actions
export const topThreeLocationsSelector = (state: RootState) => state.locations.topThree;

export default locationsSlice.reducer