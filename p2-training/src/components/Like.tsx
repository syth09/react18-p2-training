import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  // Declared a state variable to determin if the heart should be full or empty
  const [status, setStatus] = useState(true);

  if (status)
    return (
      <AiFillHeart color="#f567bc" size={40} onClick={() => setStatus(false)} />
    );
  return <AiOutlineHeart size={40} onClick={() => setStatus(true)} />;
};

export default Like;
