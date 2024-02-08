import '@/shared/styles/index.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/config';

import { MainLayout } from '@/shared/layouts';
import TopPage from '@/pages/top-page';
import RecordPage from '@/pages/record-page';
import ColumnPage from '@/pages/column-page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path={ROUTES.record} element={<RecordPage />} />
          <Route path={ROUTES.column} element={<ColumnPage />} />
        </Routes>
      </MainLayout>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
