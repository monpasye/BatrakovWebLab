import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './logo.tsx'
import TopNavigation from './topnavigation.tsx'
import Element from './element.tsx'
import TopText from './toptext.tsx'
import Illustration from './illustration.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '70px'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '2%', marginLeft: '10%', marginRight: '10%' }}>
  <div style={{ flex: 'none' }}><Logo /></div>
  <div style={{ flex: 'none', marginTop: '0.7%' }}><TopNavigation /></div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%' }}>
  <div style={{ position: 'absolute', left: '-50px' }}>
    <Element />
  </div>
  <div style={{ flex: 'none', marginTop: '8%' }}><TopText /></div>
  <div style={{ flex: 'none' }}>
    <Illustration width="693px" height="598px" imageUrl= "src/assets/images/illustration.svg" />
  </div>
</div>

</div>
  </React.StrictMode>,
)