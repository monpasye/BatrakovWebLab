import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './logo.tsx'
import TopNavigation from './topnavigation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{float: 'left', marginLeft: '200px', marginTop: '50px'}}><Logo /></div>
    <TopNavigation/>
  </React.StrictMode>,
)