import styled from 'styled-components';
import { colors, text } from '../../../styles/colors';
import { Button } from '../../../styles/buttons';

export const CartPageContainer = styled.div`
    font-weight: 500;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 30px;
        border-bottom: 2px solid lightgray;

        ${Button} {
            padding: 8px 10px;
            background: crimson;
            color: white;
            font-size: 14px;
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

        .fas {
            cursor: pointer;
        }
    }
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    .total-box {
        width: 35%;
    }

    .row {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

    .total {
        margin-top: 15px;
        border-top: 2px solid lightgray;
        border-bottom: 2px solid lightgray;
        padding: 15px 0;
        text-align: right;
        font-weight: 700;
        letter-spacing: 1.5px;
    }

    .row-right {
        text-align: right;
        padding: 15px 0;
    }
`;
