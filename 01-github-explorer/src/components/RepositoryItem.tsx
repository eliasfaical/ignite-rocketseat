interface RepositoryitemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function Repositoryitem(props: RepositoryitemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href="{props.repository.html_link}">
        Acessar repositório
      </a>
    </li>
  );
}