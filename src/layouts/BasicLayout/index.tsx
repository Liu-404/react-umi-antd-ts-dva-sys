import { Component } from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import Platform from '@/pages/home/Platform';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '@/layouts/component/Header';
import Breadcrumb from '@/layouts/component/Breadcrumb';
import Sider from '@/layouts/component/Sider';
import Device from '@/pages/equipment/Device';
import Gateway from '@/pages/equipment/Gateway';
import { connect, RouteType, CommonModelState } from 'umi';

const { Content } = Layout;

class BasicLayout extends Component {
    constructor(props: any) {
        super(props);
    }

    saveRoutes = () => {
        const { dispatch, route }: any = this.props;
        dispatch({ type: 'common/saveRoutes', payload: { routes: route } });
    };

    render() {
        this.saveRoutes();
        return (
            <Layout className={styles.layout}>
                <Header />
                <Layout>
                    <Sider />
                    <Layout className={styles.content}>
                        <Breadcrumb />
                        <Content>
                            <Switch>
                                <Route path="/home" component={Platform} />
                                <Route path="/device" component={Device} />
                                <Route path="/gateway" component={Gateway} />
                                <Redirect from="/" to="/home" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default connect()(BasicLayout);
