import NavBar from '../components/NavBar';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Something went wrong.</h1>
        <p>{error.statusText || error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;