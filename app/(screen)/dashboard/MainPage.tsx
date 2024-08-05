import React from "react";
import { MdBadge, MdSearch, MdSettings } from "react-icons/md";
import Challenge from "../../components/Challenge";
import { BiBadge } from "react-icons/bi";
import { FaAward, FaCertificate } from "react-icons/fa";
import Badge from "../../components/Badge";

const MainPage = () => {
  return (
    <main>
      <Challenge />
      <Badge />
    </main>
  );
};

export default MainPage;
