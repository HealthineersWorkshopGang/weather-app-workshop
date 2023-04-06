import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WeatherDataType } from '../../types'
import { RootState } from '../../app/store'


const initialState: WeatherDataType = {
    name: "No city set",
    hummidity: 0,
    icon: "",
    pressure: 0,
    temperature: 0,
    wind: 0
}

export const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        setWeatherData: (state, action: PayloadAction<WeatherDataType>) => {
            state.name = action.payload.name;
            state.icon = action.payload.icon;
            state.hummidity = action.payload.hummidity;
            state.pressure = action.payload.pressure;
            state.wind = action.payload.wind;
            state.temperature = action.payload.temperature;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setWeatherData } = weatherDataSlice.actions
export const isWeatherDataFetched = (state: RootState) => state.weatherData.name !== initialState.name;


export default weatherDataSlice.reducer