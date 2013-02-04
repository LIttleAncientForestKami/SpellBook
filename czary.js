var czary = { 
/* members MagiaProstaChaosu, MagiaPowszechna, czyPoprawny, tekst */

"MagiaProstaChaosu": [
  {"nazwa": "Magiczny Alarm", "skladniki": "mosiężny dzwoneczek", "czas trwania": "do aktywacji", "czas rzucania": "1 runda", "moc": 1, "opis": "dzwoni"},
  {"nazwa": "Mniejsza Klątwa", "skladniki": "zbeszczeszczony święty symbol", "czas trwania": "dzień", "czas rzucania": "1 runda", "moc": 1, "opis": "ofiara ma czyraki"}
],

"MagiaPowszechna": [
  {"nazwa": "Pancerz eteru", "skladniki": "Ogniwo kolczugi", "czas trwania": "6 rund", "czas rzucania": "Akcja", "moc": 5, "opis": "Eteryczny pancerz z punktami zbroi = Magii. Nie może nosić zbroi ani tarczy."},
  {"nazwa": "Magiczna broń", "skladniki": "Odrobina poświęconej wody", "czas trwania": "godzina", "czas rzucania": "Akcja", "moc": 6, "opis": "Nasyca magią dowolną broń białą, rzucaną lub max. 5 pocisków. Broń magiczna może ranić potwory odporne na broń niemagiczną."},
  {"nazwa": "Rozproszenie magii", "skladniki": "Srebrny młoteczek +", "czas trwania": "-", "czas rzucania": "Akcja podwójna", "moc": 13, "opis": "Rozprasza efekt dowolnego zaklęcia, rzucanego lub działającego do 12m. Mag musi wykonać udany test splatania magii z modyfikatorem -10 za każdy punkt Magii postaci, która rzuciła czar."},
],



czyPoprawny: function(czar) {
   for (c in czar) {	
	if (czar[c] === "") {
	  throw new TypeError("Czar niekompletny, brak:" + c);
	}
   }
},

tekst: function (czar) {
    return czar.nazwa + ". Potrzebne składniki: " + czar.skladniki + ". " 
	    + "Czas rzucania: " + czar['czas rzucania'] + ". " 
	    + "Czas trwania: " + czar['czas trwania'] + ". " 
	    + "Moc: " + czar.moc + ". Działanie: " + czar.opis;
}

// funkcja zwracająca strukturę dokumentu z czarem?
}
