import { React, useEffect, useState } from "react";

const Content = () => {
  const [cars, setCars] = useState([]);

  /* useEffect(() => {
    console.log("First useEffect runnig");
  });

  useEffect(() => {
    console.log("Second useEffect running");
  }, []);*/

  // runs once but reruns when user is typing something inside the input
  const handleFetch = () => {
    fetch("http://localhost:3002/cars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        console.log("Car data:", data);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const carList = cars.map((car) => {
    return (
      <li key={car.id}>
        <h3>{car.make}</h3>
        <p>
          Car Model:{car.model}
          <br />
          Car Year:{car.year}
          <br />
          Car Make: {car.color}
          <br />
          Car Price: {car.price}
          <br />
          Car Fuel Type{car.fuelType}
          <br />
        </p>
        <br />
      </li>
    );
  });

  return (
    <div className="bg-blue-300 p-8">
      <ol className="list-decimal">{carList}</ol>
    </div>
  );
};

export default Content;
