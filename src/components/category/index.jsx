import Link from "next/link";
import PropTypes from "prop-types";
import { placeholder } from "@utils/constant";
import { CategoryItem, CatItemInner, CatName, CatSubtext } from "./category.style";

const Category = ({ category, icon, slug }) => {
    return (
        <Link href={slug} passHref>
            <CategoryItem>
                <CatItemInner>
                    <img
                        alt={category}
                        src={icon ? icon : placeholder}
                        style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                    />
                    <CatName>{category}</CatName>

                </CatItemInner>
            </CategoryItem>
        </Link>
    );
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon: PropTypes.string
};


export default Category;