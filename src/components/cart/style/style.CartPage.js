import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const CartPageContainer = styled.div`
    font-weight: 500;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 30px;
        border-bottom: 2px solid lightgray;
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
        margin: 15px 0 25px;
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

        /* Restyle the default stripe button */
        .StripeCheckout {
            padding: 7px 10px !important;
            background: ${colors.third} !important;
            color: white !important;
            font-size: 16px !important;
            border: none !important;
            border-radius: 50px !important;
            letter-spacing: 2px !important;
            cursor: pointer !important;
            transition: 0.2s !important;

            &:hover {
                transform: translateY(-3px) !important;
                box-shadow: 0 0 10px -5px black !important;
            }

            &:active {
                transform: translateY(0) !important;
            }

            span {
                background-image: none !important;
                background: none !important;
                font-family: inherit !important;
                font-size: 18px !important;
                padding: inherit !important;
                display: block !important;
                height: 100% !important;
                line-height: inherit !important;
                color: white !important;
                font-weight: 500 !important;
                box-shadow: 0 0 0 0 !important;
                text-shadow: 0 0 0 0 !important;
                border-radius: 0 !important;
                border: none !important;
                text-decoration: none !important;
            }
        }
    }
`;
