import { useProduct } from "@hooks";
import PropTypes from 'prop-types';
import Tooltip from "@components/ui/tooltip";
import { ActionButton } from "./product.style";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineDelete, AiOutlineFullscreen } from "react-icons/ai";

const ProductActions = ({ product, onQuickViewHandler }) => {
    return null;
};

ProductActions.propTypes = {
    product: PropTypes.object.isRequired,
    onQuickViewHandler: PropTypes.func.isRequired,
};


export default ProductActions;
