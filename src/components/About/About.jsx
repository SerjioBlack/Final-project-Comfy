import React, { useState } from 'react';
import '@fontsource/roboto/400.css';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';;


const About = () => {
  const [showFullText, setShowFullText] = useState(false);
  const textStyle = {
    fontFamily: 'Roboto, sans-serif',
  };

  const fullText = `The Comfy company has existed on the Ukrainian market for more than 10 years and during this time has managed to receive the title of one of the best stores of modern equipment. It all started with small points of sale, until the company decided to conquer the world of online trading. Since then, any resident of Ukraine can order original equipment from global manufacturers with fast delivery to their city. What was the reason for Comfy’s success among Ukrainians?

  Affordable prices, because the Comfy online store of household appliances makes only the best offers to customers and does not inflate the cost of its goods.
  Providing additional services for warranty service, installation and configuration of equipment.
  A professional contact center with which the buyer can contact in any convenient way and receive qualified advice.
  Possibility of purchasing goods on credit on favorable terms from one of the leading banks in Ukraine.
  Comprehensive information about each product, including real photos, manufacturing materials, video reviews and instructions for use.
  Selling only certified equipment and electronics that have passed all stages of testing and approved by specialists.
  Providing two types of warranty - from the Comfy store and the official manufacturer.
  Extended Service Program (ESP), which makes warranty conditions even more acceptable to the buyer.
  Possibility of returning goods within 30 days after receipt, subject to the rules established by the Law “On the Protection of Consumer Rights”.
  Comfy offers a huge range of products, ranging from cooking equipment to game consoles.
  The positive reputation that the store has received from customers over many years of existence on the Ukrainian market.
  Brand features of an online electronics store
  Comfy.ua is a popular online platform that presents thousands of products for various purposes. Thanks to a wide range of electronics and accessories, every user will find the optimal solution. Here you can buy household appliances, goods for games, recreation and entertainment. A unique, well-recognized style and excellent service are the main features of Comfy.ua. A branded hardware store offers only original products. Without exception, all items in the catalog are provided with a manufacturer's quality guarantee. Interaction directly with brands allows the company to maintain competitive prices for goods. They are maximally accessible to every user thanks to the minimum markup. For this reason, shopping at Comfy.ua is profitable and convenient, and the store’s popularity is growing every year.
 
  A wide range of
  In the Comfy.ua online catalog you can select and order electronics for home and office, equipment for entertainment, study, work and much more. A multi-brand online electronics store within one category sells goods from different price segments, thereby satisfying the needs of customers with any requirements and financial capabilities. Flexibility in assortment provides an ideal environment in which users can quickly find products that are optimal for their specific circumstances. On the Comfy.ua website you can order products from the following categories:
 
  smartphones and phones;
  laptops, tablets and computer equipment;
  TVs and multimedia;
  Home Appliances;
  smart watches and gadgets;
  kitchen appliances;
  audio;
  game consoles and gaming;
  photo and video products;
  beauty and health;
  dishes;
  household chemicals;
  home and leisure;
  Comfy KIDS;
  tools and auto products;
  OUTLET.
  For the convenience of users, “New Galaxy Items” and “Services, Subscriptions, Software” are also included in a separate category. It will take only a few minutes to find the necessary products with this grouping system. A special filter simplifies this process as much as possible.`;

  const paragraphs = fullText.split('\n');

  return (
    <div style={{ padding: '20px' }}>
      <p style={textStyle}>{paragraphs[0]}</p>

      {!showFullText && (
        <Button
          variant="contained"
          color="success"
          onClick={() => setShowFullText(true)}
        >
          Show more
        </Button>
      )}

      {showFullText && paragraphs.slice(1).map((paragraph, index) => (
        <p key={index} style={textStyle}>{paragraph}</p>
      ))}
    </div>
  );
};

export default About;
