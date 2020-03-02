import styled from 'styled-components';

const size = '850px';

export const FigureLeft = styled.div`
    position: absolute;
    top: ${props => props.start ? '0VH' : '22VH'};
    height: 20VH;
    left: 0VW;
    width: 50VW;
    background-color: #ED145B;
    border-radius: 0 100px 100px 0;
    z-index: -9;
    transition: top 1s;

    @media(min-width: ${size}){
        top: calc(90VH - 250px);
        width: 350px;
        height: 250px;
        border-radius: 0 100VW 100VW 0;
    }
`;

export const FigureRight = styled.div`
    position: absolute;
    top: ${props => props.start ? '80VH' : '7VH'};
    height: 20VH;
    right: 0VW;
    width: 45VW;
    background-color: #ED145B;
    border-radius: 100px 0 0 100px;
    z-index: -9;
    transition: top 1s;

    @media(min-width: ${size}){
        top: 10VH;
        width: 300px;
        height: 250px;
        border-radius: 100VW 0 0 100VW;
    }
`;

export const Name = styled.div`
    position: absolute;
    top: 3VH;
    left: 3VW;
    color: #1F2A44;
    font-size: 10VW;
    width: 25VW;
    height: 30VH;
    opacity: ${props => props.start ? '0' : '1'};
    transition: opacity 0.5s;

    @media(min-width: ${size}){
        font-size: 3VW;
    }
`
  
export const Title = styled.div`
    width: 100VW;
    text-align: center;
    position: absolute;
    color: #1F2A44;
    top: ${props => props.start ? '7VH' : '30VH'};
    font-size: 12VW;
    transition: top 1s;

    @media(min-width: ${size}){
        font-size: 6VW;
        top: ${props => props.start ? '3VH' : "9VH"}; 
    }
`
  
export const Button = styled.div`

    top: 70VH;
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
    top: 50VH;
    position: absolute;
    width: 100VW;
    text-align: center;
    font-size:10VW;
    color: #1f2a44;

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
    top: 57VH;
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

export const Box = styled.div`
    position: absolute;
    top: ${props => props.start ? '20VH' : '40VH'};
    width: 100VW;
    height: 60VH;
    background-color: white;
    z-index: -10;
    transition: top 1s;
`;
