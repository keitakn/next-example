import { Container } from '@mantine/core';
import type { NextPage } from 'next';
import { GitHubAccountSearch, TitleText } from '@/components';

const SearchPage: NextPage = () => {
  return (
    <Container my="md">
      <TitleText title="Next Sample App" />
      <GitHubAccountSearch />
    </Container>
  );
};

export default SearchPage;
