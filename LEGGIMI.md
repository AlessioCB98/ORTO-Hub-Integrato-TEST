# ORTO Hub Integrato TEST v3 — accesso Google semplificato

## Cambiamento rispetto alla v2
Il codice non usa più `prompt: 'consent'` a ogni collegamento. Usa `prompt: ''`, che riutilizza il consenso Google già concesso quando possibile. La lettura resta identica e non c’è nessuna scrittura nel foglio. In caso di sessione scaduta (HTTP 401) compare un invito a ricollegarsi.

## Cosa aspettarsi su iPhone
Chiudendo completamente la WebApp il token temporaneo è perso. **Potrebbe ancora essere necessario toccare “Accedi / Ricollega Google” ogni volta**; però Google non dovrebbe richiedere di nuovo il consenso completo quando le condizioni consentono di riutilizzarlo. Un popup breve potrebbe essere visibile. Per un accesso davvero persistente in futuro servirà riprogettare la gestione della sessione.

## Aggiornamento
Nel solo repository `ORTO-Hub-Integrato-TEST`, carica i file della v3 nella radice, sovrascrivendo quelli con lo stesso nome. Non cancellare `ORTO-Hub` definitivo e non modificare gli Apps Script originali. Attendi il deploy GitHub Pages e riapri l'icona TEST.

## Prova
1. Apri TEST → To-do → “Accedi / Ricollega Google”, verifica le attività.
2. Chiudi completamente la WebApp e riaprila. Tocca nuovamente il pulsante e controlla se il consenso completo è evitato.
3. Verifica che le barre Safari non compaiano nella navigazione normale.

## Sicurezza
Google Sheets resta ristretto; nessuna modifica agli accessi. Il token OAuth resta solo in memoria, mai in `localStorage`. L’ID client e l’ID del foglio sono pubblici e già configurati, nessun client secret nel codice. Il controllo sulla scheda Soci è fatto nel browser e non è adatto ad autorizzare scritture future.
