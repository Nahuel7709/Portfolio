import { companies, testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'


const Courses = () => {
  return (
    <div className="py-20" id="courses">
      <h1 className="heading">
        Completed and Ongoing
        <span className="text-purple"> Education </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-16 max-lg mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2 ">
              <img src={img} alt={name} className=" w-40 max-w-60 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses