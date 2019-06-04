import styled from 'styled-components';
import { colors, text } from '../../../styles/colors';

export const CartPageContainer = styled.div`
    font-weight: 500;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 30px;
        border-bottom: 2px solid lightgray;

        button {
            height: 35px;
            padding: 2px 15px;
            background: ${colors.second};
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            letter-spacing: 2px;
            cursor: pointer;
        }
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 30px;
        border-bottom: 2px solid lightgray;

        .item-desc {
            width: 40%;
            display: flex;
            align-items: center;

            img {
                width: 80px;
                height: auto;
                margin-right: 20px;
            }

            .item-spec {
                h5 {
                    margin-bottom: 6px;
                }

                p {
                    font-weight: 400;
                    font-size: 16px;
                }
            }
        }

        .price {
            display: flex;
            align-items: center;

            h6 {
                margin-right: 20px;
            }
        }
    }
`;
