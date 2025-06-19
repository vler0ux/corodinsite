export function determineHeure( cadranLune : 1|2, cadranSoleil:1|2, cadranTerre:1|2):number{

    let valeurTerre = cadranTerre;
    let pouvoirTerre = cadranTerre;
    let ignorerTerre = false;

    if (cadranSoleil === 1) {
        ignorerTerre = true;
    }    else if(cadranSoleil === 2) {
    valeurTerre = cadranTerre * 2;
}


let resultat = cadranLune + cadranSoleil + valeurTerre;


if(!ignorerTerre){
    if (pouvoirTerre === 1) {
    resultat += 2;
    } else if (pouvoirTerre === 2) {
    return 6;
    }
}


    if (cadranLune === 1) {
    resultat -= 2;
    } else if (cadranLune === 2) {
    resultat = Math.floor(resultat / 2);
    }

    return resultat;
}
