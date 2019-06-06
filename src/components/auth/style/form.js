import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const FormContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid ${colors.third};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 lightgray;
    background-color: white;

    form {
        .form-label {
            margin-bottom: 5px;
        }

        .form-control {
            margin-bottom: 10px;
            font-size: 16px;
        }
    }
`;

export const ProductFormContainer = styled(FormContainer)`
    max-width: 600px;
`;
