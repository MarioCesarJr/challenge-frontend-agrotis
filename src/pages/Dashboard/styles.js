import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1300px;
    height: 500px;
    background: #fff;
    /* padding: 30px; */
    margin: 20px auto;

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
            }
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
    }
`;

export const List = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;

    span {
        color: #666;
    }

    strong {
        margin-left: 5px;
    }

    .space {
        width: 230px;
    }
`;
