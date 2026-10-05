import { Container, Typography } from '@mui/material';

export default function Custom404() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography gutterBottom style={{ fontSize: '4rem', fontWeight: 'bold' }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontSize: '1.25rem' }}>
        Oops! The page you are looking for does not exist.
      </Typography>
    </Container>
  );
}
