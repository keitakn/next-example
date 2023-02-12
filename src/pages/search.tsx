import type { NextPage } from 'next';
import { GitHubAccountSearch } from '@/components';
import { DefaultLayout } from '@/layouts';

const SearchPage: NextPage = () => {
  return (
    <DefaultLayout>
      <GitHubAccountSearch />
    </DefaultLayout>
  );
};

export default SearchPage;
