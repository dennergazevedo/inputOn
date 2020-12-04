import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 100vw;
    min-height: 100vh;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background}
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 50px;
`;


export const Title = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;

    @media only screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }

    .titleRight{
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 50px;

        @media only screen and (max-width: 800px){
            margin-left: 0px;
            width: 80vw;
        }
    }
`;

export const TitleText = styled.span`
    max-width: 350px;
    font-size: 50px;
    font-weight: 600;
    color: ${props => props.theme.color};
`;

export const Imagem = styled.img`
    width: 40vw;
    min-width: 300px;
`;

export const CreatedBy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color};
    margin-top: 80px;

    @media only screen and (max-width: 800px){
        margin-top: 30px;
    }
    
    b{
        cursor: pointer;

        &:hover{
            color: ${props => props.theme.primary};
        }
    }
`;

const float = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-30px);
    }
    100% {
        transform: translatey(0px);
    }
`;

export const Logo = styled.div`
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5px;
`;

export const Cards = styled.div`
    display: flex;
    width: 40vw;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5px;
    justify-content: space-between;
    align-items: center;
`;

export const Logomarca = styled.img`
    width: 200px;
    height: auto;
    transition: 0.5s all;
    transform: translatey(0px);
    animation: 2s ${float} ease-in-out infinite;
`;

export const Repo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 300px;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.background};
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span{
            font-weight: 600;
        }
        
        .font{
            font-size: 10px;
            margin-bottom: 10px;
            font-weight: 400 !important;
        }
    }


    .icon{
        font-size: 50px;
        color: ${props => props.theme.primary};
        margin-right: 20px;
    }
`;

export const BodyLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    
    span{
        color: ${props => props.theme.color};
        font-size: 12px;
    }

    .title{
        font-size: 50px;
        font-weight: 600;
        color: ${props => props.theme.primary};

        b{
            color: ${props => props.theme.color};
        }
    }
`;

export const Code = styled.div`
    display: flex;
    flex-direction: column !important;
    align-items: flex-start !important;
    text-align: start !important;
    background-color: ${props => props.theme.color};
    padding: 20px;
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;

    span{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-align: start !important;
        align-items: center;
        color: ${props => props.theme.background} !important;
        i{
            font-size: 12px;
            margin-right: 20px;
            color: ${props => props.theme.primary};
        }
    }

    .return{
        margin-top: 10px;
        color: ${props => props.theme.background}8;
    }

    .subpasta{
        margin-top: 10px;
        margin-left: 20px;
        color: ${props => props.theme.background}8;

        i{
            font-size: 12px;
            margin-right: 10px;
            color: ${props => props.theme.primary};
        }
    }

    .error{
        color: #E54;
    }
`;

export const Date = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 10px;
    margin-top: 10px;
    color: ${props => props.theme.color};

    .icon{
        font-size: 12px;
        margin-right: 5px;
        color: ${props => props.theme.primary};
    }
`;

export const MenuIcon = styled.div`
    display: flex;
    border-radius: 30px;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${props => props.theme.color};
    margin-top: 20px;
    cursor: default;

    &:hover{
        background-color: ${props => props.theme.primary};
    }
    
    span{
        font-size: 10px;
        font-weight: 600;
        color: ${props => props.theme.background};
        transition: 0.5s all;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60vw;
    margin-top: 50px;

    @media only screen and (max-width: 800px){
        width: 80vw;
    }

    p{
        margin-top: 20px;
        color: ${props => props.theme.color};
        text-align: justify;
        line-height: 26px;
        text-decoration: none;

        .time{
            font-size: 10px;
            font-weight: 600;
        }

        .icon{
            font-size: 20px;
            margin-right: 5px;
            color: ${props => props.theme.primary};
        }

        span{
            a{
                color: ${props => props.theme.color};
                font-weight: 600;
            }
        }

        i{
            font-size: 12px;
        }
    }
    
    img{
        width: 90%;
        margin: 10px;
        align-self: center;
        min-width: 300px;
    }

    .small{
        width: 30%;
        margin: 10px;
        align-self: center;
        min-width: 300px;
    }

    .medium{
        width: 50%;
        margin: 10px;
        align-self: center;
        min-width: 300px;
    }


    h3{
        margin-top: 20px;
        color: ${props => props.theme.color};

        .icon{
            color: ${props => props.theme.primary};
            font-size: 20px;
            margin-left: 10px;
        }
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${props => props.theme.color};
        margin-bottom: 30px;

        .icon{
            font-size: 24px;
            margin-right: 10px;
            color: #fcba03;
        }

        .iconLink{
            font-size: 50px;
            margin: 20px;
            margin-left: 30px;
            margin-right: 30px;
            color: #fcba03;
            cursor: pointer;
        }
    }

    span{
        text-align: justify;
        line-height: 26px;
        color: ${props => props.theme.color};
    }
`;