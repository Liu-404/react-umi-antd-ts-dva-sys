import styles from './index.less';

const ContentPanel = (props: any) => {
    return <div className={styles.contentPanel}>{props.children}</div>;
};

export default ContentPanel;
