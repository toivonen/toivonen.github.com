import React from "react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import {
  Box,
  Button,
  DropButton,
  Grommet,
  Menu as GrommetMenu,
  Nav,
  ResponsiveContext,
} from "grommet";
import { deepMerge } from "grommet/utils";
import { Link } from "@components";

import theme from "../theme";

// https://github.com/grommet/grommet/blob/05f6d834dab28cea56d352460aa6f4ac6f041c3f/src/js/components/Menu/Menu.js#L19
const ContainerBox = styled(Box)`
  max-width: 300px;
  max-height: inherit;
  /* IE11 hack to get drop contents to not overflow */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: 100%;
  }

  ${(props) => props.theme.menu.extend};
`;

const StyledButton = styled(Button)`
  &.active {
    text-decoration: underline;
    color: ${(props) => props.theme.global.colors.brand};
  }
`;

export const menuData = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Consultancy", href: "/services/consultancy" },
      { label: "Team supervision", href: "/services/supervision" },
      { label: "Audit of design and development", href: "/services/audit" },
      { label: "Design systems strategy", href: "/services/strategy" },
      {
        label: "Design system and components production",
        href: "/services/development",
      },
      { label: "Workshops", href: "/services/workshops" },
      { label: "Speaking", href: "/services/speaking" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const menuTheme = deepMerge(theme, {
  button: {
    disabled: {
      opacity: 1,
      color: "text-xweak",
      border: {
        width: "3px",
      },
    },
    extend: ({ plain, theme, disabled }) =>
      plain &&
      !disabled &&
      `&:hover {
        color: ${theme.global.colors.brand};
        text-decoration: underline;
        background: transparent;
        }
      `,
  },
});

/**
 * Helper function to flatten array of menu items and extend styles accordingly
 *
 * @param {array} arr - menu items array
 * @param {boolean} [isSecondLevel=false] - if an item is located below the first level
 * @returns {array}   new array
 */
function flatten(arr, isSecondLevel = false) {
  return arr
    ? arr.reduce(
        (result, item) => [
          ...result,
          {
            label: item.label,
            href: item.href,
            disabled: !item.href,
            margin: { left: isSecondLevel && "small" },
          },
          ...flatten(item.children, true),
        ],
        []
      )
    : [];
}

/**
 * Basic site navigation.
 *
 * @param {Array} items - array of objects, representing menu items. Items can be nested (will be rendered as submenu)
 *
 */
const Menu = ({
  items = menuData,
  mode = "horizontal",
  location,
  ...props
}) => {
  return (
    <Grommet theme={menuTheme}>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <GrommetMenu
              justify="end"
              items={flatten(items)}
              label="Menu"
              dropAlign={{ right: "right", top: "bottom" }}
            ></GrommetMenu>
          ) : (
            <Nav
              align="center"
              justify="end"
              direction="row"
              mode={mode}
              gap="none"
              {...props}
            >
              {items.map((item) => (
                <MenuItem
                  item={item}
                  key={item.label}
                  margin={{ horizontal: "small" }}
                  location={location}
                />
              ))}
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

/**
 * Menu Item.
 *
 * @param {String} item.label - Menu item name to display; required
 * @param {String} item.href - Path to the page in case item represents a link
 * @param {Array} item.childen - array of objects, representing nested menu items
 *
 */
const MenuItem = ({ item, location, ...props }) => {
  const { label, href, children = [] } = item;
  const targetRef = useRef();
  const [open, setOpen] = useState(false);
  const { pathname } = { location };
  return children.length > 0 ? (
    <Box onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Box ref={targetRef}>
        {
          <DropButton
            as="div"
            a11yTitle="Navigation Menu"
            key={item.label}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dropProps={{ target: targetRef.current }}
            dropAlign={{ top: "bottom", left: "left" }}
            dropContent={
              <ContainerBox>
                {children.map((childprops) => (
                  <Box
                    key={childprops.label}
                    align="start"
                    pad="small"
                    gap="medium"
                  >
                    <StyledButton
                      plain
                      className={
                        pathname && pathname === childprops.href && "active"
                      }
                      {...childprops}
                    />
                  </Box>
                ))}
              </ContainerBox>
            }
          >
            <StyledButton
              activeClassName="active"
              className={pathname && pathname.startsWith(href) && "active"}
              plain
              as={Link}
              key={label}
              to={href}
              label={label}
              {...props}
            />
          </DropButton>
        }
      </Box>
    </Box>
  ) : (
    <StyledButton
      plain
      as={Link}
      key={label}
      to={href}
      {...props}
      label={label}
      activeClassName="active"
    />
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    children: PropTypes.node,
  }),
  location: PropTypes.object,
};
Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      children: PropTypes.node,
    })
  ),
  current: PropTypes.string,
  mode: PropTypes.string,
  location: PropTypes.object,
};

export default Menu;
