import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import parse from "react-html-parser";
import Image from "@components/ui/image";
import { PromoItem, PromoInfo, PromoContent, PromoTitle } from "./promo.style";
import styled from "styled-components";

// Ad-hoc styled button for the promo
const PromoButton = styled.span`
    display: inline-block;
    padding: 12px 28px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #191919;
    background: transparent;
    border: 2px solid #191919;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        background: #D40511; /* Primary color */
        border-color: #D40511;
        color: #fff;
    }
`

const Promo = ({ title, content, thumb, slug, className, align }) => {
    return (
        <Link href={slug}>
            <PromoItem
                className={cn(className)}
            >
                <figure>
                    <Image
                        src={thumb}
                        alt={title}
                        width={570}
                        height={320}
                        layout="responsive"
                    />
                </figure>
                <PromoInfo align={align ? align : 'left'}>
                    <PromoContent>
                        <PromoTitle>{parse(title)}</PromoTitle>
                        {content && <p>{content}</p>}
                        <PromoButton className="promo-btn">Shop Now</PromoButton>
                    </PromoContent>
                </PromoInfo>
            </PromoItem>
        </Link>
    );
};

Promo.propTypes = {
    align: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
};

export default Promo;