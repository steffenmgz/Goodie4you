# goodie4you – 50 Social-Media-Ads

Fertige Werbemotive für den personalisierten Familienplaner aus Acrylglas, im Look von goodie4you.de
(Playfair Display + DM Sans, Creme/Schwarz, echte Produkt- und Kundenfotos).

## Inhalt

| Datei / Ordner | Was |
|---|---|
| `export/` | 50 fertige PNGs (`g4y-ad-NN-format.png`) |
| `ads.csv` | Anzeigentitel, Primärtext, Hashtags, CTA und Ziel-URL je Ad (Semikolon-getrennt, für Excel) |
| `index.html` | Übersicht aller Ads mit Filter und Button „Text kopieren“ |
| `ads.js` | Quelle aller Texte und Layouts – hier ändern |
| `render.html`, `export.js` | Template und Export-Skript |

## Formate

- **19 × 1:1** (1080 × 1080) – Feed
- **17 × 4:5** (1080 × 1350) – Instagram-/Facebook-Feed
- **14 × 9:16** (1080 × 1920) – Stories, Reels, TikTok, Pinterest (Text außerhalb der oberen 250 px / unteren 300 px)

## Themen

| Nr. | Thema |
|---|---|
| 1–8 | Familienorganisation / Alltagschaos |
| 9–16 | Personalisierung, Live-Vorschau, Designs, Größen |
| 17–24 | Material (5-mm-Acryl), abwischbar, Montage, Homeoffice |
| 25–34 | Geschenk: Weihnachten, Neujahr 2027, Einzug, Hochzeit |
| 35–44 | Social Proof: echte Etsy-Bewertungen, 4,8 ★, 1.100+ Verkäufe, Gründer |
| 45–50 | So geht’s, Preis, Retargeting, Neudruck-Garantie, Lieferländer, Brand |

## Hinweise

- Alle Fakten stammen von goodie4you.de (Stand Nov. 2026): ab 59,99 €, ca. 6 Werktage / Express ca. 4,
  4,8 ★ aus 126 Etsy-Bewertungen, 1.100+ Etsy-Verkäufe. **Vor dem Schalten prüfen, ob die Zahlen noch stimmen.**
- Bewertungszitate sind wörtlich aus dem Etsy-Shop übernommen (bei Vanessa „Super“ → „super“) und als Etsy-Bewertung gekennzeichnet.
- Es gibt keine erfundenen Rabatte oder Countdowns. Wenn ihr eine Weihnachtsaktion habt, könnt ihr sie als `badge` in `ads.js` eintragen.

## Ads ändern oder neu rendern

```bash
cd social-ads
node export.js          # alle neu rendern + ads.csv neu schreiben
node export.js 3 17     # nur Ad 3 und 17
```

Benötigt Node und Playwright (`npm i playwright`, Chromium). Eine einzelne Ad lässt sich im Browser ansehen über
`render.html?id=12`.
