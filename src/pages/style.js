import styled from 'styled-components';

const size = '850px';

export const Button = styled.div`

    top: 25VH;
    left: 15VW;
    position: absolute;
    width: 70VW;
    height: 15VH;
    background-color: #63B1BC;
    border-radius: 100px;
    text-align: center;
    font-size: 10VW;
    line-height: 14VH;
    color: white;
    cursor: pointer;

    @media(min-width: ${size}){
        top: 60VH;
        left: 35VW;
        width: 30VW;
        font-size: 5VW;
    }
`
export const Welcome = styled.div`
    top: 10VH;
    position: absolute;
    width: 100VW;
    text-align: center;
    font-size:10VW;
    color: #1f2a44;
    z-index: 1;

    @media(min-width: ${size}){
        top: 30VH;
        position: absolute;
        width: 100VW;
        text-align: center;
        font-size:4VW;
        color: #1f2a44;
    }
`;

export const Greetings = styled.div`
    top: 17VH;
    position: absolute;
    width: 100VW;
    text-align: center;
    font-size: 6VW;
    color: #63666a;

    @media(min-width: ${size}){
        top: 40VH;
        position: absolute;
        width: 100VW;
        text-align: center;
        font-size: 3VW;
        color: #63666a;
    }
`;

export const Text = styled.div`
    position: absolute;
    top: 10VH;
    animation: 1s ease-in;
    font-size: 5VW;
    text-align: center;
`;