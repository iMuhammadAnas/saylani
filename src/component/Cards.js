import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Courses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/323618449_1332508417580791_8927909563724310975_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF-eJzLgIFW6hDTQnY-8F0vaWTtL6IPo91pZO0vog-j3bQvHBD7x_mum_7X9SoCZEdZTJZXUOTAavgcQ0QsXD6t&_nc_ohc=mh8TcFXIiR0AX9E_zo-&_nc_ht=scontent-frt3-2.xx&oh=00_AfCo7hV-56Z-6cFqEzemzpneIU5K4qy0Uvz3Isxz-6WTxQ&oe=63BE2D56'
              text='Web & Mobile app Development'
              label='Adventure'
            />
            <CardItem
              src='https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/299783862_4947110655390907_5626169389361251166_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFOw84zCX5EAv3FB5N8UTE5eDjBvW7YQO94OMG9bthA77nEbSiAHn1ThHxs-bzI2RTkkfoGcQNVRhF9HWlaPt81&_nc_ohc=ptXaRS3FF3MAX_yJMtP&_nc_ht=scontent-frt3-2.xx&oh=00_AfDu-zj4_lR5WtpRzk-TXea7GWt5OmLQyA9PbX4uzxxpAw&oe=63BE9D0A'
              text='Graphics Design & Video Animation'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/321349303_678804147297764_6929844831969857429_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGsT-7b2XzPy_M3Fy68z9Wt-OFlOonf7pn44WU6id_umc7vpSS4LYMpwX0gL4sNUa8MdwrPPh5xfkuIgq9G-9iQ&_nc_ohc=L1tZxlFjwnwAX-ORt89&_nc_ht=scontent-frt3-2.xx&oh=00_AfBLHqBe2KSdOxRL2P-j0dIXZAwiXK9Zz5MXio8lHQ_h6w&oe=63BE22AC'
              text='Techno Child'
              label='Mystery'
            />
            <CardItem
              src='https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/313914368_5189437907824846_8613707112394436689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHrd6d7za85ylroenoeuiqfnpQBRNizWmqelAFE2LNaam17OSjt-cSGvwASxLGIrciWdtwZJ3YtelK6ySSnnTAr&_nc_ohc=FcAKc8rcR78AX_pN8Sm&_nc_ht=scontent-frt3-1.xx&oh=00_AfCuApVGHJCnxIJPkfhVPR9wXXwiFVaXt6SHdCqBXhJopQ&oe=63BD0F9E'
              text='Mobile Repairing'
              label='Adventure'
            />
            <CardItem
              src='https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/289922684_4804154629686511_4774435586911139991_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG8nJkW55mJjYpCG6FOAteFNN6Zlebj6n403pmV5uPqfqje3nJ45XuHx6E0SuKWmB1w_PfK0k1Ot7Zttr1fQVv3&_nc_ohc=CObk_HPAKdMAX_IcjfK&_nc_ht=scontent-frt3-2.xx&oh=00_AfAep6HF3V37p9DbvZhufIyegcp3TdClCiBIKtnZ1xG09Q&oe=63BE4236'
              text='Artificial Intelligence & Chatbot'
              label='Adrenaline'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
