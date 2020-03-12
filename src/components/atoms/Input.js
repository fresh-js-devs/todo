import styled from '@emotion/styled';

const Input = styled.input`
    width: 320px;
    min-height: 41px;
    color: #fff;
    background: #2E3532;
    border: none;
    outline: none;
    font-size: 20px;
    text-indent: 20px;
    line-height: 2;
    transition: width .4s;
    &:focus:{
        width: 350px;
        background: #fff;
    }
`;

export default Input;