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
