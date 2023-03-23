import React from 'react'
import { ACTIONS } from './App'
import { MyButton } from './Styles'

const DigitButton = ({ dispatch, digit }) => {
    return (
        <MyButton  onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
            {digit}
        </MyButton>
    )
}

export default DigitButton