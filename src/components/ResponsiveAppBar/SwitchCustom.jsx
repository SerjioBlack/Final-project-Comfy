import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function SwitchCustom() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div style={{ color: 'success' }}>
      <Switch checked={checked} color='success' onChange={handleChange} />
      <span style={{ color: 'green' }}>{checked ? 'EN' : 'UA'}</span>
    </div>
  );
}
