import "./Section.scss";
import photo3 from "../../assets/akar-icons_circle.svg";

function Input({ value, onChange }) {
  return (
    <div className="input_box">
      <img src={photo3} alt="Input Icon" />
      <input type="text" placeholder="Note" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
