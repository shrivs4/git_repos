import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";
import useFetch from "./hooks/useFetch";
import { extractRequiredFields, IRepoList, required_fields } from "./utils/helper";

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
