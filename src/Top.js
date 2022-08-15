import { getStore } from './store';

export default function Top() {
  const store = getStore();

  return (
    <header>
      <div className='top'>
        <img src='/logo.svg' />
        <h2>my travel journal {store.name}</h2>
      </div>
    </header>
  );
}