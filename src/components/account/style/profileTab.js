import styled from 'styled-components';
import { colors, text } from '../../../styles/colors';

export const ProfileContainer = styled.div`
    padding: 0 20px;

    .form-label,
    .form-control {
        margin-bottom: 5px;
        font-size: 16px;
    }

    .form-control {
        color: ${text.medium};
    }

    .btn-link {
        font-size: 16px;
        color: ${colors.second};
        text-align: right;
    }

    .btn {
        margin-bottom: 10px;
    }
`;
