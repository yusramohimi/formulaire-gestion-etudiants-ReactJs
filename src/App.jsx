import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Detail from "./components/Detail";

function App() {
  const [stagiaires, setStagiaires] = useState([]);
  const [stagiaireDetail, setStagiaireDetail] = useState(null);

  const ajouterStagiaire = (stagiaire) => {
    setStagiaires([...stagiaires, stagiaire]);
  };

  const supprimerStagiaire = (id) => {
    const resteStagiaires = stagiaires.filter(stagiaire => stagiaire.id !== id);
    setStagiaires(resteStagiaires);
  };

  const afficherDetail = (stagiaire) => {
    setStagiaireDetail(stagiaire);
  };

  const modifierStagiaire = (stagiaireModifie) => {
    const nouveauxStagiaires = stagiaires.map(stagiaire => 
      stagiaire.id === stagiaireModifie.id ? stagiaireModifie : stagiaire
    );
    setStagiaires(nouveauxStagiaires);
  };

  return (
    <>
      <Form ajouterStagiaire={ajouterStagiaire} />
      <Table 
        stagiaires={stagiaires} 
        supprimerStagiaire={supprimerStagiaire} 
        afficherDetail={afficherDetail} 
        modifierStagiaire={modifierStagiaire}
      />
      <Detail stagiaire={stagiaireDetail} />
    </>
  );
}

export default App;