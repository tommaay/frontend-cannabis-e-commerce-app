import React from 'react';
import { connect } from 'react-redux';
import { CategoryBar, Link } from './style/nav';

const CategoryNav = props => {
    const getNodeList = e => {
        console.log(e.target);
    };

    return (
        <CategoryBar>
            <div className="links-container">
                <Link
                    to="/products/category/edibles"
                    onClick={e => getNodeList(e)}
                >
                    Edibles
                </Link>
                <Link to="/products/category/ready-to-roll">Ready to Roll</Link>
                <Link to="/products/category/smalls">Smalls</Link>
                <Link to="/products/category/generic-flower">
                    Generic Flower
                </Link>
                <Link to="/products/category/sungrown-flower">
                    Sungrown Flower
                </Link>
                <Link to="/products/category/greenhouse-flower">
                    Greenhouse Flower
                </Link>
                <Link to="/products/category/indoor-top-shelf">
                    Indoor Top Shelf
                </Link>
                <Link to="/products/category/prerolls">Prerolls</Link>
                <Link to="/products/category/cartridges">Cartridges</Link>
                <Link to="/products/category/pax-pods">Pax Pods</Link>
                <Link to="/products/category/concentrates">Concentrates</Link>
                <Link to="/products/category/wellness">Wellness</Link>
                <Link to="/products/category/accessories">Accessories</Link>
                <Link to="/products/category/shatter">Shatter</Link>
            </div>
        </CategoryBar>
    );
};

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(CategoryNav);
