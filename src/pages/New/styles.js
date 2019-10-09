import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 1300px;
    height: 500px;
    background: #fff;
    margin: 20px auto;

    header {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #145e43;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-decoration: none;
        }

        span {
            color: #fff;
            font-size: 16px;
        }

        form {
            display: flex;
            align-items: center;
            justify-content: center;

            a {
                font-size: 13px;
                color: #fff;
                text-decoration: none;
                margin-right: 30px;
            }

            button {
                font-size: 15px;
                color: #fff;
                border: 0;
                border-radius: 4px;
                font-size: 12px;
                transition: background 0.2s;
                width: 90px;
                height: 35px;
                background-color: #1a6b4d;
                cursor: pointer;
                &:hover {
                    background: ${darken(0.05, '#1a6b4d')};
                }
            }
        }
    }

    .form form {
        display: flex;
        width: 100%;
        flex-direction: row;
        margin: 20px;

        div {
            display: flex;
            margin: 10px;

            label {
                display: block;
                flex: 1;
                position: relative;

                span {
                    position: absolute;
                    top: 1em;
                    left: 0;
                    font-size: 1.2em;
                    opacity: 0.7;
                    transition: all 150ms ease-in;
                }
            }

            label.on span {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 0.9em;
            }
        }

        label input {
            width: 100%;
            border: none;
            border-bottom: 1px solid #ddd;
            outline: none;
            font-size: 1.2em;
            margin-top: 1em;
        }
    }

    .form form div:nth-child(1) {
        width: 30%;
    }

    .form form div:nth-child(2) {
        width: 64%;
    }
`;
