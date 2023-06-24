import React, { useState, useEffect, useRef } from "react";

const LazyLoading = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
        );
        const json = await response.json();
        setData((prevData) => [...prevData, ...json.data]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current.scrollTop + containerRef.current.clientHeight >=
        containerRef.current.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(data);
  return (
    <div style={{ height: "400px", overflowY: "auto" }} ref={containerRef}>
      {data.map((item) => (
        <div
          key={item.id}
          style={{ padding: "10px", border: "1px solid #ccc" }}
        >
          <p>
            <b>Name: </b>
            {item.name}
          </p>
          <p>
            <b>Number of Trips: </b> {item.trips}
          </p>
          <p>
            <b>Country: </b> {item.airline[0].country}
          </p>
          <p>
            <b>Airline Name: </b>
            {item.airline[0].name}
          </p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default LazyLoading;
