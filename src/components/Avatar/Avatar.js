import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import PropTypes from "prop-types";

const Image = styled.div`
  width: 300px;
  height: 300px;
  display: block;
  margin: 0.5em 0;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(${(props) => props.image});

  ${breakpoint("desktop")`
    float: ${(props) => props.align};
    margin-left: ${(props) => props.align === "right" && ".5em"};
    margin-right: ${(props) => props.align === "left" && ".5em"};
  `}
`;

const Avatar = (props) => {
  const image = require("./avatar.jpg");

  return <Image image={image} align={props.align} />;
};

Avatar.propTypes = {
  align: PropTypes.string,
};

export default Avatar;