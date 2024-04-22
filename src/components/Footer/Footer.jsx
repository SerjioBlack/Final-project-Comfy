import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FooterForm from './FooterForm';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const iconDiv = {
    display:'flex', alignItems:'center', gap:'10px', justifyContent:'space-between' 
};
const icon = {
    width:35, height:35, color: 'green'
 }

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>

            <div style={{display:'flex', alignItems:'center', border:'1px solid lightgrey', padding:'5px', borderRadius:'5px'}}>
                <img src="src/assets/qr.PNG" alt="qr" />
                <p>Download our App from PlayMarket or Appstore and get a discount 10% on first purchase</p>
            </div>

            <FooterForm />

          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item style={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'13px' }}>
            <h3>Comfy</h3>
            <a href="#">About company</a>
            <a href="#">The shops</a>
            <a href="#">Contacts</a>
            <a href="#">Press center</a>
            <a href="#">Working at COMFY</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Tender</a>
            <a href="#">For partners</a>
          </Item>
        </Grid>
        <Grid item xs={2}>
        <Item style={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'13px' }}>
            <h3>Services</h3>
            <a href="#">Bonus program</a>
            <a href="#">Gift cards</a>
            <a href="#">COMFY books</a>
            <a href="#">Credit and payment</a>
            <a href="#">Trade In</a>
            <a href="#">Service contracts</a>
            <a href="#">Cashless account</a>
            <a href="#">Payment</a>
          </Item>
        </Grid>
        <Grid item xs={2}>
        <Item style={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'13px' }}>
            <h3>Buyer assistance</h3>
            <a href="#">Customer Help Center</a>
            <a href="#">Personal assistant</a>
            <a href="#">Find order</a>
            <a href="#">Delivery terms</a>
            <a href="#">Exchange and return</a>
            <a href="#">Guarantee</a>
            <a href="#">Product status under repair</a>
            <a href="#">Rules for the site</a>
          </Item>
        </Grid>

        <Grid item xs={2}>
          <Item style={{display:'flex', flexDirection:'column', alignItems:'start', }}>
            <h3>Consulting</h3>
            <p style={{ fontSize:'21px', fontWeight:'700', color:'green', lineHeight:'1px' }}>0-800-303-505</p>
            <p style={{ fontSize:'21px', fontWeight:'700', color:'green', lineHeight:'1px'  }}>0-800-600-506</p>

            <div style={iconDiv}>
            <HelpOutlineIcon style={icon} />
            <p>Help Center</p>
            </div>

            <div style={iconDiv}>
            <MarkUnreadChatAltIcon style={icon} />
            <p>Chat</p>
            </div>

            <div style={iconDiv}>
            <TelegramIcon style={icon} />
            <p>Telegram</p>
            </div>

            <div style={iconDiv}>
            <WhatsAppIcon style={icon} />
            <p>WhatsApp</p>
            </div>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
