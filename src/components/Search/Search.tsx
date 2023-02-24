import { ReactComponent as SearchIcon} from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import { useRef } from 'react';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}

// seatch with Ref

export const Search = ({hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const text = searchRef.current ? searchRef.current.value : '';

    if (text) {
      onSubmit(text);
      if (searchRef.current) searchRef.current.value = '';
    }
  }

  return ( 
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          ref={searchRef}
          type='text'
          className={styles.textField}
          id='search'
          name='username'
          placeholder='Search GitHub username...'
        />
        {/* {hasError && (
          <div className={styles.error}>
            No result 123
          </div>
        )} */}
        {hasError ? 
        (<div className={styles.error}>
          No result
        </div>) 
        : null}
        <Button>Search</Button>
      </div>
    </form>
  );
};
