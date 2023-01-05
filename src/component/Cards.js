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
              src='https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/306856502_5029691153799523_3695609696872407750_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFjRFBI4ZT9q1uQNrLd_xaVhcuKwn4j5aKFy4rCfiPlomeW0fVx50n52xddcQ-5b_mAUVnM4nA3akJT7VbxuxRK&_nc_ohc=kuLHMqKLzV0AX_Q2tYm&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCkVwvn7wd0Yuidlnp91RdHlje6ZkeFWeM4fRdOWAYW0A&oe=63B39170'
              text='Web & Mobile app Development'
              label='Adventure'
            />
            <CardItem
              src='https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/299783862_4947110655390907_5626169389361251166_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFOw84zCX5EAv3FB5N8UTE5eDjBvW7YQO94OMG9bthA77nEbSiAHn1ThHxs-bzI2RTkkfoGcQNVRhF9HWlaPt81&_nc_ohc=g1d2QD6S_WUAX_bOrUV&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCY-TDI_7G2OA_NFz6jvl7qe0oFLhXGAOhot42hTDnDMA&oe=63B4B9CA'
              text='Graphics Design & Video Animation'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/322123759_490861376522720_70877101553489490_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHQvtHG32C9NiZ6uzEPrHgyuaX8Lzu_Hpy5pfwvO78enPAiMywyWmDOsixfhCf-A137jM7EnchvZtsc6Vz1FaQT&_nc_ohc=PXuaj_9CpuEAX82fV56&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCpsXmCS79RLwyx-I2ZFj6TeRrRCcz6w0-AU0iEC8ZZHQ&oe=63B43D1D'
              text='Techno Child'
              label='Mystery'
            />
            <CardItem
              src='https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/313914368_5189437907824846_8613707112394436689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHrd6d7za85ylroenoeuiqfnpQBRNizWmqelAFE2LNaam17OSjt-cSGvwASxLGIrciWdtwZJ3YtelK6ySSnnTAr&_nc_ohc=uvA5f86ETWkAX9XdtWh&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDLXdmk3_n3btk7Mj7WYVVCQTqfVdo6VtCPSnRFh_loTQ&oe=63B5269E'
              text='Mobile Repairing'
              label='Adventure'
            />
            <CardItem
              src='https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/289922684_4804154629686511_4774435586911139991_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG8nJkW55mJjYpCG6FOAteFNN6Zlebj6n403pmV5uPqfqje3nJ45XuHx6E0SuKWmB1w_PfK0k1Ot7Zttr1fQVv3&_nc_ohc=tb4aNcKHAHEAX8SCUKG&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBAjzUmYPLxPKV16DXPCO-yzr3vkywpT25yo7F1188ypQ&oe=63B45EF6'
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
