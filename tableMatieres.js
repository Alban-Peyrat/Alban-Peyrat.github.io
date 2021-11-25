const contenu = document.getElementById("contenu");
let structure = new Array();

//Récupère les infos
for(let ii=0; ii < contenu.children.length;ii++){
	if((contenu.children[ii].tagName === "H1")
	|| (contenu.children[ii].tagName === "H2")
	|| (contenu.children[ii].tagName === "H3") 
	|| (contenu.children[ii].tagName === "H4")
	|| (contenu.children[ii].tagName === "H5")
	|| (contenu.children[ii].tagName === "H6")){
		structure.push({"tag": contenu.children[ii].tagName, "text": contenu.children[ii].innerText, "id": contenu.children[ii].id})
	}
}

//Génèrera les niveaux 2-3
function generateOl(h, listNb, parent){
	let newList = document.createElement("ol");
	newList.setAttribute("id", "ol"+h+"no"+listNb);
//https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol#listes_imbriquées
	document.getElementById(parent).lastChild.appendChild(newList);
	lists[h.substring(1)-1] = "ol"+h+"no"+listNb;
	return document.getElementById(newList.id);
}


//génère le <details>
let tableMatieres = document.createElement("details");
tableMatieres.setAttribute("id", "tableMatieres");
contenu.insertBefore(tableMatieres, contenu.firstChild);
tableMatieres = document.getElementById("tableMatieres");

//génère l'intitulé de la table
let summary = document.createElement("summary");
//Je met une balise code seulement pour la compatibilité avec accessibilite.js
let summaryText = document.createElement("code");
summaryText.innerText = "Table des matières (cliquez pour afficher / masquer)";
summary.appendChild(summaryText);
tableMatieres.appendChild(summary);

//Génère la liste à l'intérieur du <details>
let list = document.createElement("ol");
list.setAttribute("id", "listTableMatieres");
tableMatieres.appendChild(list);
list = document.getElementById("listTableMatieres");

//Génère la table à l'intérieur
let listNb = 0;
let lists = ["listTableMatieres", "olH2no0", "olH3no0", "olH4no0", "olH5no0", "olH6no0"];
let previousElement = "H1";
for(let ii=0; ii < structure.length;ii++){
	if(previousElement !== structure[ii].tag){
		if(previousElement.substring(1) > structure[ii].tag.substring(1)){
			list = document.getElementById(lists[structure[ii].tag.substring(1)-1]);
		}else if(previousElement.substring(1) < structure[ii].tag.substring(1)){
			generateOl(structure[ii].tag, listNb, lists[structure[ii].tag.substring(1)-2]);
			list = document.getElementById(lists[structure[ii].tag.substring(1)-1])
			listNb++;
		}
	}

	let elem = document.createElement("li");
	let elemLink = document.createElement("a");
	elemLink.setAttribute("href", "#"+structure[ii].id);
	elemLink.innerText = structure[ii].text;
	elem.appendChild(elemLink);
	list.appendChild(elem);

	previousElement = structure[ii].tag;
}