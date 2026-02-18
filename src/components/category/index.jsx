import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import { placeholder } from "@utils/constant";
import { CategoryItem, CatItemInner, CatName, CatSubtext } from "./category.style";

const Category = ({ category, icon, slug }) => {
    return (
        <Link href={slug} passHref>
            <CategoryItem>
                <CatItemInner>
                    <Image
                        fill
                        alt={category}
                        src={icon ? icon : placeholder}
                        sizes="(max-width: 768px) 100vw, 25vw"
                        style={{ objectFit: 'cover' }}
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