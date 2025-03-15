import { useDispatch, useSelector, useStore } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes() //to send data to store 
export const useAppSelector = useSelector.withTypes() //to receive the data from the store 
export const useAppStore = useStore.withTypes()

