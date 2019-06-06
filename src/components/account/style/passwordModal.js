import styled from 'styled-components';
import { colors, text } from '../../../styles/colors';

export const ModalContainer = styled.div`
    padding: 10px;

    .form-label,
    .form-control,
    .pw-label {
        margin-bottom: 5px;
        font-size: 16px;
    }

    .form-control {
        color: ${text.medium};
    }

    .btn {
        font-size: 16px;
        border: none;
    }

    .btn-primary {
        background: ${colors.third};
    }
`;
