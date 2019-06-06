import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const OrderHistoryContainer = styled.div`
    padding: 20px;

    .modal-title {
        font-size: 26px;
    }

    .table {
        thead {
            background: ${colors.third};
            color: white;
            font-size: 20px;
        }

        .order-row:hover {
            background-color: ${colors.second};
            color: white;
            cursor: pointer;
        }
    }
`;
