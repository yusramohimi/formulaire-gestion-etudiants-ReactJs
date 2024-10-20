import React from "react";

function Detail({ stagiaire }) {
    if (!stagiaire) {
        return (
            <div className="flex flex-col justify-center items-center ">
                <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-dark dark:!shadow-none p-3">
                    <p className="text-base font-medium text-navy-700 dark:text-dark">
                        Aucune information disponible
                    </p>
                </div>
            </div>
        );
    }

    return (

    <div className=" flex items-center justify-center px-4 mt-6">
    
    <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
        <div className="p-4 border-b">
            <h2 className="text-2xl text-blue-500 font-bold">
                Détails du stagiaire 
            </h2>
            <p className="text-sm text-gray-500">
                Personal details and application. 
            </p>
        </div>
        <div>
            
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600">Identifiant :  </p>
                    <p> {stagiaire.id || "Aucune information disponible"} </p>
                </div>
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600">Nom complet : </p>
                    <p> {stagiaire.nom || "Aucune information disponible"}</p>
                </div>
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600">Date de naissance:</p>
                    <p> {stagiaire.dateNaissance || "Aucune information disponible"}</p>
                </div>
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600">Groupe :</p>
                    <p>{stagiaire.groupe || "Aucune information disponible"}</p>
                </div>
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600">Modules:</p>
                    <p>{stagiaire.module ? stagiaire.module.join(", ") : "Aucune information disponible"}</p>
                </div>
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600">Filiere :</p>
                    <p>{stagiaire.filiere || "Aucune information disponible"}</p>
                </div>
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600">Heure d'arrivée:</p>
                    <p>{stagiaire.note || "Aucune information disponible"}</p>
                </div>
           
        </div>
    </div>

</div>
    );
}

export default Detail;
