import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import CastleIcon from "@mui/icons-material/Castle";
import TitleIcon from "@mui/icons-material/Title";
import LanguageIcon from "@mui/icons-material/Language";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import BadgeIcon from "@mui/icons-material/Badge";

const SummaryCard = ({ content }) => {
  return (
    <Paper sx={{ margin: "1%" }}>
      <List>
        <ListItem divider>
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary={content.id} />
        </ListItem>
        <ListItem divider>
          <ListItemIcon>
            <CastleIcon />
          </ListItemIcon>
          <ListItemText primary={content.dungeonType} />
        </ListItem>
        <ListItem divider>
          <ListItemIcon>
            <TitleIcon />
          </ListItemIcon>
          <ListItemText primary={content.title} />
        </ListItem>
        <ListItem divider>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary={content.character.serverType} />
          <ListItemIcon>
            <AccessibilityIcon />
          </ListItemIcon>
          <ListItemText primary={content.character.classType} />
        </ListItem>
        <ListItem divider>
          <ListItemIcon>
            <BadgeIcon />
          </ListItemIcon>
          <ListItemText primary={content.character.name} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BadgeIcon />
          </ListItemIcon>
          <ListItemText primary={content.createdAt} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default SummaryCard;
