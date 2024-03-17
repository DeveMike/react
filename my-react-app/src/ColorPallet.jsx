import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import { FaPlus, FaMinus } from 'react-icons/fa';

function ColorPallet() {
  const [colorPickers, setColorPickers] = useState([<ColorPicker key={0} />]);

  // Lisää uusi ColorPicker-komponentti
  const addColorPicker = () => {
    if (colorPickers.length < 4) {
      const newColorPickers = [...colorPickers, <ColorPicker key={colorPickers.length} />];
      setColorPickers(newColorPickers);
    } else {
      alert("Voit lisätä enintään neljä väripalettia!");
    }
  };

  // Poista viimeisin väripaletti
  const removeLastColorPicker = () => {
    if (colorPickers.length > 1) {
      const newColorPickers = [...colorPickers];
      newColorPickers.pop();
      setColorPickers(newColorPickers);
    }
  };

  // Määritä plusnapin luokka sen perusteella, onko miinusnappi näkyvissä
  const addColorPickerClass = colorPickers.length > 1 ? "add-color-picker-centered" : "add-color-picker";

  return (
    <div className="color-pallet-container">
      <h1>Color Pallet</h1>
      <div className="table">
        {colorPickers.map((colorPicker, index) => (
          <div key={index} className="color-picker-wrapper">
            {colorPicker}
          </div>
        ))}
      </div>
      {/* Plus-ikoni, jolla lisätään uusi ColorPicker */}
      <div className={addColorPickerClass} onClick={addColorPicker}>
        <FaPlus />
      </div>
      {/* Näytä miinus-nappi aina, paitsi jos on vain yksi väripaletti */}
      {colorPickers.length > 1 && (
        <div className="remove-color-picker" onClick={removeLastColorPicker}>
          <FaMinus />
        </div>
      )}
    </div>
  );
}

export default ColorPallet;
