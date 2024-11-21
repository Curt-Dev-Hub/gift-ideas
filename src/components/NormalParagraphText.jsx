import PropTypes from "prop-types"


export const NormalParagraphText = ({ textContent }) => {
  return (
    <p style={{fontSize:"3.0rem", fontWeight: "500"}}>{ textContent }</p>
  )
}

NormalParagraphText.propTypes = {
    textContent: PropTypes.string
}