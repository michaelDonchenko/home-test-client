import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  createModal: false,
  editModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCreateModal: (state) => {
      state.createModal = true
    },
    closeCreateModal: (state) => {
      state.createModal = false
    },
    openEditModal: (state) => {
      state.editModal = true
    },
    closeEditModal: (state) => {
      state.editModal = false
    },
  },
})

export const {
  openCreateModal,
  closeCreateModal,
  openEditModal,
  closeEditModal,
} = modalSlice.actions

export default modalSlice.reducer
