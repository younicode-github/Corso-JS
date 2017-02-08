// ======================== Cap. 4 - Event Listener - Esempio fisarmonica

/*
Commento
*/

var Accordition = {
  init: function(){
    var elenchi = Core.getElementsByClass('accordion');
    for (var i = 0; i < elenchi.length; i++) {
      var vociElenco = elenchi[i].childNodes;
      for (var k = 0; k < vociElenco.length; k++) {
        if (vociElenco[k].nodeType == 1) {
          var titolo = vociElenco[k].getElementsByTagName('h2');
          var linkTitolo = titolo[0].getElementsByTagName('a');
          Core.addEventListener(linkTitolo[0], 'click', Accordition.clickListener);
          Core.addEventListener(linkTitolo[0], 'focus', Accordition.focusListener);
          Core.addEventListener(linkTitolo[0], 'blur', Accordition.blurListener);
        };
      };
    };
  },
  clickListener: function(){},
  focusListener: function(){},
  blurListener: function(){},
  collapse: function(){},
  collapseAll: function(){},
  expande: function(){}
};

Core.start(Accordition);

// ======================== Cap. 4 - Event Listener - Esempio tooltips

/*
Questo codice prende tutti i tag a della pagina con attributo title settato e maggiore di zero,
e mostra un tooltip con il contenuto del tag title quando il mouse viene spostato sull'elemento o quando si fa il focus con la keyboard.
Il tooltip viene nascosco quando il mouse viene spostato o viene fatto il focus con la keyboard su un'altro elemento.
*/

// var Tooltips = {
//   init: function(){
//     var collegamenti = document.getElementsByTagName('a');
//     for (var i = 0; i < collegamenti.length; i++) {
//       var title = collegamenti[i].getAttribute('title');
//       if ( title && title.length > 0 ){
//         Core.addEventListener(collegamenti[i], 'mouseover', Tooltips.showTipsListener );
//         Core.addEventListener(collegamenti[i], 'focus', Tooltips.showTipsListener );
//         Core.addEventListener(collegamenti[i], 'mouseout', Tooltips.hideTipsListener );
//         Core.addEventListener(collegamenti[i], 'blur', Tooltips.hideTipsListener );
//         Core.addEventListener(collegamenti[i], 'click', Tooltips.clickListener );
//       }
//     }
//   },
//   showTipsListener: function(event){
//     Tooltips.showTips(this);
//     Core.preventDefault(event);
//   },
//   hideTipsListener: function(event){
//     Tooltips.hideTips(this);
//   },
//   showTips: function(link){
//     Tooltips.hideTips(link); // Nascondo eventuali tips aperti da altri link
//
//     var tip = document.createElement('span'); // creo un elemento span nel DOM
//     tip.className = "tooltip"; // imposto la classe del tooltip
//     var tipText = document.createTextNode(link.title); // creo un nodo testuale e lo imposto come l'attributo title del link
//     tip.appendChild(tipText); // inserisco il nodo di testo nel tooltip
//     link.appendChild(tip); // inserisco il tooltip nel link
//
//     link._tooltip = tip; // imposto a scopo interno un'attributo speciale del link che prende il valore del tooltip
//     link.title = ""; // svuoro l'attributo title del link
//
//     // correzione per problema createElement Safari2/Opera9
//     document.documentElement.style.position = "relative";
//   },
//   hideTips: function(link){
//     if (link._tooltip){ // se l'attributo speciale _tooltip è settato eseguo le operazioni
//       link.title = link._tooltip.childNodes[0].nodeValue; // riporto il valore dell'attributo title del link come il testo del tooltip prima di eliminarlo
//       link.removeChild(link._tooltip); // rimuovo il nodo tooltip dal DOM
//       link._tooltip = null; // riporto l'attributo speciale _tooltip a null
//
//       // correzione per problema createElement Safari2/Opera9
//       document.documentElement.style.position = "static";
//     }
//   },
//   clickListener: function(event){
//     Core.preventDefault(event);
//     open(this.href);
//   }
// }
//
// Core.start (Tooltips);

