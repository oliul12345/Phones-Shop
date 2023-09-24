import { useEffect, useState } from "react";
import ShowPhoneCard from "../ShowPhone/ShowPhoneCard";

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow,setIsShow] = useState(false);
  const [total,setTotal] = useState(0);

  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItem) {
      setFavorite(favoriteItem);
      const sumPrice = favoriteItem.reduce((prevalue,currentValue) => prevalue + currentValue.price, 0);
      console.log(sumPrice);
      setTotal(sumPrice);
    } else {
      // console.log("No data found")
      setNoFound("No Favorite Found");
    }
  }, []);
  console.log(favorite);

  const handleRemoveFavorite = () =>{
    localStorage.clear();
    setFavorite([]);
    setNoFound("No Favorite Found");
  }

console.log(isShow)

  return (
    <div>
      {noFound ? (
        <p className="text-3xl font-bold flex justify-center items-center">
          {noFound}
        </p>
      ) : (
        <div>
           <div className="flex justify-center">
           {favorite.length > 0 && <button onClick={handleRemoveFavorite} className="bg-red-400 p-3 rounded-lg text-white hover:bg-red-800 my-7"> Favorite Delete</button>}
           </div>
           <h1 className="text-center font-semibold text-2xl mb-5 text-blue-700">Total Price : {total}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                isShow ? favorite.map((Phone) => (
                    <ShowPhoneCard key={Phone.id} Phone={Phone}></ShowPhoneCard>
                  )):
                
                  favorite.slice(0,2).map((Phone) => (
                    <ShowPhoneCard key={Phone.id} Phone={Phone}></ShowPhoneCard>
                  ))  
            }
          </div>
          
          {
            favorite.length > 2 &&  <div className="flex justify-center">
            <button onClick={() => setIsShow(!isShow)} className="bg-teal-700 p-3 rounded-lg hover:bg-orange-500 text-white mt-7">See more</button>
            </div>
          }
          
        </div>
      )}
    </div>
  );
};

export default Favorites;
