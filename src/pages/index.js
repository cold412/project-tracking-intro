import React from 'react'
import {Button, MainCont} from '../components/bckg'
import { GlobalStyle } from '../components/reset.js'


const index = () => {
  return (
    <div>
      <GlobalStyle />
      <MainCont>
        <Button>Test</Button>
        <h1>Test</h1>
      </MainCont>
    </div>
  )
}

export default index