// ======================== Cap. 4 - Event Listener - Funzioni libreria Core

// var EventoClick = {
//
//   init: function(){
//
//     // Codice con l'utilizzo della libreria Core
//
//     var links = document.getElementsByTagName('a');
//     Core.addEventListener(document, 'click', EventoClick.clickListener)
//     for (var i = 0; i < links.length; i++) {
//       Core.addEventListener(links[i], 'click', EventoClick.clickLinkListener);
//     }
//
//     /*
//     // Codice senza le funzioni della libreria Core
//
//     var links = document.getElementsByTagName('a');
//     if (typeof document.addEventListener == 'undefined'){
//       document.attachEvent('click', EventoClick.clickListener);
//       for (var i = 0; i < links.length; i++) {
//         links[i].attachEvent('click', EventoClick.clickLinkListener);
//       }
//     } else {
//       document.addEventListener('click', EventoClick.clickListener, false);
//       for (var i = 0; i < links.length; i++) {
//         links[i].addEventListener('click', EventoClick.clickLinkListener, false);
//       }
//     }
//     */
//
//   },
//   clickLinkListener: function(event){
//
//     // Codice con l'utilizzo della libreria Core
//
//     Core.preventDefault(event);
//     Core.stopPropagation(event);
//     console.log('clickLinkListener');
//
//     /*
//     // Codice senza le funzioni della libreria Core
//
//     if (typeof event.stopPropagation != 'undefined' && event.prevendDefault != 'undefined'){
//       event.stopPropagation(); // fermo la propagazione degli eventi scatenati dai genitori
//       event.preventDefault(); // prevengo azioni di default del nodo del DOM
//     } else {
//       event.cancelBubble = true; // fermo la propagazione degli eventi scatenati dai genitori in IE
//       event.returnValue = false; // prevengo azioni di default del nodo del DOM in IE
//     }
//
//     */
//
//   },
//   clickListener: function(event){
//     console.log('clickListener');
//   },
// }
//
// Core.start(EventoClick);

// ======================== Cap. 4 - Event Listener

// var OggettoEvento = {
//   // Funzione che controlla gli elementi per verificare se si scatenano eventi
//   init: function()
//   {
//     var oggetto = Core.getElementsByClass('oggetto-evento');
//     for (var i = 0; i < oggetto.length; i++)
//     {
//       if (typeof oggetto[i].addEventListener != 'undefined') // Controllo se è settato il listener di default
//       {
//         oggetto[i].addEventListener('click', OggettoEvento.clickListener, false);
//       }
//       else if (typeof oggetto[i].attachEvent != 'undefined') // Controllo se è settato il listener di IE
//       {
//         oggetto[i].attachEvent('onclick', OggettoEvento.clickListener);
//       }
//     }
//   },
//   // Funzione che agisce quando si scatena l'evento click
//   clickListener: function(event)
//   {
//     var classeAdd = 'evento-click';
//
//     /*
//     =================================
//     Inizio codice per prevenire azioni default nodi che scatenano gli eventi
//     =================================
//     */
//
//     // Controllo se l'oggetto event di default è settato, altrimenti la imposto uguale all'oggetto windows.event di IE
//     if (typeof event == 'undefined')
//     {
//       event = window.event;
//     }
//
//     // Controllo se il metodo preventDefault è settato, altrimenti imposto la proprietà returnValue di IE per l'oggetto event
//     if (typeof event.preventDefault == 'undefined')
//     {
//       event.returnValue = false;
//     }
//     else
//     {
//       event.preventDefault();
//     }
//
//     /*
//     =================================
//     Fine codice per prevenire azioni default nodi che scatenano gli eventi
//     =================================
//     */
//
//     // Aggiungo la classe che voglio si aggiunga dopo l'evento
//     if ( !Core.hasClass(this, classeAdd) )
//     {
//       Core.addClass(this, classeAdd);
//     }
//     else
//     {
//       Core.removeClass(this, classeAdd);
//     }
//   }
// }
//
// Core.start (OggettoEvento);

