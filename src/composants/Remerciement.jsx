import React, { useState } from "react";

const Remerciement = (props) => {
  const [nom, setnom] = useState(props.match.params.nom);

  return (
    <div className="container rounded d-flex bg-light pt-3 flex-column justify-content-center align-items-center">
      <h4 className="mb-4">Merci {nom} pour votre inscription.</h4>

      <div className="form-group mb-3 ">
        <input
          type="text"
          maxLength={20}
          placeholder="Changez le prénom"
          className="form-control shadow-lg p-3 rounded"
          onChange={(event) => setnom(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Remerciement;
