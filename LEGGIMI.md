# ORTO Hub Integrato — TEST v2 (sola lettura)

## Scopo
Leggere le attività reali del foglio Google condiviso, **senza scrivere alcun dato**. La navigazione interna rimane quella del TEST v1. Non sostituisce la To-do originale.

## Prima di pubblicare
1. **Google Cloud Console**: crea/seleziona un progetto di prova; abilita **Google Sheets API**.
2. Configura la schermata consenso OAuth (Google Auth Platform): modalità test, aggiungi le email degli utenti di prova necessarie; imposta il nome dell'app. Lo scope usato è `spreadsheets.readonly` (sensibile) e `userinfo.email`. Google può richiedere approvazione/verifica prima dell'uso pubblico.
3. Crea un **ID client OAuth** di tipo *Applicazione web*, origine JavaScript autorizzata esattamente `https://alessiocb98.github.io` (senza percorso). Non creare un client secret nel frontend.
4. Recupera l'ID del **foglio To-do**: dal link del Google Sheets chiamato `THE DREAM p.g.a. - To-Do | Archivio`, la stringa tra `/d/` e `/edit`. **Non usare l'ID del progetto Apps Script.**
5. Apri `config.js`: sostituisci **solo** `INCOLLA_CLIENT_ID_OAUTH_WEB` e `INCOLLA_ID_ARCHIVIO_TODO`. Non incollare token, password, chiavi private o client secret. Questi due identificatori compariranno nel codice pubblico, perciò non sono segreti.
6. L'archivio Google Sheets deve rimanere **Privato/Ristretto**; concedi l'accesso soltanto agli account Google dei soci autorizzati. L'accesso con il proprio Google account e l'appartenenza attiva alla scheda `Soci` vengono verificati prima di mostrare le attività.

## Pubblicazione
Nel repository **`ORTO-Hub-Integrato-TEST`**, sostituisci i file del test v1 con questi file. Mantieni GitHub Pages sul branch `main`, cartella `/(root)`. **Non toccare `ORTO-Hub`.** Aggiorna l'app su iPhone.

## Prova
Apri Hub TEST → To-do list → Collega account Google. Concedi il consenso. Dovrebbero comparire le attività reali e i filtri. Il pulsante Aggiorna ripete la lettura; Disconnetti elimina il token dalla memoria della pagina. Se compaiono errori HTTP 403 verifica l'accesso al foglio, l'attivazione dell'API o la configurazione OAuth. Su iPhone la finestra di consenso Google potrebbe aprire un'interfaccia esterna temporanea; il requisito da verificare è il ritorno a Hub senza aprire Safari durante la navigazione normale.

## Limitazioni e sicurezza
- Questo test contiene **solo lettura**: NON sono presenti chiamate di scrittura.
- I Google Sheets rimangono protetti dai permessi Google Drive; la verifica della scheda Soci viene fatta nel client e non deve essere considerata sufficiente come sistema di autorizzazione per future scritture.
- Lo scope `spreadsheets.readonly` autorizza la lettura dei fogli accessibili all'utente, non soltanto del foglio To-do. Questo andrà valutato prima dell'uso definitivo; la richiesta di consenso descrive questa ampiezza.
- Il token OAuth è mantenuto **solo in memoria** e non in localStorage o nel repository.
- Le funzioni originali `google.script.run` non sono utilizzabili direttamente da GitHub Pages; la futura modalità di scrittura richiederà una progettazione server-side sicura con autorizzazioni.
- Il codice client è stato controllato staticamente; l'accesso Google e la lettura reale devono ancora essere provati sul dispositivo e sull'account.
