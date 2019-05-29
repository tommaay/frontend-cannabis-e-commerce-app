import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../styles/colors';

export const Nav = styled.nav`
    background: ${colors.main};
    height: 40px;

    .links-container {
        max-width: 1600px;
        height: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const Link = styled(NavLink)`
    color: white;
    margin-right: 30px;
    font-weight: 300;
    letter-spacing: 1px;
`;