// ======================== Cap. 4 - Gestore eventi

/*
Limite gestore di eventi --> 1 evento = 1 gestore di eventi = 1 elemento HTML
*/

// var LinkEsterni = {
//   init: function()
//   {
//     var links = Core.getElementsByClass('link_esterno');
//     console.log(links);
//     for (var i = 0; i < links.length; i++) {
//       links[i].onclick = LinkEsterni.clickHandler;
//       console.log(links[i]);
//     }
//   },
//   clickHandler: function()
//   {
//     if (confirm('Vuoi aprire il collegamento in una nuova finestra?'))
//     {
//       open( this.href ); // this fa riferimento all'oggetto per cui è stata chiamata la funzione (in questo caso il link che viene cliccato)
//     }
//     return false;
//   }
// }
//
// Core.start(LinkEsterni);

// ======================== Prova jQuery

// var elemento = $('div#div2 p:first-child');
// console.log(elemento[0].className);
//
// elemento.addClass("classe3");
// console.log(elemento[0].className);
//
// elemento.removeClass("classe");
// console.log(elemento[0].className);

// ======================== Manipolare elementi - Tabella con righe a classi CSS alterne

// function formatTables () {
//   var tables = document.getElementsByClassName ( 'dataTable' );
//   var theClass = "riga_pari";
//
//   // inizio ciclo sulle tabelle
//   for (var i = 0; i < tables.length; i++) {
//     var tbodies = tables[i].getElementsByTagName ('tbody');
//     // inizio ciclo tbodies nella tabella in questione
//     for (var j = 0; j < tbodies.length; j++) {
//       var rows = tbodies[j].getElementsByTagName ('tr');
//       // inizio ciclo sulle righe pari del tbody in questione
//       for (var k = 1; k < rows.length; k += 2) {
//         addClass ( rows[k], theClass );
//       } // fine ciclo sulle righe pari del tbody in questione
//     } // fine ciclo tbodies nella tabella in questione
//   } // fine ciclo sulle tabelle
// }
//
// function addClass ( target, theClass ) {
//   if ( !hasClass(target, theClass) ) {
//     target.className += " " + theClass;
//   }
// }
//
// function hasClass (target, theClass){
//   var pattern = new RegExp ( "(^| )" + theClass + "( |$)" );
//   if ( pattern.test ( target.className ) ) {
//     return true;
//   };
//   return false;
// };
//
// formatTables();

// ======================== Manipolare elementi - eliminare classi CSS

// /*
// la seconda chiamata della funzione replace serve per alcuni browser che hanno problemi con gli spazi superflui nelle classi
// */
//
// function removeClass (target, theClass){
//   var pattern = new RegExp ( "(^| )" + theClass + "( |$)" );
//   target.className = target.className.replace(pattern, ""); // sostituisco la classe con valore vuoto
//   target.className = target.className.replace(/  $/, ""); // rimuovo spazi in eccesso
// };
//
// var sottotitolo = document.getElementsByTagName('h3')[0]
// console.log( sottotitolo.className );
//
// removeClass ( sottotitolo, "classe1");
// console.log( sottotitolo.className );

// ======================== Manipolare elementi - Aggiungere classi CSS

// function hasClass (target, theClass){
//   var pattern = new RegExp ( "(^| )" + theClass + "( |$)" );
//   if ( pattern.test ( target.className ) ) {
//     return true;
//   };
//   return false;
// };
//
// var sottotitolo = document.getElementsByTagName('h3')[0];
// var classeDaAggiungere = 'classe1';
// // var classeDaAggiungere = 'classe2';
//
// if ( !hasClass(sottotitolo, classeDaAggiungere) ) {
//   sottotitolo.className += " " + classeDaAggiungere;
//   console.log('Classe aggiunta correttamente');
//   console.log(sottotitolo);
// } else {
//   console.log('L\'elemento possiede già la classe');
//   console.log(sottotitolo);
// }

