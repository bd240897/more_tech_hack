import React from 'react';
//style
import styles from './Footer.module.sass';

interface IFooterProps {
    children?: React.ReactNode;
    className?: string
}

function Footer({className}: IFooterProps) {

    return (
        <>
            <div className={className}>
                <div className={styles.footer__block}>
                    © 2023 Borisov Dmitrii
                </div>
            </div>
        </>
    );
}

export default Footer;
