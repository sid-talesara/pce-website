import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { CardActionArea } from "@mui/material";

export default function CardContainer({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Card style={{ width: "100%", height: "100%" }}>
        <CardActionArea
          onClick={(e) => {
            console.log("anchorEl");
            handleClick(e);
          }}>
          <CardMedia component="img" image={data.url} alt={data.text} />
          <CardContent
            style={{
              padding: "5px 2px",
            }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "center",
              }}>
              {data.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        {data.content}
      </Popover>
    </>
  );
}
