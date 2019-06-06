import styled from 'styled-components';
import { gray } from 'ansi-colors';

export const OrderContainer = styled.div`
    padding: 20px;

    .modal-title {
        font-size: 26px;
    }

    table {
        border-bottom: 1px solid gray;
        margin-bottom: 20px;

        thead {
            background: gray;
            color: white;
            border: none;
        }

        tbody {
            margin-top: 5px;

            tr {
                padding: 5px 0;
                margin-bottom: 5px;
            }
        }
    }

    .sub {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

    .total {
        margin: 15px 0 0;
        border-top: 2px solid lightgray;
        border-bottom: 2px solid lightgray;
        padding: 15px 0;
        text-align: right;
        font-weight: 700;
        letter-spacing: 1.5px;
    }
`;