// ======================== Manipolare elementi - Attributo style

/*
L'attributo style permette di modificare lo stile in linea di un elemento
Si tratta di un oggetto che ha come attributi a sua volta tutte le proprietà che si possono trasmettere con il CSS
La regola generale è che un attributo CSS diviso da trattini (background-color) va scritto a "cammello" (backgroundColor)
*/

// var body = document.getElementsByTagName('body')[0];
// body.style.backgroundColor = "#434750";
// body.style.color = "#ffffff";
// console.log('body');

// ======================== Manipolare elementi - getAttribute e setAttrbute

/*
Con il metodo getAttribute i browser si comportano diversamente
Firefox, Chrome e Opera restituiscono il valore null se l'attributo non è dichiarato, IE invece restituisce una stringa vuota
Per evitare questo problema basta utilizzare la proprietà dell'oggetto denominata come l'attributo che si vuole estrarre per ricevere sempre una stringa (vuota se l'elemento non è stato dichiarato)
*/

// var titolo = document.getElementsByTagName('h1')[0]
//
// // Differenze tra getAttribute e fare riferimento alla proprietà dell'oggetto
// console.log(titolo.getAttribute('class'));
// console.log(titolo.className);
//
// // setAttrbute
// titolo.setAttribute('id', 'titolo_pagina');
// console.log(titolo.id);

// ======================== Navigazione DOM - Ricerca fratelli (elementi con stesso padre)

/*
Anche previousSibling e nextSibling restituiscono sia nodi testuali che nodi attributo
*/

// var padre = document.getElementsByClassName('elenco')[0];
// var figlio = padre.children[3];
// console.log("Figlio:");
// console.log(figlio);
//
// var fratelloMaggiore = figlio.nextSibling;
// var fratelloMaggiore = fratelloMaggiore.nextSibling;
// console.log("Fratello maggiore:");
// console.log(fratelloMaggiore);
//
// var fratelloMinore = figlio.previousSibling;
// var fratelloMinore = fratelloMinore.previousSibling;
// console.log("Fratello minore:");
// console.log(fratelloMinore);

// ======================== Navigazione DOM - Proprietà childNodes, children, firstChild e lastChild

/*
childNodes estrae sia nodi testuali che nodi attributo (oggetti tag)
children estrae solo nodi attributo
firstChild e lastChild estraggono sia nodi testuali che nodi attributo (oggetti tag)
*/

// var contenitore = document.getElementById('div3');
// var padre = contenitore.getElementsByClassName('elenco')[0];
// var figliAll = padre.childNodes;
// var figliTag = padre.children;
// var primoFiglio = padre.firstChild;
// var ultimoFiglio = padre.lastChild;
//
// console.log(figliAll);
// console.log(figliTag);
// console.log(primoFiglio);
// console.log(ultimoFiglio);

// ======================== Navigazione DOM - Proprietà parentNode

// var figlio = document.getElementById('div2');
// var padre = figlio.parentNode;
// console.log(padre);

// ======================== DOM - Alternativa a getElementsByClassName

/*
Con questa funzione si ottengono tutti gli oggetti del dom con una classe specifica
Il metodo getElementsByClassName fa la stessa cosa
*/

// function estrai_dom (){
//   // Estraggo elementi del DOM
//   // IE5 non supporta il simbolo * in getElementsByTagName si utilizza il metodo document.all (solo di IE5)
//   // Se document.all non è definito estrapolo con document.getElementsByTagName('*')
//   var element_array = [];
//   if (typeof document.all != "undefined") {
//     element_array = document.all;
//   } else {
//     element_array = document.getElementsByTagName('*');
//   }
//   return element_array;
// };
//
// function controllo_classe (classe){
//   // lancio la funzione estrai_dom per avere tutti gli oggetti del documento
//   var oggetti_dom = estrai_dom();
//   // Controllo se esiste un elemento con la classe passata
//   var mached_array = []; // array in cui salvare gli oggetti con classe desiderata
//   var pattern = new RegExp ( "(^| )" + classe + "( |$)" ); // Pattern espressione regolare
//   for (var i = 0; i < oggetti_dom.length; i++) {
//     if ( pattern.test ( oggetti_dom[i].className ) ) {
//       mached_array[mached_array.length] = oggetti_dom[i];
//     }
//   }
//   // restituisco array elementi con classe passata come parametro
//   return mached_array;
// };
//
// var classeDaCercare = "classe";
// console.log(controllo_classe(classeDaCercare));

