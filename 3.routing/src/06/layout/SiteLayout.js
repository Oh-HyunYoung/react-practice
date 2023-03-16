import React from 'react';
import Header from './Header.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import styles from '../assets/scss/layout/Content.scss';

const SiteLayout = ({children}) => {
    return (
        <Fragment>
            <Header/>
            <div className={styles.Content}>
                <h2>{children}</h2>
            </div>
            <Navigation/>
            <Footer/>
    </Fragment>
    );
};

export default SiteLayout;