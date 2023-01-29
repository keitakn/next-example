import { Grid, Skeleton, Container } from '@mantine/core';
import type { NextPage } from 'next';

const child = <Skeleton height={140} radius="md" animate={false} />;

const IndexPage: NextPage = () => {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={6}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
};

export default IndexPage;
