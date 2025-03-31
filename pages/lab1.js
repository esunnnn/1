import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const exampleData = [
  {
    id: 1,
    firstname: "Khulan",
    lastname: "Suhdorj",
    job: "student",
    alive: "true",
    items: [
      {
        id: 11,
        name: "comb",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 167,
    image: "https://rud.is/khan/uploads/4/6/9/3/46935069/856530449.jpg",
  },
  {
    id: 2,
    firstname: "Ouk",
    lastname: "Suh",
    job: "student",
    alive: "true",
    items: [
      {
        id: 12,
        name: "cushion",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 168,
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQZKZcI6iwocSf03AuFZv0ZXqu7Z3omBeE3rFb_z2_nGKWA74-sgKvALw4o36thnxANPlNbG-UC6-jSh_4",
  },
  {
    id: 3,
    firstname: "Transhan",
    lastname: "Dorj",
    job: "student",
    alive: "true",
    items: [
      {
        id: 13,
        name: "eyelash curler",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 169,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/trandoshian-main_19804be7.jpeg?region=68%2C0%2C853%2C853",
  },
  {
    id: 4,
    firstname: "Kuki",
    lastname: "Koki",
    job: "student",
    alive: "true",
    items: [
      {
        id: 14,
        name: "jelly",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 200,
    image:
      "https://i.pinimg.com/736x/26/8f/c7/268fc7b7d04246b4710abadddabd9661.jpg",
  },
  {
    id: 5,
    firstname: "Azzaya",
    lastname: "Suho",
    job: "student",
    alive: "true",
    items: [
      {
        id: 15,
        name: "glasses",
      },
      {
        id: 15,
        name: "qwe",
      },
    ],
    height: 146,
    image: "https://i1.sndcdn.com/artworks-000196631792-qil20z-t500x500.jpg",
  },
  {
    id: 6,
    firstname: "Azva",
    lastname: "Dondog",
    job: "student",
    alive: "true",
    items: [
      {
        id: 16,
        name: "mascara",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 148,
    image:
      "https://image.isu.pub/220308162252-1688e26cdb56378fd9356122800b1e2b/jpg/page_1_thumb_large.jpg",
  },
  {
    id: 7,
    firstname: "Ayden",
    lastname: "Anand",
    job: "student",
    alive: "true",
    items: [
      {
        id: 17,
        name: "phone",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 153,
    image: "https://m.media-amazon.com/images/I/61TGfufxpGL._AC_UY1000_.jpg",
  },
  {
    id: 8,
    firstname: "Aeden",
    lastname: "Aydon",
    job: "student",
    alive: "true",
    items: [
      {
        id: 18,
        name: "necklace",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 155,
    image:
      "https://yt3.googleusercontent.com/oaoDNpR1Br7HH0fjoZsgpyXQlFdMpBaSYuIbMVoqSIuB9DFL51lL1NwNUUkix_rWG9FFJEPteA=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 9,
    firstname: "Anduul",
    lastname: "Baldan",
    job: "student",
    alive: "true",
    items: [
      {
        id: 19,
        name: "sweatpants",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 150,
    image: "https://i.ebayimg.com/images/g/V-QAAOSwGYNeBSyd/s-l400.jpg",
  },
  {
    id: 10,
    firstname: "Esun",
    lastname: "Ysu",
    job: "student",
    alive: "true",
    items: [
      {
        id: 20,
        name: "money",
      },
      {
        id: 20,
        name: "money",
      },
    ],
    height: 210,
    image:
      "https://preview.redd.it/l0m6jy5zqwxa1.png?width=640&crop=smart&auto=webp&s=c011ad1e3fcf666ade161a3a48ff6419fb944882",
  },
];

export default function lab1() {
  const [count, setCount] = useState("");
  const [name, setName] = useState("");
   const router = useRouter();
  console.log("lenghtj --->", exampleData.length);
  const filter = exampleData.filter((item) =>
    item.firstname.toLowerCase().includes(name.toLowerCase())
  );
  console.log(filter);
  return (
    <div className="min-h-screen  bg-zinc-900 p-2 flex flex-col items-center">
       <button
                          className="  border border-black bg-white m-3 p-2 text-black " 
                          onClick={() => { router.push("main"); }}
                          aria-label="Go push"
                        >
                         Back
                          
                        </button>
      <div className="flex items-center gap-3 mb-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <input
          type="text"
          placeholder="Search an user"
          className="w-500 p-3 px-8 py-4 border rounded-lg  border-gray-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-red-600 text-white px-5 py-4  "
          onClick={() => setCount(!count)}
        >
          change
        </button>
        <p className="ml-3">{!count}</p>
      </div>
      {filter.length < 0 ? (
        <p>No username found</p>
      ) : (
        <div
          className={`${
            count == false ? "grid " : "flex flex-col w-full"
          } xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4`}
        >
          {filter.map((element) => (
            <div className={`w-full  m-2 p-3 rounded-xl bg-zinc-600 ${count == false ? "flex flex-col  items-center justify-center" : "flex"}`}>
              <img
                className={`${
                  count == true ? "w-30 h-30  " : "flex flex-col "
                }  rounded-xl  w-60 h-60`}
                src={element.image}
              ></img>

              <div className="p-4  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <p className=" font-semibold text-white">
                  Username: {element.firstname}
                </p>
                <p className=" font-sm text-red-700">
                  Lastname: {element.lastname}
                </p>
                <p className="text-gray-500 text-sm">Job: {element.job}</p>
                <p className="text-gray-500 text-sm">
                  Height: {element.height} cm
                </p>
                <div className="mt-2">
                  <p className="font-semibold text-rose-500">Items:</p>
                  <ul className="text-red-600 mt-2 text-sm">
                    {element.items.map((item) => (
                      <li
                        key={item.id}
                        className="bg-red-300 px-2 py-1 rounded-md inline-block m-1"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
              
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
}
