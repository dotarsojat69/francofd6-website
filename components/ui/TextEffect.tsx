'use client'
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Franco Freso Dixo',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        '',
        1000,
        'Frontend Engineer',
        2000,
        '',
        1000
      ]}
      
      speed={50}
      className="text-[2rem] md:text[3rem] text-[#78349f] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;