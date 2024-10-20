
import React from "react";

function Table({ stagiaires, supprimerStagiaire, afficherDetail,afficherModification }) {
  
  const handleDelete = (id) => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer ce stagiaire ?");
    if (confirmation) {
      supprimerStagiaire(id);
    }
  };


  return (
    <>
      <div className="overflow-x-auto">
        <div className=" flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Identifiant</th>
                    <th className="py-3 px-6 text-left">Nom complet</th>
                    <th className="py-3 px-6 text-center">Date de naissance</th>
                    <th className="py-3 px-6 text-center">Groupe</th>
                    <th className="py-3 px-6 text-center">Modules</th>
                    <th className="py-3 px-6 text-center">Filière</th>
                    <th className="py-3 px-6 text-center">Note</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {stagiaires.map((stagiaire) => (
                    <tr
                      key={stagiaire.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left">{stagiaire.id}</td>
                      <td className="py-3 px-6 text-left">{stagiaire.nom}</td>
                      <td className="py-3 px-6 text-center">
                        {stagiaire.dateNaissance}
                      </td>
                      <td className="py-3 px-6 text-center">{stagiaire.groupe}</td>
                      <td className="py-3 px-6 text-center">
                        {stagiaire.module.join(", ")}
                      </td>
                      <td className="py-3 px-6 text-center">{stagiaire.filiere}</td>
                      <td className="py-3 px-6 text-center">{stagiaire.note}</td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center space-x-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                             onClick={() => afficherDetail(stagiaire)}
                          >
                            Afficher
                          </button>
                          <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => afficherModification(stagiaire)} 
                          >
                            Modifier
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleDelete(stagiaire.id)} 
                          >
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
