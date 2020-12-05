import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";

import styled from "styled-components";

import { colorScheme } from "../Colors/Colors.js";
import Business from "./business.svg";
import Designer from "./designer.svg";
import Developer from "./developer.svg";
import Owner from "./owner.svg";

const Container = styled.span`
  width: 150px;
  background-color: ${(props) => props.color};
  padding: 15px;
  border-radius: 50%;
  margin-right: ${(props) => (props.side === "left" ? "15px" : "0")};
  margin-left: ${(props) => (props.side === "right" ? "15px" : "0")};
  float: ${(props) => props.side};
`;

class ProjectRoles extends React.Component {
  render() {
    const Icon =
      {
        developer: Developer,
        designer: Designer,
        owner: Owner,
        business: Business,
      }[this.props.role] || Developer;

    const color =
      {
        developer: colorScheme.secondary,
        designer: colorScheme.highlight,
        owner: colorScheme.shadow,
      }[this.props.role] || colorScheme.primary;

    return (
      <Container color={color} side={this.props.side || "left"}>
        <Icon />
      </Container>
    );
  }
}

ProjectRoles.propTypes = {
  role: PropTypes.string,
  side: PropTypes.string,
};
export default ProjectRoles;
