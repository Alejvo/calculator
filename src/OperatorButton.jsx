import React from 'react'
import { ACTIONS } from './App'
import { MyButton } from './Styles'

const OperatorButton = ({ dispatch, operator }) => {
    return (
        <MyButton className='highlight' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })}>
            {operator}
        </MyButton>
    )
}

export default OperatorButton