// mache eine Variable namens 'startzeit'.
// Wert der Variable ist anfangs 0.
var startzeit = 0;

// mache eine funktion, die die startzeit setzt.
function setzeStartzeit() {
  // wir fragen (den browser) nach der zeit,
  // indem wir die "now" funktion des eingebauten
  // "Date" objektes aufrufen:
  // ergebnis ist ein zeitstempel in milisekunden
  var jetzt = Date.now();
  
  // wir teilen durch 1000 um sekunden zu erhalten
  jetzt =  jetzt / 1000;
  // (runde auf ganze zahlen)
  jetzt = Math.round(jetzt);
  
  // speichere das ergebnis in der 'startzeit' variable
  startzeit = jetzt;
}

function errechneBesuchsdauer() {
  // wie oben, aber in einer zeile
  // da wir in einer neuen funktion sind, 
  // hat diese "jetzt" variabel NICHTS mit der oben zu tun…
  var jetzt = Math.round(Date.now()/1000);
  // dividiereGerundet(Date.now(), 1000)
  var ergebnis =  jetzt - startzeit;
  // gebe das ergbnis zurück
  return ergebnis;
}

function zeigeBesuchsdauer() {
  // errechne ergebnis, "logge" das ergbnis in der konsole
  console.log(errechneBesuchsdauer());
}

// -------------------------------------------
// hier beginnt das programm, d.h. es werden funktionen ausgeführt

// zuerst eine einebaute funktion des browsers: eine meldungs(/alert)-box
alert("hello world");

// rufe unsere eigene funktion auf und setze die startzeit
setzeStartzeit();

// mache einen loop, der jede sekunde die funktion "zeige besuchsdauer" aufruft
// (wir rufen die eingebaute funktion setInterval auf, mit den argumenten funktion und zeit)
setInterval(zeigeBesuchsdauer, 1000);