// ======================== DOM - getElementsByTagName (lanciato da un altro nodo)

// var elemento_classe = document.getElementsByClassName('classe');
// console.log(elemento_classe);

// ======================== DOM - getElementsByTagName (lanciato da un altro nodo)

// var contenitori = document.getElementsByTagName('div');
// var secondo_contenitore = contenitori[1];
// var paragrafi = secondo_contenitore.getElementsByTagName('p');
// console.log(paragrafi);

// ======================== DOM - getElementsByTagName

// /*
// Trova tutti i tag selezionati nel DOM
// Può essere lanciato da qualsiasi nodo del DOM (no solo document)
// Quando la ricerca è vuota restituisce array vuoto (length = 0)
// */
//
// var elemento = document.getElementsByTagName('p');
// if ( elemento.length > 0 ) {
//   for (var i = 0; i < elemento.length; i++) {
//     console.log(elemento[i]);
//   }
// }

// ======================== DOM - getElementById

// /*
// Trova un solo elemento con ID selezionato
// È un metodo associato solo al nodo document
// Quando la ricerca è vuota restituisce valore null
// */
//
// var div = document.getElementById('id')
//
// if (div != null ){
//   console.log(div);
//   console.log(div.nodeName);
// }

// ======================== Oggetti

// // Dichiarazione "Classica"
// var Oggetto1 = new Object;
// Oggetto1.proprieta = "proprieta dell'Oggetto1";
// Oggetto1.metodo = function(){
//   console.log(Oggetto1.proprieta);
// };
//
// // Dichiarazione "Letterale"
// var Oggetto2 = { // dichiarazione e creazione proprieta e metodi in un'unica istruzione
//   proprieta: "proprieta dell'Oggetto2", // proprieta e metodi si dividono con "," e non con il ";". Il simbolo di assegnazione non è "=" ma ":"
//   metodo: function(){
//     console.log(Oggetto2.proprieta);
//   }
// }
//
// // richiamo i metodi degli oggetti
// Oggetto1.metodo();
// Oggetto2.metodo();

// ======================== Variabili globali e locali

/*
Tutte le variabili dichiarate all'esterno delle funzioni sono definite variabili globali perchè vi si può accedere da ogni punto del programma (dentro o fuori dalle funzioni)
Le variabili definite all'interno delle funzioni possono essere sia Globali che Locali (accessiibli solo all'interno della funzione in cui sono dichiarate)
Nell'esempio sotto le variabili variabile1 e variabile2 sono state dichiarate fuori dalla funzione e pertanto sono globali
All'interno della funzione vengono dichiarate due variabili con lo stesso nome ma solo una ha l'istruzione var posta davanti

quando in una funzione viene dichiarata una variabile senza la dicitura var, il programma cerca una variabile globale con lo stesso nome e se la trova ci accede e la manipola
Anteponendo al nome della variabile l'istruzione var, anche se esiste una variabile globale con lo stesso nome, la funzione accederà a quella privata appena dichiarata

Nell'esempio sotto la variabile1 (privata nella funzione) non cambia il suo valore mentre la variabile2 (non dichiarata privata nella funzione) cambia valore.
*/

// function funzione (){
//   var variabile1 = 10;
//   variabile2 = 10;
// }
// var variabile1 = 0;
// var variabile2 = 0;
// funzione();
//
// console.log(variabile1);
// console.log(variabile2);

// ======================== Funzioni - Istruzione return

