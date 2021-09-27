import React from "react";
import Formulaire from "./Formulaire";
import Template from "./template/template.json";

const FormInscription = () => {
  return <Formulaire template={Template.questions} />;
};

export default FormInscription;
