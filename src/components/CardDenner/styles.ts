import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 35vw;
    min-width: 300px;
    background-color: #3332;
    border-radius: 20px;
    margin-top: 80px;
    cursor: pointer;
    height: 150px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 15px;

        .name{
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 24px;

            @media only screen and (max-width: 800px){
                font-size: 14px;
            }
        }

        span{
            text-align: center;
            font-size: 14px;
            color: ${props => props.theme.color};

            @media only screen and (max-width: 800px){
                font-size: 10px;
            }
        }

    }
`;

export const Photo = styled.img`
    height: 150px;
    width: auto;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;