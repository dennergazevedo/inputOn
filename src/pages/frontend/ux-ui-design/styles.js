import styled from 'styled-components';

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
            font-size: 12px;
            margin-right: 5px;
            color: ${props => props.theme.color};
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
    }
`;