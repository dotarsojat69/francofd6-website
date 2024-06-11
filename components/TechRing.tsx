import { collabApps } from '@/data';
import React from 'react';

const TechRing = () => {
  return (
    <div className="relative flex w-[22rem] aspect-square border border-n-6 rounded-full scale-75 md:scale-100">
      <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
          <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
            <img
              src="./stack-icon.png"
              width={48}
              height={48}
              alt="stack"
            />
          </div>
        </div>
      </div>

      <ul className="absolute inset-0 flex justify-center items-center rotate-icons">
        {collabApps.map((app, index) => (
          <li
            key={app.id}
            className="absolute flex justify-center items-center"
            style={{ transform: `rotate(${index * 45}deg) translateX(11rem) rotate(-${index * 45}deg)` }}
          >
            <div className="relative flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl">
              <img
                className="m-auto"
                width={app.width}
                height={app.height}
                alt={app.title}
                src={app.img}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechRing;