// /*
// L'istruzione return all'interno di una funzione serve a far restituire un valore alla funzione.
// Tutte le istruzioni dopo l'istruzione return non vengono eseguite.
// */
//
// function funzione (){
//   var ritorno = "Valore da restituire";
//   return ritorno;
//   console.log("Questa istruzione non verrà mai eseguita");
// }
// var variabile = funzione();
// console.log( variabile );

// ======================== Funzioni - Array arguments

/*
Nel momento in cui viene richiamata una funzione viene generato automaticamente un array chiamato "arguments"
Questo array contiene tutti gli argomenti passati nella funzione, anche se nel codice di dichiarazione della funzione non sono previsti argomenti
Molto comodo per rendere le funzioni molto più flessibili
*/

// function funzione (){
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// funzione("Primo parametro", 11, 5, "Ciao", false, 134, "Ultimo parametro");

// ======================== Funzioni - Parametri

// function somma ( addendo1, addendo2 ){
//   console.log( addendo1 + addendo2 );
// }
// somma(11, 5);

// ======================== Funzioni

// function attenzione(){
//   console.log( "Questo è un messaggio di pericolo" );
// }
// attenzione(); // Il codice all'interno della funzione (parentesi graffe) attenzione viene eseguito solo quando la funzione viene richiamata

// ======================== Ciclo For

// var numeri = [1, 2, 3, 4];
// for (var i = 0; i < numeri.length; i++) {
//   alert( numeri[i] * 2 );
// }

// ======================== Ciclo Do While

// var variabile = 2;
// do {
//   console.log(variabile);
// } while (variabile <= 1);

// ======================== Ciclo While

// var variabile = 2;
// while (variabile <= 1) {
//   console.log(variabile);
// }

// ======================== Operatori logici

// var variabile1 = true;
// var variabile2 = false;
//
// if (variabile1 && variabile2) { console.log("Operatore AND - Condizione vera"); }; // Vera se tutte le variabili sono vere
// if (variabile1 || variabile2) { console.log("Operatore OR - Condizione vera"); }; // Vera se almeno una delle variabili è vera
// if ( !variabile1 ) {
//   console.log("La variabile1 è FALSA ma io la vedo VERA");
// } else {
//   console.log("La variabile1 è VERA ma io la vedo FALSA");
// }

// ======================== Condizione If - If/Else - If/Else If

// var eta = 22;
// var permesso_speciale = false;
// if (eta >= 18) {
//   console.log("Sei maggiorenne e puoi entrare!");
// } else if (permesso_speciale) {
//   console.log("Non sei maggiorenne ma hai il permesso del capo!");
// } else {
//   console.log("Non non puoi entrare!");
// }

// ======================== Array associativi

// var capitali_europee = [];
// capitali_europee["italia"] = "roma";
// capitali_europee["spagna"] = "madrid";
// capitali_europee["germania"] = "berlino";
// capitali_europee["francia"] = "parigi";
// console.log( capitali_europee["germania"] );
// console.log( capitali_europee["spagna"] );

// ======================== Array di array

// var italia = ["roma", "milano", "genova"];
// var spagna = ["madrid", "barcellona", "siviglia"];
// var francia = ["parigi", "marsiglia"];
// var germania = ["berlino", "monaco", "francoforte"];
// var citta_europee = [italia, spagna, francia, germania];
// console.log( citta_europee[1][0] );

// ======================== Array

// var variabile = [1, 2, 3, 4];
// console.log( variabile[3] );

// ======================== Operatori

// var variabile1 = "Ciao";
// var variabile2 = "mi chiamo Andrea";
// var variabile3 = 2;
// var variabile4 = 3;
//
// console.log( variabile1 + " " + variabile2 ); // + in questo caso concatena le stringhe
// console.log(  variabile3 + variabile4 ); // + in questo caso somma i numeri

// ======================== Variabili

// var variabile1 = "Ciao";
// var variabile2 = 158.09;
// var variabile3 = true;
//
// console.log( variabile1 );
// console.log( variabile2 );
// console.log( variabile3 );
