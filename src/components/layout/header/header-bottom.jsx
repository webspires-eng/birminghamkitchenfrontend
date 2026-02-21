import PropTypes from "prop-types";
import Logo from "@components/ui/logo";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "@bootstrap";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getCartProductsQuantity } from "@utils/product";
import { AiOutlineMenu } from "react-icons/ai";
import {
  ActionItem,
  CartItemCount,
  HeaderAction,
  HeaderActionBtn,
  HeaderBottomWrap,
  HeaderNavigation,
} from "@components/layout/header/header.style";

const HeaderBottom = ({
  onConfigHandler,
  onMiniCartHandler,
  onMobileNavHandler,
  children
}) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const cartQuantity = getCartProductsQuantity(shoppingCart);

  return (
    <HeaderBottomWrap>
      <Container>
        <Row className="align-items-center">
          <Col xs={3} lg={2} className="d-lg-none">
            <HeaderActionBtn onClick={() => onMobileNavHandler()}>
              <AiOutlineMenu />
            </HeaderActionBtn>
          </Col>

          <Col xs={5} lg={2} className="text-center text-lg-left d-flex align-items-center justify-content-center justify-content-lg-start">
            <Logo className="logo--desktop" src="/images/logo/logo.png" />

            <Logo
              width={180}
              height={42}
              className="logo--mobile"
              src="/images/logo/logo.png"
            />
          </Col>

          <Col lg={8} className="d-none d-lg-block">
            <HeaderNavigation>
              {children}
            </HeaderNavigation>
          </Col>

          <Col lg={2} className="d-none d-lg-block text-right">
            <HeaderAction>
              <ActionItem>
                <HeaderActionBtn
                  className="pr-1"
                  onClick={() => onMiniCartHandler()}
                >
                  <HiOutlineShoppingBag />
                  <CartItemCount>{cartQuantity}</CartItemCount>
                </HeaderActionBtn>
              </ActionItem>
            </HeaderAction>
          </Col>

          <Col xs={4} className="d-lg-none text-right">
            <HeaderAction>
              <ActionItem>
                <HeaderActionBtn onClick={() => onMiniCartHandler()}>
                  <HiOutlineShoppingBag />
                  <CartItemCount>{cartQuantity}</CartItemCount>
                </HeaderActionBtn>
              </ActionItem>
            </HeaderAction>
          </Col>
        </Row>
      </Container>
    </HeaderBottomWrap>
  );
};

HeaderBottom.propTypes = {
  onConfigHandler: PropTypes.func.isRequired,
  onMiniCartHandler: PropTypes.func.isRequired,
  onMobileNavHandler: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default HeaderBottom;
