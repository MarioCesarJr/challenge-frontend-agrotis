import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 1300px;
    height: 500px;
    background: #fff;
    margin: 20px auto;

    .loading {
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }

    header {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #145e43;

        span {
            color: #fff;
            font-size: 16px;
        }

        form {
            position: relative;
            width: 380px;

            input {
                background: #fff;
                border: 0;
                border-radius: 2px;
                height: 35px;
                padding: 15px 10px 15px 35px;
                width: 100%;
            }

            button {
                position: absolute;
                top: 0;
                right: 345px;
                z-index: 10;
                border: none;
                background: transparent;
                outline: none;
                padding: 5px 5px;
                cursor: pointer;
            }
        }
    }

    .load {
        text-align: center;
        margin: 30px;
        display: flex;
        flex-direction: column;

        button {
            border: 0;
            background-color: #fff;
            text-decoration: underline;
            color: #145e43;
            cursor: pointer;
        }

        span {
            margin-top: 5px;
        }
    }

    .fixed {
        background: #b45f06;
        height: 50px;
        width: 50px;
        position: fixed;
        bottom: 60px;
        right: 45px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background 0.2s;
        &:hover {
            background: ${darken(0.05, '#b45f06')};
        }
    }
`;

export const List = styled.li`
    display: flex;

    padding: 15px;
    margin: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;

    .name {
        width: 30%;
    }

    .description {
        width: 70%;
    }

    span {
        color: #666;
    }

    strong {
        margin-left: 5px;
    }
`;

export const Scroll = styled.div`
    overflow-y: ${props => (props.show ? 'scroll' : '')};
    margin-top: 15px;
    max-height: 350px;
`;
