
// mui
import SearchIcon from '@mui/icons-material/Search';

import "./search-country-select.scss"

const InputSelectComponent = () => {

  return (
    <div className='input-select-component'>

      <div className="input-container">
        <span className='icon'><SearchIcon fontSize='small' sx={{ color: "#9D9DAF" }} /></span>
        <input
          type='text'
          placeholder='Search'
        />
      </div>

      <div className="select-container">
        <img src="Assets/pin-icon.svg" alt="pin" className='icon' />
        <select>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>

    </div>
  );
};

export default InputSelectComponent;