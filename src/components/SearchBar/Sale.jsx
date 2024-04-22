import React from 'react';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { styled } from '@mui/material/styles';
import PercentIcon from '@mui/icons-material/Percent';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const StyledUl = styled('ul')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0, 
  listStyle: 'none', 
});

const StyledLi = styled('li')({
display:'flex',
  margin: '0 10px', 
  padding:'10px 20px',
  borderRadius: '5px', 
  backgroundColor: 'lightgray',
  width:'100%'
});

const StyledA = styled('a')({
    display: 'flex',
    justifyContent:'space-between',
    gap: '10px',
    alignItems:'center',
    textDecoration:'none',
    color:'black',
     
  });

export default function Sale() {
  return (
    <StyledUl>
      <StyledLi>
        <StyledA href="">
          <LoyaltyIcon />
          <p>Merch here!!! We donating to army!</p>
        </StyledA>
      </StyledLi>
      <StyledLi>
      <StyledA href="">
          <PercentIcon />
          <p>Big Sale only this weekend!</p>
        </StyledA>
      </StyledLi>
      <StyledLi>
      <StyledA href="">
          <CurrencyBitcoinIcon />
          <p>We apply Bitcoin</p>
        </StyledA>
      </StyledLi>
    </StyledUl>
  );
}
