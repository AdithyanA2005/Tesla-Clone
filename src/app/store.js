import { configureStore } from '@reduxjs/toolkit'
import carReducer from "../features/car/carSlice"
import optionReducer from '../features/options/optionSlice';
import solarReducer from '../features/solar/solarSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    option: optionReducer,
    solar: solarReducer,
  },
});
