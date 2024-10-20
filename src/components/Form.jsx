import { useState } from "react";

function Form({ ajouterStagiaire }) {
  const [id, setId] = useState("");
  const [nom, setNom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [groupe, setGroupe] = useState("");
  const [module, setModule] = useState([]);
  const [filiere, setFiliere] = useState("");
  const [note, setNote] = useState("");

  function handleModule(e) {
    const value = e.target.value;
    if (module.includes(value)) {
      setModule(module.filter((mod) => mod !== value));
    } else {
      setModule([...module, value]);
    }
  }

  function handleFiliere(e) {
    setFiliere(e.target.value);
  }




  function save(e) {
    e.preventDefault();
    ajouterStagiaire({ id, nom, dateNaissance, groupe, module, filiere, note });

    
  }





  return (
    <div className="flex items-center justify-center mt-6">
      <form
        id="form"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={save}
      >
        <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
          Formulaire d'ajout d'un nouveau stagiaire
        </h1>
        <br />

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            Identifiant
          </label>
          <input
            value={id}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="id"
            id="id"
            type="text"
            placeholder="Entrez votre identifiant"
            
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
            Nom complet
          </label>
          <input
            value={nom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="nom"
            id="nom"
            type="text"
            placeholder="Entrez votre nom complet"
            
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateNaissance">
            Date de naissance
          </label>
          <input
            value={dateNaissance}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="dateNaissance"
            id="dateNaissance"
            type="date"
            
            onChange={(e) => setDateNaissance(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupe">
            Groupe
          </label>
          <select
            value={groupe}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="groupe"
            id="groupe"
            
            onChange={(e) => setGroupe(e.target.value)}
          >
            <option value="" disabled>
              Choisissez votre groupe
            </option>
            <option value="DD201">DD201</option>
            <option value="DD202">DD202</option>
            <option value="DD203">DD203</option>
            <option value="DD204">DD204</option>
            <option value="DD205">DD205</option>
            <option value="DD206">DD206</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="module">
            Modules
          </label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input type="checkbox" name="module" value="reactjs" onChange={handleModule} />
              <span className="ml-2">React JS</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="module" value="laravel" onChange={handleModule} />
              <span className="ml-2">Laravel</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="module" value="kotlin" onChange={handleModule} />
              <span className="ml-2">Kotlin</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="module" value="linux" onChange={handleModule} />
              <span className="ml-2">Linux</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filiere">
            Filière
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="filiere" value="DDOFS" onChange={handleFiliere} checked={filiere === "DDOFS"} />
              <span className="ml-2">DDOFS</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="filiere" value="IDOSR" onChange={handleFiliere} checked={filiere === "IDOSR"} />
              <span className="ml-2">IDOSR</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="filiere" value="DDOM" onChange={handleFiliere} checked={filiere === "DDOM"} />
              <span className="ml-2">DDOM</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
            Note
          </label>
          <input
            value={note}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="note"
            id="note"
            type="text"
            placeholder="Entrez votre note"
            
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            id="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;