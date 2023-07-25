import React from 'react'
import AppHeader from './components/AppHeader'
import Meme from './components/Meme'
import AppFooter from './components/AppFooter'

const App = () => {
  return (
    <div className='appWrapper'>
      <AppHeader />
      <Meme />
      <AppFooter />
    </div>
  )
}

export default App