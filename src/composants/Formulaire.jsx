import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

// Formulaire réutilisable
const Formulaire = ({ template }) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (valeurs) => {
    localStorage.setItem("form", JSON.stringify(valeurs));
    const DonneeSauvegarde = JSON.parse(localStorage.getItem("form"));
    const { first_name } = DonneeSauvegarde;

    history.push(`/merci/${first_name}`);

    // l'envoi du POST
    fetch("https://enovode7uq1r.x.pipedream.net/", {
      method: "POST",
      body: localStorage.getItem("form"),
    }).then((response) => response.json());
  };

  const renderOptions = (options) => {
    return options.map((_option) => {
      let { value, label } = _option;
      return (
        <>
          <option key={value} value={value}>
            {label}
          </option>
        </>
      );
    });
  };

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { name, label, type, options } = field;
      switch (type) {
        case "text":
          return (
            <div key={name} className="form-outline p-2 col">
              <input
                key={name}
                id={name}
                type={type}
                className="form-control bg-light bg-gradient mb-3 border-0 rounded p-2 shadow-lg "
                name={name}
                placeholder={label}
                {...register(name)}
              />
            </div>
          );

        case "dropdown":
          return (
            <div key={name} className="form-group mb-4 p-2 col">
              <select
                key={name}
                id={name}
                name={name}
                className="form-select border-0 p-2 shadow-lg bg-light"
                aria-label="Default select example"
                {...register(name)}
              >
                <option key={name} defaultValue>
                  Selectionnez votre {label}
                </option>
                {renderOptions(options, label)}
              </select>
            </div>
          );

        default:
          return (
            <div key={"1"}>
              <span key={"1"} class="text-danger">
                Champ invalide
              </span>
            </div>
          );
      }
    });
  };

  const renderQuestions = () => {
    return template.map((questions) => {
      let { title, fields } = questions;
      return (
        <div key={title} className="col">
          <div
            key={title}
            className="border px-3 mt-4 border-2 bg-gradient shadow-sm rounded"
          >
            <h3 className=" mt-4 d-flex text-wrap flex-column mb-4 text-center">
              {title}
            </h3>
            {renderFields(fields)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div
        className=" rounded-top display-5 bg-primary bg-gradient text-center text-white border-5 p-4"
        style={{ letterSpacing: 5, fontWeight: 600 }}
      >
        INSCRIPTION
      </div>

      <form
        className="border-primary bg-light border-5 shadow-sm px-5 pb-4 d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row gx-5 align-items-start">{renderQuestions()}</div>
        <button
          type="submit"
          className=" btn mt-4 btn-primary px-5 btn-lg btn-block "
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default Formulaire;
