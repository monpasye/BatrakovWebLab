import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './logo.tsx'
import TopNavigation from './topnavigation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{float: 'left', marginTop: '60px', marginLeft: "200px"}}><Logo /></div>
    <div style={{float: 'right', marginRight: '200px', marginTop: '60px'}}><TopNavigation /></div>
  </React.StrictMode>,
)