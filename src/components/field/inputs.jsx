//import '../../components/field/style.css';

import "../../style.css";

function Field({ label, placeholder, value, onChange }) {
    return (
      <div className="field">
        <label htmlFor="input_usuario">{label}</label>
        <input
          type="text"
          id="input_usuario"
          className="rounded-md border p-1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default Field;