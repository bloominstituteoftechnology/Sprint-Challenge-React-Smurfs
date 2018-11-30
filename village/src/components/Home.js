import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/smurfs">
        <button>Go to the village</button>
      </Link>
    </div>
  );
}
