import { Box } from "@mui/material";
import React from "react";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  // console.log(repos);
  return (
    <Box mt={22}>
      {repos?.map((item, i) => (
        <RepoItem
          key={i}
          repoName={item.repoName}
          repoLink={item.repoLink}
          imgUrl={item.owner.imgUrl}
          description={item.description}
          lastPushedDatestr={item.lastPushedDatestr}
          starCount={item.starCount}
          issueCount={item.openIssues}
          ownerName={item.owner.name}
          userLink={item.owner.userLink}
        />
      ))}
    </Box>
  );
};

export default RepoList;
