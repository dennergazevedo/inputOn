import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IMenuOpened {
    menuOpened: boolean;
}

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 80px;
    background-color: transparent;
    margin-bottom: 50px;
    z-index: 30;

    @media only screen and (max-width: 800px){
        width: 90%;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 80%;
    height: 80px;
    background-color: transparent;
    margin-top: 30px;

    @media only screen and (max-width: 800px){
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const Logo = styled.h1`
    color: ${props => props.theme.color};
    overflow: hidden;
    border-right: 2px solid ${props => props.theme.primary};
    white-space: nowrap; 
    margin: 0 auto;
    max-width: auto;
    cursor: pointer;

    animation: typing 1s steps(14, end), blink-caret .65s step-end infinite; 

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: ${props => props.theme.primary}; }
    }

    b{
        color: ${props => props.theme.primary};
    }
`;

export const Menu = styled.div<IMenuOpened>`
    display: flex;
    flex-direction: row;
    align-items: center;

    .iconSwitchOn{
        color: #333;
        margin-left: 5px;
        margin-top: 2px;
    }

    .iconSwitchOff{
        color: #FFF;
        margin-left: 5px;
        margin-top: 2px;
    }

    button{
        font-size: 14px;
        font-weight: 600;
        color: ${props => props.theme.color};
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        transition: 0.5s all;
        background-color: transparent;
        border: none;

        &:hover{
            transition: 0.5s all;
            color: ${props => props.theme.primary};
        }
    }

    .icon{
        font-size: 24px;
        color: ${props => props.theme.color};
        cursor: pointer;
        transform: ${props => props.menuOpened ? `rotate(90deg)` : 'rotate(0deg)'};

        &:hover{
            transition: 0.5s all;
            color: ${props => props.theme.primary};
        }
    }
`;

export const MenuBar = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${props => props.theme.backgroundLight};
    box-shadow: 1px 1px 10px ${props => props.theme.color}5;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    right: 20px;

    button{
        margin-top: 15px;
        transition: 0.5s all;

        &:hover{
            transition: 0.5s all;
            color: ${props => props.theme.primary};
        }
    }
`;