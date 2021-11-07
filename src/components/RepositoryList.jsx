import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';

const repository = {
    name: 'unformTest',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RespositoryList() {
    return (
        <section className="repository-list">
            <h1> Lista de repositórios </h1>

            <ul>
               <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}