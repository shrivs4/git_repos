//interfaces

export interface IRepoList {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  forks: number;
  open_issues: number;
  watchers: string;
}

//functions
export const extractRequiredFields = (fields: Array<string>, repos: any) => {
  return repos?.map((repo: any) => {
    // Pick only the required fields using reduce
    return fields.reduce((acc: any, field: any) => {
      if (repo[field] !== undefined) {
        acc[field] = repo[field];
      }
      return acc;
    }, {});
  });
};

//constants
export const required_fields = [
  "id",
  "name",
  "description",
  "url",
  "language",
  "forks",
  "open_issues",
  "watchers",
];

// mockData
export const mockData:IRepoList[]  = [
  {
    id: 123,
    name: "Shriyam",
    description: "Sample project",
    url: "https://www.sample.com",
    language: "JavaScript",
    forks: 2,
    open_issues: 2,
    watchers: '4',
  },
  {
    id: 124,
    name: "TechMate",
    description: "A technical hub for developers",
    url: "https://www.techmate.com",
    language: "TypeScript",
    forks: 5,
    open_issues: 1,
    watchers: '10',
  },
  {
    id: 125,
    name: "CodeCraft",
    description: "A platform for coding enthusiasts",
    url: "https://www.codecraft.com",
    language: "Python",
    forks: 7,
    open_issues: 4,
    watchers: '15',
  },
  {
    id: 126,
    name: "AlgoEngine",
    description: "Algorithm and data structure library",
    url: "https://www.algoengine.com",
    language: "C++",
    forks: 9,
    open_issues: 3,
    watchers: '12',
  },
  {
    id: 127,
    name: "DesignPro",
    description: "UI/UX design tools and resources",
    url: "https://www.designpro.com",
    language: "CSS",
    forks: 3,
    open_issues: 2,
    watchers: '8',
  },
  {
    id: 128,
    name: "TestBuddy",
    description: "Testing utilities for QA engineers",
    url: "https://www.testbuddy.com",
    language: "Java",
    forks: 4,
    open_issues: 1,
    watchers: '6',
  },
  {
    id: 129,
    name: "DevOpsify",
    description: "Automating CI/CD pipelines",
    url: "https://www.devopsify.com",
    language: "Shell",
    forks: 8,
    open_issues: 5,
    watchers: '11',
  },
  {
    id: 130,
    name: "DataQuest",
    description: "Data analysis and visualization tools",
    url: "https://www.dataquest.com",
    language: "R",
    forks: 6,
    open_issues: 0,
    watchers: '14',
  },
  {
    id: 131,
    name: "OpenSourceVault",
    description: "A collection of open-source projects",
    url: "https://www.opensourcevault.com",
    language: "Ruby",
    forks: 10,
    open_issues: 7,
    watchers: '20',
  },
  {
    id: 132,
    name: "AIExplorer",
    description: "Artificial Intelligence research and tools",
    url: "https://www.aiexplorer.com",
    language: "Python",
    forks: 12,
    open_issues: 2,
    watchers: '25',
  },
];
