import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 330px;
height: 500px;
background-color:  ${({theme}) => theme.main};
margin:30px auto;
position: relative;
z-index: 20;
overflow: hidden;


@media (max-width:600px) {
    margin: 0;
    width: 100vw;
    height: 100vh;
}
`
export const Output = styled.div`
height: 190px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content:center;
align-items:flex-end;
position: relative;
color:${({ theme }) => theme.text};

@media (max-width:600px){
    height: 40vh;
}
`
export const Operation = styled.div`

font-size: 30px;
`

export const Container = styled.div`
display: grid;
grid-template-rows: repeat(5,1fr);
grid-template-columns: repeat(4,1fr);
padding: 15px;
gap: 10px;

@media (max-width:600px){
    height: 60vh;
}
`
export const MenuIcon = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color:white;
    font-size: 5px;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    z-index: 30;
    img{
        width: 30px;
        height: 30px;
    }
&:active{
    background-color:  ${({ theme }) => theme.primaryActive};
    }
`
export const MenuList = styled.div`
    height: 100%;
    width: 270px;
    background-color: ${({theme})=>theme.main};
    opacity: .98;
    backdrop-filter: blur(20px);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 60px;
    padding-left: 5px;
    flex-direction: column;
    transition: all .8s ease;
    div{
        color: ${({ theme }) => theme.text};
        width: 100%;
        height: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    &.hidden{
       transform: translateX(-270px);
    };
`


export const MyButton = styled.button`
height: 50px;
outline: none;
border: none;
border-radius: 5px;
font-size: 20px;
background-color: ${({ theme }) => theme.primary} ;
color: ${({ theme }) => theme.text};
position: relative;
text-align: center;


&:active{
    background-color:  ${({ theme }) => theme.primaryActive};
    transition: all .9;
}

&.highlight{
    background-color:  ${({ theme }) => theme.secondary};
    &.highlight:active{
            background-color:  ${({ theme }) => theme.secondaryActive};
    }
}

@media (max-width:600px){
    height: 90px;
}
`
