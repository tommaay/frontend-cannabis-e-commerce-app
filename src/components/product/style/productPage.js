import styled from 'styled-components';
import { colors, text } from '../../../styles/colors';

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;

    .left {
        width: 40%;
        text-align: center;

        img {
            width: 80%;
            box-shadow: 0 0 10px -4px gray;
        }
    }

    .right {
        max-width: 500px;
        margin-left: 10px;

        h1 {
            font-size: 48px;
            margin-bottom: 25px;
        }

        .info-bar {
            display: flex;
            align-items: center;
            margin-bottom: 25px;

            button,
            p {
                margin-right: 35px;
            }

            button {
                padding: 7px 20px;
                background: ${colors.third};
                border-radius: 40px;
                border: 0;
                color: white;
                font-size: 16px;
                letter-spacing: 1px;
            }

            span {
                border-radius: 100%;
                padding: 0 10px;
                margin-right: 10px;

                &.purple {
                    background: purple;
                }

                &.orange {
                    background: orange;
                }
            }
        }

        .add-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;
            margin-bottom: 40px;
            padding: 15px 30px;
            border: 1px solid ${colors.third};
            border-radius: 40px;

            .price {
                display: flex;

                p {
                    margin-right: 20px;
                }
            }

            .add-to-cart {
                display: flex;
                justify-content: center;

                h6 {
                    margin: 0 15px;
                }

                i {
                    cursor: pointer;
                }

                .fa-minus-circle {
                    color: ${text.light};
                }

                .fa-plus-circle {
                    color: ${colors.main};
                }
            }
        }

        .desc-title {
            margin-bottom: 20px;
            font-weight: 600;
        }

        .desc-content {
            letter-spacing: 1.1px;
            line-height: 1.5;
        }
    }
`;
