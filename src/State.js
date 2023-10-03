import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async (pageNumber)=>{
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=12`)
        const formattedResponse = await response.json()
        return formattedResponse
    }
)

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState:{
        photos: [],
        isLoading: false,
    },
    extraReducers: builder => {
        builder.addCase(getPhotos.pending , (state) => {
            state.isLoading = true
        })
        builder.addCase(getPhotos.fulfilled , (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getPhotos.rejected , (state) => {
            state.isLoading = true
        })
        
    }
})


export default gallerySlice.reducer