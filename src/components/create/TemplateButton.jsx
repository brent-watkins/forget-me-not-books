import React, { useCallback } from "react";
import PropTypes from "prop-types";

import ButtonBase from "@mui/material/ButtonBase";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";

export default function TemplateButton({
  caption,
  icon,
  isSelected,
  setSelection,
}) {
  const handleSelection = useCallback(() => {
    setSelection(caption);
  }, [caption, setSelection]);

  const buttonStyle = {
    alignItems: "center",
    backgroundColor: "ghostwhite",
    border: isSelected ? "2px solid black" : "1px solid lightgray",
    display: "flex",
    flexDirection: "column",
    height: "100px",
    justifyContent: "center",
    width: "100px",
  };

  return (
    <ButtonBase onClick={handleSelection} sx={buttonStyle}>
      <Icon fontSize="large">{icon}</Icon>
      <Typography color="secondary" variant="button">
        {caption}
      </Typography>
    </ButtonBase>
  );
}

TemplateButton.propTypes = {
  caption: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSelection: PropTypes.func.isRequired,
};
