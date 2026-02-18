import { Fragment } from "react";
import cn from "classnames";
import Link from "next/link";
import navData from "@data/nav";
import PropTypes from "prop-types";
import Logo from "@components/ui/logo";
import OffCanvas from "@components/ui/offCanvas";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { IoCallOutline, IoMailOutline, IoTimeOutline, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoPinterest } from "react-icons/io5";
import { MobileNav, MobileNavContact, MobileSocial } from "@components/layout/navbar/mobile-nav.style";
import { getClosest, getSiblings, slideToggle, slideUp } from "@utils/method";
import { OffCanvasCloseBtn, OffCanvasHead, OffCanvasContent } from "@components/ui/offCanvas/style";

const MobileNavbar = ({ isOpen, onHandler }) => {
    const onNavHandler = (e) => {
        const target = e.target;
        const hasSubmenus = getSiblings(target);
        hasSubmenus.length > 0 && e.preventDefault();
        target.classList.toggle('menu-expand');
        const parent = getClosest(target, "LI");
        const childNodes = parent.childNodes;
        const parentSiblings = getSiblings(parent);
        parentSiblings.forEach((sibling) => {
            const sibChildNodes = sibling.childNodes;
            sibChildNodes.forEach((child) => {
                if (child.nodeName === "A" && child.classList.contains('mm-next-level')) {
                    child.classList.remove('menu-expand');
                }
                if (child.nodeName === "UL") {
                    slideUp(child, 300);
                }
            });
        });
        childNodes.forEach((child) => {
            if (child.nodeName === "UL") {
                slideToggle(child, 300);
            }
        });
    }

    return (
        <OffCanvas open={isOpen} onHandler={onHandler}>
            <OffCanvasHead>
                <Logo
                    width={120}
                    src="/images/logo/logo.png"
                />
                <OffCanvasCloseBtn onClick={() => onHandler()}>Close</OffCanvasCloseBtn>
            </OffCanvasHead>

            <OffCanvasContent>
                <MobileNav>
                    <ul>
                        {navData.map(nav => (
                            <li key={nav?.text}>
                                <Link
                                    href={nav?.link}
                                    onClick={(event => onNavHandler(event))}
                                    className={cn({ 'mm-next-level': nav?.submenu || nav?.mega_menu })}
                                >
                                    {nav?.text}
                                    {(nav?.submenu || nav?.mega_menu) && <CgMathPlus className="plus" />}
                                    {(nav?.submenu || nav?.mega_menu) && <CgMathMinus className="minus" />}
                                </Link>
                                {nav?.submenu && (
                                    <ul style={{ display: 'none' }}>
                                        {nav.submenu.map((subitem, idx) => (
                                            <Fragment key={idx}>
                                                {subitem?.list.map(item => (
                                                    <li key={item?.text}>
                                                        <Link href={item?.link}>{item?.text}</Link>
                                                    </li>
                                                ))}
                                            </Fragment>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </MobileNav>

                <MobileNavContact>
                    <h4>Contact Us</h4>
                    <a href="tel:+447814444983" className="contact-item">
                        <IoCallOutline /> 0781 444 4983
                    </a>
                    <a href="mailto:Group961sales@gmail.com" className="contact-item">
                        <IoMailOutline /> Group961sales@gmail.com
                    </a>
                    <div className="contact-item">
                        <IoTimeOutline /> Mon - Sat: 9am - 6pm
                    </div>

                    <MobileSocial>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><IoLogoFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><IoLogoInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer"><IoLogoYoutube /></a>
                        <a href="https://pinterest.com" target="_blank" rel="noreferrer"><IoLogoPinterest /></a>
                    </MobileSocial>
                </MobileNavContact>
            </OffCanvasContent>
        </OffCanvas>
    );
};

MobileNavbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onHandler: PropTypes.func.isRequired
};

export default MobileNavbar;
