import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 100vw;
    height: 80px;
    margin-bottom: 20px;

    @media only screen and (max-width: 800px){
        width: 90%;
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;

        @media only screen and (max-width: 800px){
            margin-top: 10px;
        }

        .social{
            font-size: 30px;
            cursor: pointer;
        }

        span{
            font-size: 14px;
            font-weight: 600;
            color: ${props => props.theme.color};
            margin-right: 10px;
            margin-left: 10px;
            cursor: pointer;
            transition: 0.5s all;

            &:hover{
                transition: 0.5s all;
                color: ${props => props.theme.hoverColor};
            }
        }
    }
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 15px;

    span{
        text-align: center;
    }

    b{
        cursor: pointer;
        min-width: 100%;
        color: ${props => props.theme.color};

        &:hover{
            color: ${props => props.theme.hoverColor}
        }
    }

    a{
        cursor: pointer;
        min-width: 100%;
        font-weight: 600;
        text-decoration: none;
        color: ${props => props.theme.color};

        &:hover{
            color: ${props => props.theme.hoverColor}
        }
    }
`;