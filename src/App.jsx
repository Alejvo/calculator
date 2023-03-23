import { useReducer,  useState } from 'react'
import DigitButton from './DigitButton'
import OperatorButton from './OperatorButton'
import { Container, MenuIcon, MyButton, Operation, Output, Wrapper,MenuList } from './Styles'
import GlobalStyle from './GlobalStyles'
import { Themes } from './Providers/Themes'
import { ThemeProvider } from 'styled-components'
import time from './assets/time.svg'
import calc from './assets/calculator.svg'
import settings from './assets/settings.svg'
import menu from './assets/menu.svg'
import useTheme from './Providers/useTheme'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Settings from './routes/Settings'

/*const router = createBrowserRouter([
  {
    path:'/',
  },
  {
    path:'/settings',
    element:<Settings />
  }
])*/

export const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATOR:'add_operator',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete_digit',
  CALCULATE:'calculate',
  TOGGLE_SIGN:'toggle_sign'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === '.' && state.currentDigit.includes('.') ) return state
      if (payload.digit === '0' && state.currentDigit === '0')console.log('cero');
      return {
        ...state,
        currentDigit: `${state.currentDigit || " "}${payload.digit}`
      }
    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currentDigit == null && state.previusDigit == null) return state
      if(state.currentDigit == null){
        return state
      }
      if(state.PreviusDigit == null){
        return {
          ...state,
          previusDigit: state.currentDigit,
          operation: payload.operator,
          currentDigit: null
        }

      }
      return {
        ...state,
        previusDigit:calculator(state),
        currentDigit:null,
        operation:payload.operator

      }
    case ACTIONS.TOGGLE_SIGN:
      if(isNaN(state.currentDigit))return state
      return{
        ...state,
        currentDigit:`${-state.currentDigit}`
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.currentDigit == null) {
        return state
      }
      return{
        ...state,
        currentDigit: state.currentDigit.slice(0, -1)
      }

    case ACTIONS.CALCULATE:
      if(state.currentDigit == null || state.previusDigit==null)return state
      return{
        ...state,
        operation:null,
        previusDigit:null,
        currentDigit:calculator(state)
      }
  }
}

function calculator({currentDigit,previusDigit,operation}){
  console.log(`prev:${previusDigit} current:${currentDigit}`);
  const prev = parseFloat(previusDigit)
  const current = parseFloat(currentDigit)
  let result = ''
  console.log(`prev:${prev} current:${current}`);
  if(isNaN(prev) ||  isNaN(current))return ""

  switch(operation){
    case "+":

       result = prev + current
      break;
    case "-":
      result = prev - current
      break;
    case "*":
      result = prev * current
      break;
    case "/":
        result = prev / current 
  
  }
  //console.log(result);
  return result.toString()

}

function App() {
  const [{currentDigit,previusDigit,operation}, dispatch] = useReducer(reducer, {})
  const [active, setActive] = useState(false)
  const [theme,toggleTheme]=useTheme();

  return (
    <ThemeProvider theme={Themes[theme]}>

      <GlobalStyle />
        <Wrapper>
          <Output>
          <MenuIcon onClick={() => setActive(!active)}>
            <img src={menu} />
          </MenuIcon>
            <Operation>{previusDigit}{operation}</Operation>
            <Operation>{currentDigit}</Operation>
          </Output>
          <hr />
          <Container>
          <MyButton className='highlight' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</MyButton>
          <MyButton className='highlight'  onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>C</MyButton>
          <MyButton className='highlight'>()</MyButton>
            <OperatorButton operator="/" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
          <OperatorButton operator="*" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
          <OperatorButton operator="-" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
          <OperatorButton operator="+" dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch} />
            <MyButton onClick={()=>dispatch({type:ACTIONS.TOGGLE_SIGN})}>+/-</MyButton>
          <MyButton className='highlight' onClick={() => dispatch({ type: ACTIONS.CALCULATE })}>=</MyButton>
          </Container>
        <MenuList className={active ? null : 'hidden'}>
          <div>Calculadora</div>
          <div>
            <img src={calc}></img>
            <p>Estandar</p>
          </div>
          <div>Conversor</div>
          <div>
            <img src={time}></img>
            <p>Tiempo</p>
          </div>
          <div>
            <img src={settings}></img>
            <p>Configuracion</p>
            <p onClick={toggleTheme}>claro</p>
            <p>oscuro</p>
          </div>
        </MenuList>
        </Wrapper>
    </ThemeProvider>
  )
}



export default App
