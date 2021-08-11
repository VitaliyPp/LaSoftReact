import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../assets/imagesData/images'

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
