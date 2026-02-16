import PropTypes from "prop-types";
import { SectionText, SectionTitleWrap, Title, SectionLabel } from "./title.style"

const SectionTitle = ({ title, content, label, align, ...props }) => {
    return (
        <SectionTitleWrap align={align} {...props}>
            {label && <SectionLabel>{label}</SectionLabel>}
            <Title>{title}</Title>
            {content && <SectionText>{content}</SectionText>}
        </SectionTitleWrap>
    );
};

SectionTitle.defaultProps = {
    align: "center"
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    label: PropTypes.string,
    align: PropTypes.string,
};


export default SectionTitle;