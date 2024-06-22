import React from "react";

function TopAll() {
  return (
    <>
      <div className="bg-[#D7E4FF] rounded-3xl p-6 flex-col flex justify-center items-center gap-4 relative">
        <h1 className="text-[#083FB1] md:text-3xl font-extrabold">
          Top College in India
        </h1>
        <p>Found 43,796 colleges in India </p>
        <p className="text-center md:w-[85%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          aspernatur temporibus rerum amet optio possimus atque reiciendis earum
          quae modi sequi odit, facere iure cum id aliquam aperiam nam delectus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae
          et quibusdam est placeat aliquam nulla iure ea ex, reprehenderit
          excepturi dolore doloremque veritatis, consequuntur vel, facere quo
          vero reiciendis.
        </p>
        <span className="text-blue-500">Read more</span>
        <div className="absolute top-1 right-1 px-4 py-1 rounded-2xl bg-[#6697FC] bg-opacity-50">
          Updated on 23 May 2024 11:59 IST
        </div>
      </div>
    </>
  );
}

export default TopAll;
