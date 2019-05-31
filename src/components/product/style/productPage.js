import styled from 'styled-components';

export const ProductPageContainer = styled.div`
    .title {
        font-weight: 600;
        margin-bottom: 15px;
    }

    .description {
        margin-bottom: 20px;
    }

    .products-container {
        display: flex;
        flex-wrap: wrap;

        .product-card {
            margin: 15px;
        }
    }
`;
