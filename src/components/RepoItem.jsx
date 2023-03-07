import {
  Backdrop,
  Box,
  Card,
  CardMedia,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";

const RepoItem = ({
  imgUrl,
  repoName,
  repoLink,
  description,
  issueCount,
  starCount,
  ownerName,
  userLink,
  lastPushedDatestr,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  // console.log(imgUrl);
  // const days = "5";
  // const [isOpen, setIsOpen] = useState(false);
  const today = new Date();
  const date = new Date(lastPushedDatestr);
  const timeSpan = today - date;
  const days = timeSpan / (1000 * 60 * 60 * 24);
  // console.log(timeSpan);
  // console.log(date.getTime());

  // const clickHandler = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <Stack
        height={{ xs: "30vh", md: "20vh" }}
        bgcolor="#161b22"
        direction="row"
        borderRadius={2}
        overflow="hidden"
        maxWidth={{ xs: "90vw", sm: "70vw" }}
        mx="auto"
        mt={4}
        sx={{ color: "#fff", boxShadow: " 0 3px 10px #000" }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          height="100%"
          bgcolor="#eee"
          px={2}
        >
          {" "}
          <Card bgcolor="black" sx={{ borderRadius: "50%" }}>
            <Link href={`${userLink}`} target="_blank">
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "64px", sm: "80px" },
                  height: { xs: "64px", sm: "80px" },
                }}
                image={imgUrl}
                alt="user avatar"
                bgcolor="red"
              />
            </Link>
          </Card>
        </Box>
        <Box width="100%" px={2} py={1}>
          <Stack
            height="30%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link href={repoLink} target="_blank">
              <Typography
                fontWeight="bold"
                sx={{ fontSize: { xs: 18, sm: 24 } }}
              >
                {repoName}
              </Typography>
            </Link>

            {open ? (
              <>
                <ArrowCircleUpRoundedIcon
                  cursor="pointer"
                  onClick={handleToggle}
                  fontSize="large"
                />{" "}
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                  onClick={handleToggle}
                >
                  <Box
                    height="25vh"
                    width="50vw"
                    bgcolor="whitesmoke"
                    display="grid"
                    sx={{ placeItems: "center" }}
                    borderRadius={4}
                  >
                    <Typography
                      variant="body1"
                      color="black"
                      textAlign="center"
                      p={2}
                    >
                      The graph component will go here!!
                    </Typography>
                  </Box>
                </Backdrop>
              </>
            ) : (
              <>
                <ArrowCircleDownRoundedIcon
                  cursor="pointer"
                  onClick={handleToggle}
                  fontSize="large"
                />
              </>
            )}
          </Stack>
          <Box pb={{ xs: 1, md: 0 }} height="40%" overflow="auto" color="#ccc">
            {description}
          </Box>
          <Box
            height="30%"
            display="flex"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            // direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
            gap={{ xs: 0, md: 2 }}
          >
            <Stack direction="row" gap={2}>
              {" "}
              <Chip
                sx={{ color: "white", bgcolor: "#252525" }}
                icon={<StarRoundedIcon color="white" />}
                label={`${starCount} stars`}
              />
              <Chip
                sx={{ color: "white", bgcolor: "#252525" }}
                icon={<AdjustRoundedIcon color="white" />}
                label={`${issueCount} issues`}
              />
            </Stack>

            <Typography
              mt={0}
              variant="subtitle1"
              sx={{ display: "inline-block" }}
              color="#ccc"
            >
              Last pushed by {Math.ceil(days)} days ago by{" "}
              <Link href={`${userLink}`} target="_blank">{`${ownerName}`}</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default RepoItem;
