import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Detail from "./components/Detail";

function App() {
  const [stagiaires, setStagiaires] = useState([]);
  const [stagiaireDetail, setStagiaireDetail] = useState(null);
  const [stagiaireModifie, setStagiaireModifie] = useState(null); 

  const ajouterStagiaire = (stagiaire) => {
    if (stagiaireModifie) {
     
      modifierStagiaire(stagiaire);
    } else {
      setStagiaires([...stagiaires, stagiaire]);
    }
    setStagiaireModifie(null); 
  };

  const supprimerStagiaire = (id) => {
    const resteStagiaires = stagiaires.filter((stagiaire) => stagiaire.id !== id);
    setStagiaires(resteStagiaires);
  };

  const afficherDetail = (stagiaire) => {
    setStagiaireDetail(stagiaire);
  };

  const afficherModification = (stagiaire) => {
    setStagiaireModifie(stagiaire); 
  };

  const modifierStagiaire = (stagiaireModifie) => {
    const nouveauxStagiaires = stagiaires.map((stagiaire) =>
      stagiaire.id === stagiaireModifie.id ? stagiaireModifie : stagiaire
    );
    setStagiaires(nouveauxStagiaires);
  };

  return (
    <>
      <Form ajouterStagiaire={ajouterStagiaire} stagiaireModifie={stagiaireModifie} />
      <Table
  stagiaires={stagiaires}
  supprimerStagiaire={supprimerStagiaire}
  afficherDetail={afficherDetail}
  modifierStagiaire={modifierStagiaire}
  afficherModification={afficherModification} // Add this
/>
      <Detail stagiaire={stagiaireDetail} />
    </>
  );
}

export default App;
