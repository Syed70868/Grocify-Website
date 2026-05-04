import React from 'react';
import Heading from '../Heading/Heading';
import FruitsCat from '../../assets/fruits-and-veggies.png';
import DairyCat from '../../assets/dairy-and-eggs.png';
import MeatCat from '../../assets/meat-and-seafood.png';
import Button from '../Button/Button';

const Category = () => {
  const renderCard = category.map((card) => {
    return (
      <div className="flex-1 ">
        <div className="w-full min-h-[20vh] relative -mb-10">
          <img src={card.image} className="absolute bottom-0" />
        </div>
        {/* Card Image */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          {/* Card Content */}
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Button text={'See All'} />
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading spanText={'Shop'} text={'By Category'} />

        {/* Category Card */}
        <div className="flex gap-10 mt-15">{renderCard}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description:
      'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image: FruitsCat,
  },
  {
    id: 2,
    title: 'Meat & SeaFood',
    description:
      'High-quality, responsibolity sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    image: MeatCat,
  },
  {
    id: 3,
    title: 'Dairy & Eggs',
    description:
      'Wholesome dairy products and free-range eggs . From creamy milk and yougurt to artisanal chhese.',
    image: DairyCat,
  },
];
