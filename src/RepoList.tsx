import { useNavigate } from "react-router-dom";
import { IRepoList } from "./helper";
import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

const RepoList = ({
  repoData,
  loading,
}: {
  repoData: IRepoList[];
  loading: boolean;
}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = repoData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-testid="loadingtest"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{ margin: "10px" }}
            data-testid="RepoListTest"
          >
            Repo List
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData?.map((repo) => (
                  <TableRow key={repo.id}>
                    <TableCell>{repo.id}</TableCell>
                    <TableCell>{repo.name}</TableCell>
                    <TableCell>
                      <Button
                        data-testid="repobutton"
                        size="small"
                        onClick={() => navigate(`/${repo.id}`)}
                      >
                        Visit Repo
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            data-testid = 'pagination-test'
            component={"div"}
            count={repoData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </>
  );
};

export default RepoList;
