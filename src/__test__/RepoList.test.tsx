import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RepoList from "../RepoList";

export const mockData = [
  {
    id: 123,
    name: "Shriyam",
    description: "Sample",
    url: "https:www.sample.com",
    language: "JavaScript",
    forks: 2,
    open_issues: 2,
    watchers: "4",
  },
];

describe("repolist test", () => {
  test("should render repolistComponent", () => {
    render(
      <MemoryRouter>
        <RepoList 
            repoData = {mockData}
            loading = {false}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId('RepoListTest')).toBeInTheDocument();
    expect(fireEvent.click(screen.getByTestId('repobutton')))

  });
  test("should render repolistComponent in loading state", () => {
    render(
      <MemoryRouter>
        <RepoList 
            repoData = {mockData}
            loading = {true}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId('loadingtest')).toBeInTheDocument();
  });
});
