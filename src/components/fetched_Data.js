import React, { createContext, useContext, useEffect, useState } from "react";

// const host = 'http://127.0.0.1:8000/api/';

const Marksheet = createContext();

const MarkContext = ({ children }) => {
  const [alldata, setData] = useState([]);
  const [marksheet, setMarksheet] = useState([]);
  const [allclass, setAllClass] = useState([]);
  const [halfyearly, setHalfYearly] = useState([]);
  const [yearly, setYearly] = useState([]);
  const [changeCount, setChangeCount] = useState(1);

  useEffect(() => {
    // getData("");
    // getMarksheet("");
    getAllClass("");
    getHalfYearly("");
    getYearly();
  }, [changeCount]);

  const getData = async () => {
    const response = await fetch(``, {
      method: "GET",
    });

    const json = await response.json();
    console.log(json);
    setData(json.data);
  };
  const getMarksheet = async () => {
    const response = await fetch(
      `https://api.bhattacharjeesolution.in/laravalAPI/schoolnew/api/marksheet`,
      {
        method: "GET",
      }
    );

    const json = await response.json();
    if (json.status === "success") {
      setMarksheet(json.data);
    } else {
      console.log("error: " + json.status);
    }
  };

  const getAllClass = async () => {
    const response = await fetch(
      `https://api.bhattacharjeesolution.in/laravalAPI/schoolnew/api/class`,
      {
        method: "GET",
      }
    );

    const json = await response.json();
    if (json.status === "success") {
      setAllClass(json.data);
    } else {
      console.log("error: " + json.status);
    }
  };

  const getHalfYearly = async () => {
    const response = await fetch(``, {
      method: "GET",
    });

    const json = await response.json();
    if (json.status === "success") {
      setHalfYearly(json.data);
    } else {
      console.log("error: " + json.status);
    }
  };
  const getYearly = async () => {
    const response = await fetch(``, {
      method: "GET",
    });
    const json = await response.json();
    if (json.status === "success") {
      setYearly(json.data);
    } else {
      console.log("error: " + json.status);
    }
  };

  return (
    <Marksheet.Provider
      value={{
        alldata,
        marksheet,
        allclass,
        halfyearly,
        yearly,
        changeCount,
        getData,
        getMarksheet,
        getAllClass,
        getHalfYearly,
        getYearly,
      }}
    >
      {children}
    </Marksheet.Provider>
  );
};

export default MarkContext;

export const MarksheetState = () => {
  return useContext(Marksheet);
};
