import React from "react";
import Styles from "./Footer.module.scss";
import { faFacebook, faVk, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.icons}>
                <a href="https://vk.com/id227453202" target="_blank">
                    <FontAwesomeIcon
                        className={Styles.icon}
                        icon={faVk}
                        size="2x"
                    />
                </a>
                <a href="https://github.com/PickleDan" target="_blank">
                    <FontAwesomeIcon
                        className={Styles.icon}
                        icon={faGithub}
                        size="2x"
                    />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon
                        className={Styles.icon}
                        icon={faFacebook}
                        size="2x"
                    />
                </a>
            </div>
            <p className={Styles.copyright}>Copyright &copy; 2020</p>
        </footer>
    );
};
