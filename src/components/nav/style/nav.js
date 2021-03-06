import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../styles/colors';

export const Nav = styled.nav`
    background: ${colors.main};
    height: 40px;

    .links-container {
        margin: 0 auto;
        max-width: 1200px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .cart {
            position: relative;
        }
    }
`;

export const Link = styled(NavLink)`
    color: white;
    margin-right: 30px;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 18px;
`;

export const CategoryBar = styled.div`
    background: ${colors.third};
    padding: 10px 25px;
    margin-bottom: 25px;

    .links-container {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1200px;

        ${Link} {
            margin: 5px 15px;
            font-size: 16px;
        }
    }

    .active {
        color: navy;
        font-size: 22px;
        font-weight: 500;
    }
`;

export const Badge = styled.p`
    padding: 3px 6px;
    background: deepskyblue;
    color: white;
    border-radius: 100%;
    font-size: 12px;
    position: absolute;
    top: -5px;
    right: 16px;
`;
