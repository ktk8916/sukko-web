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
import BadgeIcon from "@mui/icons-material/Badge";
import ColorizeIcon from "@mui/icons-material/Colorize";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
import { Link } from "react-router-dom";

const SummaryCard = ({ content }) => {
  return (
    <Link to={`/taxidermy/${content.id}`}>
      <Paper sx={{ margin: "1%" }}>
        <List>
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
              <ColorizeIcon />
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
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText
              primary={moment(content.createdAt).format("YYYY-MM-DD HH:mm")}
            />
          </ListItem>
        </List>
      </Paper>
    </Link>
  );
};

export default SummaryCard;
