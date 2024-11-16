import React, { useEffect, useState } from "react";
import { IRepoList } from "./helper";
import { useParams } from "react-router-dom";
import { Paper, Typography, Link, Box } from "@mui/material";

const RepoDetails = ({ repoData }: { repoData: IRepoList[] }) => {
  const { id } = useParams();
  const [repoDetais, setRepoDetails] = useState<IRepoList>();

  useEffect(() => {
    if (id) {
      const repo = repoData.filter(
        (repo: IRepoList) => repo.id.toString() === id
      );
      setRepoDetails(repo[0]);
    }
  }, [id]);

  return (
    <>
      {repoDetais ? (
        <>
          <Typography variant="h4" sx={{ margin: "10px" }}>
            Repo Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: "90%",
                padding: 3,
              }}
            >
              <Typography variant="h4" gutterBottom>
                <strong>Repo Name:</strong> {repoDetais.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Description:</strong> {repoDetais.description}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Language:</strong> {repoDetais.language}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Forks:</strong> {repoDetais.forks}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Open Issues:</strong> {repoDetais.open_issues}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Watchers:</strong> {repoDetais.watchers}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>ID:</strong> {repoDetais.id}
              </Typography>
              <Typography variant="body1">
                <strong>URL:</strong>{" "}
                <Link href={repoDetais.url} target="_blank" rel="noopener">
                  {repoDetais.url}
                </Link>
              </Typography>
            </Paper>
          </Box>
        </>
      ):
      <h4>No Records Found</h4>}
    </>
  );
};

export default RepoDetails;
