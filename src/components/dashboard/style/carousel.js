import styled from 'styled-components';

export const CarouselContainer = styled.div`
    .justify {
        display: flex;
        align-items: center;

        h2 {
            margin-right: 20px;
        }
    }

    .category-name {
        margin-bottom: 10px;
        font-weight: 700;
    }

    .category-desc {
        margin-bottom: 25px;
    }

    .carousel {
        display: flex;
        overflow-x: auto;
        margin-bottom: 30px;
        padding: 15px 0;
    }
`;
