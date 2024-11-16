import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RepoList from "./RepoList";
import RepoDetails from "./RepoDetails";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const [repoList, setRepoList] = useState<Array<IRepoList>>([]);
  const [loading,setLoading] = useState<boolean>(true);

  const getRepoLists = async () => {
    await axios
      .get(url)
      .then((res) => {
        setRepoList(extractRequiredFields(required_fields, res.data));
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  };

  useEffect(() => {
    getRepoLists();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RepoList repoData={repoList} loading = {loading} />} path="/" />
        <Route element={<RepoDetails repoData={repoList}/>} path="/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
