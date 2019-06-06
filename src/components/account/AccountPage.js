import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrdersHistoryPage from '../orders/OrdersHistoryPage';
import UserProfile from './UserProfile';

// React Bootstrap
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Style
import { PageContainer } from './style/accountPage';

class AccountPage extends Component {
    state = {
        activeTab: 'profile',
    };

    tabHandler = e => {
        this.setState({
            activeTab: e.target.eventKey,
        });
    };

    render() {
        const { user } = this.props;

        return (
            <PageContainer>
                <h3>My Account</h3>

                <div className="tabs-container">
                    <Tabs>
                        <Tab
                            eventKey="profile"
                            title="Profile"
                            onClick={this.tabHandler}
                        >
                            <UserProfile />
                        </Tab>

                        <Tab
                            eventKey="orders"
                            title="Orders"
                            onClick={this.tabHandler}
                        >
                            <OrdersHistoryPage />
                        </Tab>

                        {user.is_admin ? (
                            <Tab
                                eventKey="admin"
                                title="Admin"
                                onClick={this.tabHandler}
                            >
                                <h1>Admin</h1>
                            </Tab>
                        ) : (
                            <span />
                        )}
                    </Tabs>
                </div>
            </PageContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps)(AccountPage);
