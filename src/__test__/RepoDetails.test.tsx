import { MemoryRouter, Route, Routes } from "react-router-dom"
import RepoDetails from "../components/RepoDetails"
import { mockData } from "../utils/helper"
import { render, screen } from "@testing-library/react"

describe('RepoDetails Test',()=>{
    test('should mount repoDetails',()=>{
        render(
        <MemoryRouter initialEntries={[`/123`]}>
            <Routes>
                <Route path="/:id" element= {<RepoDetails 
                repoData = {mockData}
            />} />
            </Routes>
        </MemoryRouter>
        )
        expect(screen.getByTestId('repodetails-test')).toBeInTheDocument();
    })
})