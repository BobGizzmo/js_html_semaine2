var age = prompt("Quel age avez vous ?");
var sexe = prompt("Fille ou garçon ?");
var nationnalite = prompt("Votre nationnalité ?");
age >= 18 ? age = "majeur" : age = "mineure";
alert(" vous etes un/une "+sexe+" "+age+" "+nationnalite);
