import styled from '@emotion/styled';

const Button = styled.button`
    width: 42px;
    height: 42px;
    background: #991A39;
    border: none;
    color: #fff;
    font-size: 20px;
    transition: transform .4s;
    cursor: pointer;

    &:hover:{
        transform: scale(1.5);
        margin-top: 1rem;
    }
`;

export default Button;