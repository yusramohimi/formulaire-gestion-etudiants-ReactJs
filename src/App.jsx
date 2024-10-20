import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Detail from "./components/Detail";

function App() {
  const [stagiaires, setStagiaires] = useState([]);
  const [stagiaireDetail, setStagiaireDetail] = useState(null);
  const [stagiaireModifie, setStagiaireModifie] = useState(null); // Nouveau state pour gérer la modification

  const ajouterStagiaire = (stagiaire) => {
    if (stagiaireModifie) {
      // Si un stagiaire est en cours de modification, on met à jour
      modifierStagiaire(stagiaire);
    } else {
      setStagiaires([...stagiaires, stagiaire]);
    }
    setStagiaireModifie(null); // Réinitialisation après modification ou ajout
  };

  const supprimerStagiaire = (id) => {
    const resteStagiaires = stagiaires.filter((stagiaire) => stagiaire.id !== id);
    setStagiaires(resteStagiaires);
  };

  const afficherDetail = (stagiaire) => {
    setStagiaireDetail(stagiaire);
  };

  const afficherModification = (stagiaire) => {
    setStagiaireModifie(stagiaire); // On passe le stagiaire à modifier dans le state
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
