import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PageContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    padding-bottom: 1px;
    box-shadow: 0 0 5px 0px lightgray;

    .tabs-container {
        max-width: 800px;
        margin: 25px auto;
    }

    .nav-link.active {
        color: ${colors.third};
    }

    .nav-link {
        color: inherit;
    }

    .tab-pane {
        margin-top: 30px;
    }
`;
