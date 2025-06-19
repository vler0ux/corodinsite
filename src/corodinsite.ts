export function determineHeure( cadranLune : 1|2, cadranSoleil:1|2, cadranTerre:1|2){


let resultat= cadranLune + cadranSoleil + cadranTerre;
let utiliseTerre = true;


 if (cadranLune === 1) {
    resultat -= 2;
  } else if (cadranLune === 2) {
    resultat = resultat / 2;
  }


if (cadranSoleil === 1) {
    utiliseTerre = false;
  } else if (cadranSoleil === 2) {
    cadranTerre = cadranTerre * 2;
  }


 if (utiliseTerre) {
    if (cadranTerre === 1) {
      resultat += 2;
    } else if (cadranTerre === 2) {
      resultat = 6;
    }
  }
  return resultat;
}

console.log(determineHeure(2, 2, 1));