import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepoList from "./RepoList";
import RepoDetails from "./RepoDetails";
import useFetch from "./useFetch";
import { extractRequiredFields, IRepoList } from "./helper";

const required_fields = [
  "id",
  "name",
  "description",
  "url",
  "language",
  "forks",
  "open_issues",
  "watchers",
];

function App() {
  const url = "https://api.github.com/orgs/godaddy/repos";
  const { data, loading, error } = useFetch<IRepoList[]>(url);

  const repoList = data ? extractRequiredFields(required_fields, data) : [];

  if (error) {
    return <div data-testid='error-test'>Error: {error}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RepoList repoData={repoList} loading={loading} />}
        />
        <Route
          path="/:id"
          element={<RepoDetails repoData={repoList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
