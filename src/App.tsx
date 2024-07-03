import React from 'react'
import './App.css'
import List from './pages/manage/List'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import router from './router/index'

function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>
}

export default App
