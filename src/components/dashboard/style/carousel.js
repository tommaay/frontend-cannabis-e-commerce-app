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
        display: flex;
        overflow-x: auto;
        margin-bottom: 30px;
        padding: 15px 0;

        &::-webkit-scrollbar {
            /* display: none; */
        }
    }
`;
