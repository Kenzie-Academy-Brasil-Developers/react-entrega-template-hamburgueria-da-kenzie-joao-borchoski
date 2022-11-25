import styled from "styled-components";

export const StyledHeader = styled.div`
    background: rgba(0, 0, 0, 0.15);
    height: 80px;

    @media (max-width: 1100px) {
        flex-direction: column;
        height: 100px;
        padding: 16px;
        width: 100%;
    }
`;

export const StyledDivHeader = styled.div`
    width: 85vw;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1100px) {
        width: 100%;
        flex-direction: column;
    }

    div {
        width: 450px;
        height: 60%;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        border-radius: 12px;

        @media (max-width: 1100px) {
            width: 100%;
            padding: 0;
        }

        input {
            font-weight: 500;
            border: none;
            font-size: 14px;

            @media (max-width: 1100px) {
                padding-left: 12px;
            }
        }
        button {
            font-weight: 500;
            font-size: 14px;
            background: #27ae60;
            border-radius: 12px;
            width: 107px;
            height: 30px;
            color: white;
        }
    }
`;
