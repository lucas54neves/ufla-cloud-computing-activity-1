import { Container } from './styles';

type InputNameProps = {
  name: string;
  setName: (name: string) => void;
  saveName: () => void;
};

export const InputName = ({ name, setName, saveName }: InputNameProps) => (
  <Container>
    <label>
      Nome:
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <button onClick={() => saveName()}>Salvar nome</button>
  </Container>
);
