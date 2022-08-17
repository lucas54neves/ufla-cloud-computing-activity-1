import { Container } from './styles';

type NamesListProps = {
  names: string[];
};

export const NamesList = ({ names }: NamesListProps) => (
  <Container>
    <div>Nomes já cadastrados:</div>
    {names.map((name, index) => (
      <div key={index}>{`${index + 1} ${name}`}</div>
    ))}
  </Container>
);
