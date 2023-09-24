import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";


const Phones = () => {
    const phones = useLoaderData();
  
    // console.log(phones)
    return (
        <div className="my-7">
            <h1 className="text-3xl font-semibold text-center">Our Phones Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone> )
            }
            </div>
        </div>
    );
};

export default Phones;