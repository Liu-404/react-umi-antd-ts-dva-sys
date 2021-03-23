import { Layout, Menu } from 'antd';
import { connect, CommonModelState, RouteType } from 'umi';
import styles from './index.less';
import { useHistory } from 'umi';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default connect(({ common }: { common: CommonModelState }) => ({
    routes: common.routes,
}))(function (props: any) {
    const history = useHistory();

    const { routes } = props.routes;
    const defaultPath = ['/home'];

    const handleClickMenuItem = (e: any) => {
        const { key } = e;
        history.push(`${key}`);
    };

    return (
        <Sider width={200}>
            <Menu
                defaultSelectedKeys={defaultPath}
                mode="inline"
                className={styles.menu}
                onClick={handleClickMenuItem}
            >
                {routes.map((item: RouteType) => {
                    if (item.routes) {
                        return (
                            <SubMenu key={item.path} title={item.name}>
                                {item.routes.map((childItem) => (
                                    <Menu.Item key={childItem.path}>
                                        {childItem.name}
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        );
                    } else {
                        return (
                            <Menu.Item key={item.path}>{item.name}</Menu.Item>
                        );
                    }
                })}
            </Menu>
        </Sider>
    );
});
