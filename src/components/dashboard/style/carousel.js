import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const CarouselContainer = styled.div`
    .category-name {
        margin-bottom: 10px;
        font-weight: 700;
    }

    .category-desc {
        margin-bottom: 25px;
    }

    .carousel {
        /* display: flex;
        justify-content: space-evenly;
        overflow-x: none;
        white-space: nowrap; */
        overflow-y: hidden;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        align-items: center;
        margin-bottom: 30px;
        padding: 15px 0;
    }
`;
