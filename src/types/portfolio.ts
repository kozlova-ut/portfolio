export interface IRepos {
    id: number,
    name: string,
    description?: string,
    homepage?: string,
    languages_url: string,
    pushed_at: string,
    html_url: string
}

export interface ILang {
    [language: string]: number;
}
