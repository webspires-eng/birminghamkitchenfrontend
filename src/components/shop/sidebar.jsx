import Link from "next/link";
import { Fragment } from "react";
import { WidgetTitle, WidgetBody as WidgetWrapper } from "@components/ui/widget/widget.style";

const Sidebar = () => {
    return (
        <Fragment>
            <WidgetWrapper>
                <WidgetTitle>Categories</WidgetTitle>
                <ul className="widget-list">
                    <li><Link href="/collection/bedroom">Bedroom</Link></li>
                    <li><Link href="/collection/dining">Dining</Link></li>
                    <li><Link href="/collection/living">Living</Link></li>
                    <li><Link href="/collection/office-furniture">Office Furniture</Link></li>
                </ul>
            </WidgetWrapper>

            <WidgetWrapper className="mt-5">
                <WidgetTitle>Price</WidgetTitle>
                <ul className="widget-list">
                    <li><Link href="#">Under £100</Link></li>
                    <li><Link href="#">£100 - £200</Link></li>
                    <li><Link href="#">£200 - £500</Link></li>
                    <li><Link href="#">Over £500</Link></li>
                </ul>
            </WidgetWrapper>
        </Fragment>
    );
};

export default Sidebar;
