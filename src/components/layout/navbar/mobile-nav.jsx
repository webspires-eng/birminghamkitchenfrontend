import { Fragment } from "react";
import cn from "classnames";
import Link from "next/link";
import navData from "@data/nav";
import PropTypes from "prop-types";
import Logo from "@components/ui/logo";
import OffCanvas from "@components/ui/offCanvas";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { IoCloseOutline, IoCallOutline, IoMailOutline, IoTimeOutline, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoPinterest } from "react-icons/io5";
import { MobileNav, MobileNavContact, MobileSocial } from "@components/layout/navbar/mobile-nav.style";
import { getClosest, getSiblings, slideToggle, slideUp } from "@utils/method";
import { OffCanvasCloseBtn, OffCanvasHead, OffCanvasContent } from "@components/ui/offCanvas/style";
import { useSettings } from "@context/SettingsContext";

const MobileNavbar = ({ isOpen, onHandler }) => {
    const settings = useSettings();
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
                <OffCanvasCloseBtn onClick={() => onHandler()}><IoCloseOutline size={28} /></OffCanvasCloseBtn>
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
                    {settings?.contact_phone && (
                        <a href={`tel:${settings.contact_phone}`} className="contact-item">
                            <IoCallOutline /> {settings.contact_phone}
                        </a>
                    )}
                    {settings?.contact_email && (
                        <a href={`mailto:${settings.contact_email}`} className="contact-item">
                            <IoMailOutline /> {settings.contact_email}
                        </a>
                    )}
                    {settings?.showroom_hours && (
                        <div className="contact-item">
                            <IoTimeOutline /> {settings.showroom_hours.split('\n')[0]}
                        </div>
                    )}

                    <MobileSocial>
                        {settings?.social_facebook && <a href={settings.social_facebook} target="_blank" rel="noreferrer"><IoLogoFacebook /></a>}
                        {settings?.social_instagram && <a href={settings.social_instagram} target="_blank" rel="noreferrer"><IoLogoInstagram /></a>}
                        {settings?.social_youtube && <a href={settings.social_youtube} target="_blank" rel="noreferrer"><IoLogoYoutube /></a>}
                        {settings?.social_pinterest && <a href={settings.social_pinterest} target="_blank" rel="noreferrer"><IoLogoPinterest /></a>}
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
