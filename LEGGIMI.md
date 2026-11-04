# ORTO Hub integrato — TEST v1

## Scopo
Verificare su iPhone se la navigazione tra la Home di Hub e una sezione To-do interna resta senza barre Safari quando il sito viene aggiunto alla schermata Home **come app web**.

**Questo è un prototipo tecnico autonomo.** Il contenuto della To-do è fittizio e temporaneo: non legge, salva o modifica Google Sheets. Non sostituisce la To-do list reale. Non pubblicare nel repository `ORTO-Hub` principale.

## Pubblicazione separata su GitHub Pages
1. Crea un nuovo repository pubblico chiamato `ORTO-Hub-Integrato-TEST` (non il repository principale).
2. Carica **i sei file** di questa cartella nella radice del nuovo repository.
3. In Settings → Pages, seleziona Deploy from a branch, branch `main`, folder `/(root)` e salva.
4. Apri `https://alessiocb98.github.io/ORTO-Hub-Integrato-TEST/` in Safari su iPhone.
5. Menu Condividi → Aggiungi alla schermata Home → attiva **Apri come app web** (se disponibile). Apri la nuova icona.
6. Premi To-do list, passa tra i filtri e tocca `‹ Hub`. Verifica che non appaiano le barre di Safari.

## Esito della prova
Se la navigazione resta a schermo intero, abbiamo dimostrato solo il comportamento di navigazione. La fase successiva richiede riprogettare in modo sicuro l'accesso a Google Sheets: `google.script.run` non è direttamente disponibile su GitHub Pages, quindi non basta copiare la UI; non esporre endpoint o chiavi private nel sito pubblico.

## Ripristino
Nessuna modifica al repository originale e nessuna modifica ai progetti Google Apps Script. Basta ignorare/eliminare il repository TEST e l'icona TEST.
