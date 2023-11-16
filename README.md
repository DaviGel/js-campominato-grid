# Campo minato

1. Ho inserito l'HTML statico nel file HTML.
2. Tramite JS ho creato dinamicamente 100, 81, o 49 celle in base alla difficoltà scelta dall'utente. Per far questo al click su play controllo quale sia la difficoltà e itero tante volte quante sono le celle che ho bisogno di creare. Ad ogni iterazione creo l'elemento e tramite la funzione chiamta `createCell` a cui passo tag, classe e indice, creo il div di classe "cella" e gli inserisco il numero dentro. Poi appendo l'elemento al container, già presente nell'HTML. Infine, in base alla difficoltà, aggiungo la classe corrispettiva per cambiare il calcolo della larghezza degli elementi, che wrappano, sia in larghezza che in altezza.
