import css from './SearchBox.module.css';
import { useId } from 'react';

export default function SearchBox({ value, onSearch }) {
  const searchId = useId();

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.field}
        id={searchId}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />{' '}
    </div>
  );
}
