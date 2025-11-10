import React, { use } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <div>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
