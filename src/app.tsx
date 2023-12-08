import { useGetStatusQuery } from '@/services/api/system.api';
import './app.scss';

export const App = () => {
  const { currentData, error } = useGetStatusQuery();

  return <div>{JSON.stringify(error || currentData)}</div>;
};
