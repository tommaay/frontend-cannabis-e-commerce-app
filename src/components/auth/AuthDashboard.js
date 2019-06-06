import React, { Component } from 'react';

// Components
import Login from './Login';
import UserForm from './UserForm';

// React Bootstrap
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Style
import { PageContainer } from '../account/style/accountPage';

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
                <h3>Sign In / Sign Up</h3>

                <div className="tabs-container">
                    <Tabs>
                        <Tab
                            eventKey="login"
                            title="Login"
                            onClick={this.tabHandler}
                        >
                            <Login />
                        </Tab>

                        <Tab
                            eventKey="register"
                            title="Sign Up"
                            onClick={this.tabHandler}
                        >
                            <UserForm />
                        </Tab>
                    </Tabs>
                </div>
            </PageContainer>
        );
    }
}

export default AccountPage;
