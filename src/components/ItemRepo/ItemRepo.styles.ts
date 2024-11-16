import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 100%;

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`;

export const RepoContainer = styled.div`
    display: flex;
    width: 100%;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
    }
    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        &.remover {
            color: #ff0000;
            margin-top: 20px;
        }
    }
`;
