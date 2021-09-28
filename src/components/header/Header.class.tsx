import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/logo.svg'
import { Layout, Typography, Input, Menu, Button, Dropdown, } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { RouteComponentProps, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { LanguageState } from "../../redux/languageReducer";
import { withTranslation, WithTranslation } from 'react-i18next'

interface State extends LanguageState { }
interface MenuInfo {
  key: string;
}

class HeaderComponent extends React.Component<RouteComponentProps & WithTranslation, State> {
  constructor(props: any) {
    super(props);
    const storeState = store.getState();
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList
    }
    store.subscribe(() => {
      const storeState = store.getState();
      this.setState({
        language: storeState.language,
        languageList: storeState.languageList
      })
    })
  }
  menuClickHandler = (e: MenuInfo) => {
    console.log(e);
    if (e.key === 'new') {
      store.dispatch({ type: 'add_language', payload: { name: '新语言', code: 'new_code' } })
    } else {
      const action = 'change_language';
      store.dispatch({ type: action, payload: e.key });
    }
  }
  render() {
    const { history, t } = this.props;
    return (
      <div className={styles['app-header']}>
        {/* 第一层导航, top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>{t('header.slogan')}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.state.languageList.map(l => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                  })}
                  <Menu.Item key='new'>{t('header.add_new_language')}</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.state.language === 'en' ? 'English' : '中文'}
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('register')}>{t('header.register')}</Button>
              <Button onClick={() => history.push('signIn')}>{t('header.signin')}</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles['main-header']}>
          <span onClick={() => history.push('/')}>
            <img src={logo} alt="" className={styles['App-logo']} />
            <Typography.Title level={3} className={styles['title']}>{t('header.title')}</Typography.Title>
          </span>
          <Input.Search placeholder={t('header.placeholder')} className={styles['search-input']} />
        </Layout.Header>
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
          <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
        </Menu>
      </div>

    )
  }
}
export const Header = withTranslation()(withRouter(HeaderComponent));