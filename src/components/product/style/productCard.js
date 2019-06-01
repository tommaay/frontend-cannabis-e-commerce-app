import styled from 'styled-components';
import { colors, text } from '../../../styles/colors';
import { Link } from 'react-router-dom';

export const Card = styled.div`
    width: 250px;
    height: 460px;
    box-shadow: 0px 0px 10px -2px gray;
    margin: 5px 18px;
    text-align: center;

    .image {
        background: rgb(236, 233, 228);
        text-align: center;
        width: 250px;

        img {
            width: 250px;
        }
    }

    .card-details {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: calc(460px - 253px);

        h6 {
            font-weight: 500;
        }

        .product {
            margin: 15px 0 10px;
            padding: 0 5px;
            font-weight: 600;
            word-wrap: break-word;
        }

        .spec-container {
            width: 100%;
            padding: 15px;
            display: flex;
            justify-content: center;
            align-items: center;

            h6 {
                margin: 5px 10px;
            }
        }

        .add-to-cart {
            display: flex;
            justify-content: center;
            margin-top: -8px;

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
`;

export const ImgLink = styled(Link)`
    text-decoration: none;
`;
