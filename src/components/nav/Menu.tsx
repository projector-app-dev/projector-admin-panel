import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { MenuItemLink, useSidebarState, useTranslate } from "react-admin";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import FeedIcon from "@mui/icons-material/Feed";

export const Menu = () => {
  const items = [
    {
      title: "nav.appUserInfoItem",
      listIcon: <FeedIcon />,
      subItems: [
        {
          path: "/users",
          title: "resources.users.name",
        },
        {
          path: "/fabulas",
          title: "resources.fabulas.name",
        },
      ],
    },
    {
      title: "nav.appContentItem",
      listIcon: <FeedIcon />,
      subItems: [
        {
          path: "/faq",
          title: "resources.faq.name",
        },
        {
          path: "/news",
          title: "resources.news.name",
        },
      ],
    },
    {
      title: "nav.appConfigItem",
      listIcon: <AppSettingsAltIcon />,
      subItems: [
        {
          path: "/sexTypes",
          title: "resources.sexTypes.name",
        },
        {
          path: "/genderTypes",
          title: "resources.genderTypes.name",
        },
        {
          path: "/links",
          title: "resources.links.name",
        },
      ],
    },
  ];
  const [openSidebar, setOpenSidebar] = useSidebarState();
  const [selectedIndex, setSelectedIndex] = useState<React.Key | null>(null);
  const [open, setOpen] = useState(false);
  const translate = useTranslate();

  useEffect(() => {
    if (!openSidebar) {
      setOpen(false);
    }
  }, [openSidebar]);

  const handleListItemClick = (index: React.Key) => {
    if (openSidebar) {
      if (selectedIndex === index) {
        setOpen(!open);
      } else {
        setSelectedIndex(index);
        setOpen(true);
      }
    } else {
      setOpenSidebar(!openSidebar);
      setSelectedIndex(index);
      setOpen(!open);
    }
  };

  return (
    <List component="nav">
      {items.map((item: CustomMenuItemProps, index) => {
        const { listIcon: ListIcon, subItems } = item;
        return (
          <React.Fragment key={index}>
            <ListItem
              component="div"
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemIcon>{ListIcon}</ListItemIcon>
              <ListItemText
                disableTypography
                primary={translate(item.title)}
              />
            </ListItem>
            <Collapse
              in={open && selectedIndex === index}
              timeout="auto"
              unmountOnExit
            >
              <List component="div">
                {subItems.map((subItem, index) => {
                  return (
                    <React.Fragment key={index}>
                      <MenuItemLink
                        to={subItem.path}
                        primaryText={translate(subItem.title)}
                      />
                    </React.Fragment>
                  );
                })}
              </List>
            </Collapse>
          </React.Fragment>
        );
      })}
    </List>
  );
};

export interface MenuSubLinkProps {
  path: string;
  title: string;
}

export interface CustomMenuItemProps {
  subItems: MenuSubLinkProps[];
  listIcon: React.ReactNode;
  title: string;
}

export interface CustomMenuProps {
  items: CustomMenuItemProps[];
}
