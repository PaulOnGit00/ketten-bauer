# Ketten-Bauer

Öffentliche Deploy-Version des Ketten-Bauer (Makroökonomie-Klausurtraining).
Auto-Deploy über Netlify bei jedem `git push`.

- `index.html` — die App (Kopie von `mvp/bauer.html` aus dem Master-Projekt)
- `data.js` — die Ketten-DB (`window.MAKRO_DATA`)

Die Master-Dateien liegen im privaten Vault. Dieses Repo ist nur der Deploy-Spiegel.
Aktualisieren: `./update.sh` (kopiert die zwei Dateien aus dem Vault, committet + pusht).
