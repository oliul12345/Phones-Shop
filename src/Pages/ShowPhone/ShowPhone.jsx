import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowPhoneCard from "./ShowPhoneCard";

const ShowPhone = () => {
  const [Phone, setPhone] = useState({});
  const { id } = useParams();
  console.log(id);
  const PhonesData = useLoaderData();
  useEffect(() => {
    const findPhone = PhonesData?.find((phones) => phones.id === id);
    setPhone(findPhone);
  }, [id, PhonesData]);
  console.log(Phone);
  return (
    <div>
      <ShowPhoneCard Phone={Phone}></ShowPhoneCard>
    </div>
  );
};

export default ShowPhone;
