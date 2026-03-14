import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = styled("section")`
  padding: 80px 0;
`;

const Container = styled("div")`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function Contact() {

  return (

    <Section id="contact">

      <Container>

        <h2>Contact</h2>

        <TextField label="Nom" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Message" multiline rows={4} />

        <Button variant="contained" color="warning">
          Envoyer
        </Button>

      </Container>

    </Section>
  );
}
