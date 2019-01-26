import React from "react";
import axios from "axios";
import Smurfs from "./Smurfs";

const Gargamel = props => {
  return (
    <div className="Smurfs">
      <Smurfs
        smurfs={props.smurfs}
        kill={props.kill}
        update={props.update}
        {...props}
      />
    </div>
  );
};

export default Gargamel;
