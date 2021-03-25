import styles from './index.less';

const ContentPanel = (props: any) => {
    return (
        <div
            className={styles.contentPanel}
            style={props.contentPanelStyle ? props.contentPanelStyle : null}
        >
            {props.children}
        </div>
    );
};

export default ContentPanel;
