import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RepoList from "../RepoList";
import { mockData } from "../utils/helper";


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
    expect(fireEvent.click(screen.getAllByTestId('repobutton')[0]))

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

  test("should change page on next button", () => {
    render(
      <MemoryRouter>
        <RepoList 
            repoData = {mockData}
            loading = {false}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('KeyboardArrowRightIcon'));
    expect(screen.getByText('132')).toBeInTheDocument();
  });
});
