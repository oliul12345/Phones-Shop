import swal from "sweetalert";

const ShowPhoneCard = ({Phone}) => {
    const {image,brand_name,phone_name,id} = Phone;

    const handleFavorite = () =>{
       const addToFavoritesArray = [];
       const favoriteItem = JSON.parse(localStorage.getItem('favorites'));

       if(!favoriteItem){
        addToFavoritesArray.push(Phone);
        localStorage.setItem('favorites',JSON.stringify(addToFavoritesArray))
        swal("Good job!", "You clicked the button!", "success");
       }
       else{

        const isExists = favoriteItem.find(phone => phone.id === id)
        console.log(isExists)
        if(!isExists){
            addToFavoritesArray.push(...favoriteItem,Phone)
            localStorage.setItem('favorites',JSON.stringify(addToFavoritesArray))
            // alert("products add")
            swal("Good job!", "You clicked the button!", "success");
        }
         else{
            swal("Already added!", "You can't clicked the button!", "error");
         }
     
       }

    }

  return (
    <div className="flex justify-center items-center ">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>

          <a class="inline-block" href="#">
            <button
              onClick={handleFavorite}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // eslint-disable-next-line react/no-unknown-property
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linecap="round"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowPhoneCard;
