import { useNavigate } from "react-router-dom";
import { IRepoList } from "../utils/helper";
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
import { c_tableheader_styles, customScroll } from "../styles/muistyleContainer";

const RepoList = ({
  repoData,
  loading,
}: {
  repoData: IRepoList[];
  loading: boolean;
}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
            sx={{ margin: "10px", textAlign: "center", color: "#37474f" }}
            data-testid="RepoListTest"
          >
            Repo List
          </Typography>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer
              sx={{
                maxHeight: "500px",
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                ...customScroll
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={c_tableheader_styles}
                    >
                      ID
                    </TableCell>
                    <TableCell
                      sx={c_tableheader_styles}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={c_tableheader_styles}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData?.map((repo, index) => (
                    <TableRow
                      key={repo.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "#e0e0e0" : "#f5f5f5",
                        "&:hover": { backgroundColor: "#cfd8dc" },
                      }}
                    >
                      <TableCell>{repo.id}</TableCell>
                      <TableCell>{repo.name}</TableCell>
                      <TableCell>
                        <Button
                          data-testid="repobutton"
                          size="small"
                          sx={{
                            backgroundColor: "#546e7a",
                            color: "white",
                            "&:hover": { backgroundColor: "#37474f" },
                          }}
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
          </Paper>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            data-testid="pagination-test"
            component={"div"}
            count={repoData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ backgroundColor: "#eceff1" }}
          />
        </>
      )}
    </>
  );
};

export default RepoList;
