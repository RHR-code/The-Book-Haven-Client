import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Tooltip } from "react-tooltip";

const ProfileLogo = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <div className="relative flex items-center">
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content={user?.displayName}
        >
          <button className="flex items-center">
            <img
              className="md:w-11 md:h-11 w-8 h-8 rounded-full object-cover z-10"
              src={user?.photoURL}
              alt=""
            />
          </button>
        </a>
        <Tooltip place="top-end" id="my-tooltip" />
      </div>
    </div>
  );
};

export default ProfileLogo;
