import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'



const makeStore = () => (
    configureStore({
        reducer: {
        },
        devTools: true
    })
)

export const wrapper = createWrapper(makeStore)
