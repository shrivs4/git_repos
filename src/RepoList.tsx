import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IRepoList } from "./helper";

const RepoList = ({
  repoData,
  loading,
}: {
  repoData: IRepoList[];
  loading: boolean;
}) => {
  const navigate = useNavigate();

  const CardComponent = ({ id, name }: { id: number; name: string }) => {
    return (
      <Card key={id}>
        <CardContent>
          <Typography variant="h6" component={"div"}>
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(`/${id}`)}>
            Visit Repo
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h4" sx={{ margin: "10px" }}>
            Repo List
          </Typography>
          <Box
            sx={{
              margin: "20px",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(5,1fr)",
              },
              gap: 2,
            }}
          >
            {repoData?.map((repo: IRepoList) => {
              return (
                <CardComponent id={repo.id} name={repo.name} key={repo.id} />
              );
            })}
          </Box>
        </>
      )}
    </>
  );
};

export default RepoList;
