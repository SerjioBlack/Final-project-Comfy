import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReplayIcon from '@mui/icons-material/Replay';

const card = {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'flex-start',
 };

 const icon = {
    padding: '20px', color: 'green'
 }

const Features = () => {
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '20px', fontFamily: 'Roboto, sans-serif', border:'1px solid lightgrey' }}>
            <div style={card}>
                <LocalShippingIcon style={icon} />
                <div>
                    <h4>Shipment</h4>
                    <p>Pickup from the Comfy store, delivery to the address or to the Novaya Poshta and Meest branches</p>
                </div>
            </div>

            <div style={card}>
                <LocalPoliceIcon style={icon} />
                <div>
                    <h4>Warranty</h4>
                    <p>Certified equipment with an official guarantee from the manufacturer.</p>
                </div>
            </div>

            <div style={card}>
                <PointOfSaleIcon style={icon}/>
                <div>
                    <h4>Payment</h4>
                    <p>You can pay for your purchase in cash, by card or by bank transfer.</p>
                </div>
            </div>

            <div style={card}>
                <ReplayIcon style={icon}/>
                <div>
                    <h4>Return</h4>
                    <p>Return of goods is carried out within 14 days after purchase, in accordance with current law</p>
                </div>
            </div>
        </div>
    )
}

export default Features