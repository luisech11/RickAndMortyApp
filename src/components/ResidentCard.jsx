import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border border-green-500 rounded p-4">
      <header>
        <img
          src={residentInfo?.image}
          alt=""
          className="border border-green-500 rounded"
        />
        <div className="flex items-center gap-2 p-2 rounded-full ">
          <div
            className={`h-[10px] aspect-square ${
              residentStatus[residentInfo?.status]
            }`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section>
        <h3> {residentInfo?.name} </h3>
        <ul>
          <li>Species: {residentInfo?.species} </li>
          <li>Origin: {residentInfo?.origin.name}</li>
          <li>Times appear: {residentInfo?.episode.length}</li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
