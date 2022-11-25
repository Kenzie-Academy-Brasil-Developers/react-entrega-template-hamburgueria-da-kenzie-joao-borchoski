import styled from "styled-components";

export const StyledMain = styled.div`
    width: 85vw;
    margin: 0 auto;

    //padding: 16px;

    display: flex;
    justify-content: space-between;

    margin-bottom: 16px;

    animation: easyIn 0.2s ease-in-out;

    @media (max-width: 1100px) {
        flex-wrap:wrap;

    }
`;

export const StyledUlMain = styled.ul`
    min-width: 300px;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    height: 600px;
    gap: 32px;
`;

export const StyledLiMain = styled.li`
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 400px;

    min-width: 300px;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    overflow: hidden;

    figure {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.15);
        height: 47%;
        align-items: flex-end;
    }

    div {
        padding: 24px 16px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        button {
            width: 40%;
            height: 30px;
            background: #27ae60;
            color: white;
            border-radius: 16px;
            font-size: 14px;
        }
        p {
            color: #27ae60;
            font-weight: 600;
        }
    }
`;

export const StyledCartMain = styled.div`
    width: 28%;
    border: 2px solid #27ae60;
    border-radius: 16px;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    height: 100%;
    max-width: 1000px;
`;

export const StyledCartHeader = styled.div`
    width: 100%;
    height: 80px;
    background: #27ae60;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledUlCart = styled.ul`
    background: rgba(0, 0, 0, 0.15);
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    gap: 16px;
    flex-wrap: wrap;
    overflow: auto;
    position: relative;

    @keyframes easyIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    h2 {
        position: absolute;
        top: 40%;
        animation: easyIn 0.5s ease-in-out;
    }
`;

export const StyledLiCart = styled.li`
    width: 100%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: white;

    flex-wrap: wrap;

    animation: easyIn 0.2s ease-in-out;

    @keyframes easyIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    figure {
        width: 80px;
    }
    img {
        width: 100%;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    button {
        background: rgba(0, 0, 0, 0.15);
        padding: 4px 8px;
        border-radius: 8px;
    }
`;

export const StyledTotalMoneyDiv = styled.div`
    background: rgba(0, 0, 0, 0.15);
    border-top: 2px solid rgba(0, 0, 0, 0.3);
    height: 150px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 32px;

    animation: easyIn 0.2s ease-in-out;

    @keyframes easyIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    div {
        display: flex;
        justify-content: space-between;
    }
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        height: 50px;
        border-radius: 16px;
        font-size: 16px;

        
    }
`;
