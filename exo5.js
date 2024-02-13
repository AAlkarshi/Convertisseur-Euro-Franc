document.getElementById('ZoneDeTexte').addEventListener('input', function() {

    // REGEX NBX à virgules et entiers
    let regex = /^\d*(\.\d+)?$/; 
    let valeurSaisie = this.value;

    // MSG ERREUR
    let messageErreur = document.getElementById("messageErreur");
    if (!messageErreur) {
        //Créer un élement DIV avec un id messageErreur et l'ajouter 
        messageErreur = document.createElement("div");
        messageErreur.id = "messageErreur";
        document.body.appendChild(messageErreur);
    }

// Si l'input est vide, nettoyer l'affichage précédent et le message d'erreur
    if (valeurSaisie === '') {
        let ValeurEntreeEuro = document.getElementById('resultatFrancs');
        if (ValeurEntreeEuro) ValeurEntreeEuro.textContent = '';
        messageErreur.textContent = '';

        //test() renvoi BOOL si regex est utilisé correctement.
    } else if (regex.test(valeurSaisie)) {
        messageErreur.textContent = ''; 

        //CONVERTIR EN NB et CONVERTIR calcul pour avoir en Franc
        let valeurEuro = Number(valeurSaisie);
        const tauxDeConversion = 6.55957;
        let resultat = valeurEuro * tauxDeConversion;

        //Arrondi à 2 chiffres après la virgule
        resultat = resultat.toFixed(2);

        let ValeurEntreeEuro = document.getElementById('resultatFrancs');
        if (!ValeurEntreeEuro) {
            ValeurEntreeEuro = document.createElement('div');
            ValeurEntreeEuro.id = 'resultatFrancs';
            document.body.appendChild(ValeurEntreeEuro);
        }

        // AFFICHER Valeur en FRANCS 
        ValeurEntreeEuro.textContent =  resultat + " Francs";
    } else {
        messageErreur.textContent = "Vous devez saisir une valeur numérique valide !";
    }
});
