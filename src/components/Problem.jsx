import { styled } from "@mui/material/styles";

const Section = styled("section")`
  background: #f4f4f4;
  padding: 80px 0;
`;

const Container = styled("div")`
  max-width: 900px;
  margin: auto;
`;

export default function Problem() {
  return (

    <Section>

      <Container>

        <h2>Simplifiez, fluidifiez</h2>

        <h3>(Lorsque votre intranet ne suffit plus)</h3>

        <p>
          Notre conviction : l'utilisateur final est la clé,
          il doit trouver la solution à son problème sans réfléchir.
        </p>

        <p>
          Vous êtes en entreprise, cabinet ou administration.
          Vous cherchez à partager de manière ciblée les informations
          et à éviter les errances entre les acteurs.
        </p>

        <p>
          Parcours est l'outil qui vous manque.
        </p>

      </Container>

    </Section>
  );
}
