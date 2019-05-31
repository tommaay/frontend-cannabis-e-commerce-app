import React from 'react';
import { connect } from 'react-redux';
import { CategoryBar, Link } from './style/nav';

const CategoryNav = props => {
    return (
        <CategoryBar>
            <div className="links-container">
                <Link to="/products/edibles">Edibles</Link>
                <Link to="/products/ready-to-roll">Ready to Roll</Link>
                <Link to="/products/smalls">Smalls</Link>
                <Link to="/products/generic-flower">Generic Flower</Link>
                <Link to="/products/sungrown-flower">Sungrown Flower</Link>
                <Link to="/products/greenhouse-flower">Greenhouse Flower</Link>
                <Link to="/products/indoor-top-shelf">Indoor Top Shelf</Link>
                <Link to="/products/prerolls">Prerolls</Link>
                <Link to="/products/cartridges">Cartridges</Link>
                <Link to="/products/pax-pods">Pax Pods</Link>
                <Link to="/products/concentrates">Concentrates</Link>
                <Link to="/products/wellness">Wellness</Link>
                <Link to="/products/accessories">Accessories</Link>
                <Link to="/products/shatter">Shatter</Link>
            </div>
        </CategoryBar>
    );
};

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(CategoryNav);
