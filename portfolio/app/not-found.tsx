import { Container, Typography } from '@mui/material';

export default function Custom404() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography gutterBottom style={{ fontSize: '4rem', fontWeight: 'bold' }}>
        I can&apos;t find that page
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontSize: '1.25rem' }}>
        It may have moved. You can get back to my work from the menu.
      </Typography>
    </Container>
  );
}
