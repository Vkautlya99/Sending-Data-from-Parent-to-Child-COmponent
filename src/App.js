import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';

const App = () => {
  let HC = "react js"
  const FC = "React.Js"

  return (
    <>
      <h1>Hello React </h1> 
      <Header HComponent={HC} />
      <Footer Fcomponent={ FC} />
    </>
  )
}

export default App

