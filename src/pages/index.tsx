import type { NextPage } from 'next'
import styles from 'my-fe-stack/styles/Home.module.css';
import { useResolve } from 'my-fe-stack/di';
import { NameService } from 'my-fe-stack/services/name';
import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

const Home: NextPage = observer(() => {
  const nameService = useResolve(NameService);

  const handleFetch = useCallback(() => {
    nameService.fetchName();
  }, [nameService]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {nameService.name ? `Hello ${nameService.name}!` : 'Hello!'}
        <button onClick={handleFetch}>Get my name</button>
      </div>
    </div>
  )
});

export default Home
