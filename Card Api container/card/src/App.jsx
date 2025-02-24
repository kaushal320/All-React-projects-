import React, { useEffect, useState } from "react";
import "./style.css";
const App = () => {
  const [first, setfirst] = useState();
  useEffect(() => {
    async function DataFetch() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await data.json();
      setfirst(json);
    }
    DataFetch();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Product List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {first?.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              #{item.id} {item.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {item.body.substring(0, 80)}...
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
