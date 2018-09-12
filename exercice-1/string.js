function ucfirst(maChaine){
	if ((typeof maChaine === "string") && (maChaine.length > 0)) {
		maChaine = (maChaine.charAt(0).toUpperCase() + maChaine.substring(1).toLowerCase());
		return maChaine;
	}
	else{
		console.log("La variable n'est pas de type string ou est vide");
	}
}

function capitalize(maChaine){
	if ((typeof maChaine === "string") && (maChaine.length > 0)) {
		tab = maChaine.split(" ");
		for (var m in tab) {
			tab[m] = tab[m].substr(0, 1).toUpperCase()+tab[m].substr(1, tab[m].length);
		}
		maChaine = tab.join(" ");
		return maChaine;
	}
	else{
		console.log("La variable n'est pas de type string ou est vide");
	}
}

function camelCase(maChaine){
	if ((typeof maChaine === "string") && (maChaine.length > 0)) {
		maChaine = capitalize(maChaine);
		maChaine = maChaine.split(" ");
		maChaine = maChaine.join("");
		return maChaine;
	}
	else{
		console.log("La variable n'est pas de type string ou est vide");
	}
}

function snake_case(maChaine){
	if ((typeof maChaine === "string") && (maChaine.length > 0)) {
		maChaine = maChaine.split(" ");
		maChaine = maChaine.join("_");
		return maChaine;
	}
	else{
		console.log("La variable n'est pas de type string ou est vide");
	}
}

function prop_access(maChaine){
	maChaine = maChaine
}

function leet(maChaine){
	if ((typeof maChaine === "string") && (maChaine.length > 0)) {
		tab = maChaine.split(" ");
		tab = maChaine.split("");
	for (var m in tab) {
		if(tab[m].toLowerCase()== "e"){
			tab[m]="3";
		}
		else if (tab[m].toLowerCase()== "a") {
			tab[m]="4";
		}
		else if (tab[m].toLowerCase()== "i") {
			tab[m]="1";	
		}
		else if (tab[m].toLowerCase()== "o") {
			tab[m]="0";	
		}
		else if (tab[m].toLowerCase()== "u") {
			tab[m]="_";
		}
		else if (tab[m].toLowerCase()== "y") {
			tab[m]="7";
		}
	}
	maChaine = tab.join("");
			return maChaine;
		}
	else{
		console.log("La variable n'est pas de type string ou est vide");
	}
}

function verlan(maChaine){
	if ((typeof maChaine === "string") && (maChaine.length > 0)) {
		tab = maChaine.split(" ");
		for (var m in tab) {
			tab[m] = tab[m].split("").reverse().join("");
		}
		maChaine = tab.join(" ");
		return maChaine;
	}
	else{
		console.log("La variable n'est pas de type string ou est vide");
	}
}

function yoda(maChaine){
	if ((typeof maChaine === "string") && (maChaine.length > 0)) {
		maChaine = maChaine.split(" ").reverse().join(" ");
		return maChaine;
	}
	else{
		console.log("La variable n'est pas de type string ou est vide");
	}
}

function vig(maChaine){
	//Cryptage Chiffre de vigenère
}

maChaine = "Eh ! je test des trucs de fou aaaa eeeee iiiii. ooooooo. uuuuuu yyyyyyy";
console.log(leet(maChaine));

// Commit [DONE] exercice 1