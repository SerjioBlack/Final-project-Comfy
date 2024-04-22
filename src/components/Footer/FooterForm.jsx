import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FooterForm() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    // Здесь можно добавить логику для отправки информации, например, вызвать API или выполнить другие действия.
    console.log('Email submitted:', email);

    setEmail('');
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div style={{marginTop:'10px', border:'1px solid lightgrey', padding:'5px', borderRadius:'5px', paddingLeft:'10px', paddingRight:'10px'}}>
      <h4>Subscribe for Sale!!!😍 </h4>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': {  width: '48ch', mb: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            error={!!error}
            helperText={error}
            id="outlined-required"
            label="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
      </Box>
      <Stack spacing={2} direction="row" >
        <Button 
          variant="contained" 
          color='success' 
          sx={{width: '50ch', p: 2}} 
          type="submit"
          
        >
          Subscribe
        </Button>
      </Stack>
    </div>
  );
}
