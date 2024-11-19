import { useEffect, useState } from "react";
import { IRepoList } from "../utils/helper";
import { useParams } from "react-router-dom";
import { Paper, Typography, Link, Box } from "@mui/material";

const RepoDetails = ({ repoData }: { repoData: IRepoList[] }) => {
  const { id } = useParams();
  const [repoDetails, setRepoDetails] = useState<IRepoList>();

  useEffect(() => {
    if (id) {
      const repo = repoData.find(
        (repo: IRepoList) => repo.id.toString() === id
      );
      setRepoDetails(repo || undefined);
    }
  }, [id, repoData]);

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {repoDetails ? (
        <>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 3,
              textAlign: "center",
              fontWeight: "bold",
              color: "#2c3e50",
            }}
            data-testid="repodetails-test"
          >
            Repository Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                width: "100%",
                maxWidth: "800px",
                padding: 4,
                borderRadius: 2,
                backgroundColor: "#ffffff",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#34495e" }}
              >
                Repo Name:{" "}
                <Typography
                  component="span"
                  sx={{ fontWeight: "normal", color: "#2ecc71" }}
                >
                  {repoDetails.name}
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#7f8c8d" }}
              >
                <strong>Description:</strong> {repoDetails.description}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#7f8c8d" }}
              >
                <strong>Language:</strong> {repoDetails.language}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#7f8c8d" }}
              >
                <strong>Forks:</strong> {repoDetails.forks}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#7f8c8d" }}
              >
                <strong>Open Issues:</strong> {repoDetails.open_issues}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#7f8c8d" }}
              >
                <strong>Watchers:</strong> {repoDetails.watchers}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#7f8c8d" }}
              >
                <strong>ID:</strong> {repoDetails.id}
              </Typography>
              <Typography variant="body1">
                <strong>URL:</strong>{" "}
                <Link
                  href={repoDetails.url}
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#2980b9", textDecoration: "none" }}
                >
                  {repoDetails.url}
                </Link>
              </Typography>
            </Paper>
          </Box>
        </>
      ) : (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginTop: 6,
            color: "#e74c3c",
          }}
        >
          No Records Found
        </Typography>
      )}
    </Box>
  );
};

export default RepoDetails;
