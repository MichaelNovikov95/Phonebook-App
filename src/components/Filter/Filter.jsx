import PropTypes from 'prop-types';

import s from './Filter.module.css';

export default function Filter({ filter, onChange }) {
  return (
    <div className={s.container}>
      <label className={s.title}>Filter by name</label>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        className={s.input_filter}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  filterEl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
