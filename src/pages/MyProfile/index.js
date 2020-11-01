import React, { useState, useEffect } from "react";
import axios from "axios";

import { Wrapper, Name, Image, Loader } from "./styles";

export const MyProfile = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.github.com/users/aggieN`);
      setName(result.data.name);
      /* setTimeOut function was used in order to show off my loader as the data was loading too fast */
      setTimeout(() => setPhoto(result.data.avatar_url), 2500);
      return () => clearTimeout();
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      {name && photo ? (
        <>
          <Name>{name}</Name>
          <Image src={photo} alt={name} />{" "}
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};
