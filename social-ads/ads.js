// goodie4you – 50 Social-Media-Ads
// Alle Fakten stammen von goodie4you.de (Stand Nov. 2026): Preise, Lieferzeiten,
// Bewertungen (echte Etsy-Zitate), Lieferumfang. Keine erfundenen Rabatte.
//
// format:  "1x1" (1080×1080 Feed) · "4x5" (1080×1350 Feed) · "9x16" (1080×1920 Story/Reel)
// layout:  "panel" | "overlay" | "split" | "type" | "review" | "story" | "stat"
// headline: _Text_ wird kursiv (Playfair Italic) gesetzt, | = Zeilenumbruch
//
// caption = Primärtext für Meta/Pinterest/TikTok, title = Anzeigentitel (Meta-Headline)

window.ADS = [
  // ── 1–8 · Familienorganisation / Alltagschaos ────────────────────────────
  { id: 1, angle: "Alltagschaos", format: "1x1", layout: "overlay", img: "hero.jpg", pos: "center 30%",
    kicker: "Familienplaner aus Acrylglas", headline: "Euer Familienleben.|_Auf einen Blick._",
    cta: "Jetzt gestalten", badge: "ab 59,99 €",
    title: "Euer Familienleben auf einen Blick",
    caption: "Termine, To-dos, Geburtstage, Menü-Ideen – alles an einer Wand statt in fünf Apps. 🗓️ Der personalisierte Familienplaner aus Acrylglas mit eurem Namen. Abwischbar und jeden Monat neu gestaltbar." },

  { id: 2, angle: "Alltagschaos", format: "4x5", layout: "panel", img: "foto-design1-detail.webp", pos: "center 40%",
    kicker: "Schluss mit Zettelwirtschaft", headline: "Wer hat wann was?|_Steht ab jetzt an der Wand._",
    sub: "Monat, To-dos, Geburtstage & Menü-Ideen auf einem Planer.", cta: "Design wählen",
    title: "Nie wieder „Wusste ich nicht!“",
    caption: "Zahnarzt, Elternabend, Omas Geburtstag … und keiner wusste Bescheid? 😅 Mit dem Familienplaner aus Acrylglas sieht jede:r sofort, was ansteht. Mit eurem Familiennamen, abwischbar, ab 59,99 €." },

  { id: 3, angle: "Alltagschaos", format: "9x16", layout: "story", img: "foto-design3.webp", pos: "45% center",
    kicker: "Wochenplan für die ganze Familie", headline: "Montag bis Sonntag.|_Alles im Blick._",
    sub: "7 Tage · To-dos · Menü · Notizen", cta: "Wochenplan gestalten",
    title: "Unser Wochenplan – personalisiert",
    caption: "Wer bringt die Kids zum Training? Was gibt’s am Donnerstag? Unser Wochenplan aus Acrylglas beantwortet das, bevor jemand fragt. ✍️ Mit Whiteboard-Marker beschreiben, abwischen, neu planen." },

  { id: 4, angle: "Alltagschaos", format: "1x1", layout: "type", img: "foto-design2.webp",
    kicker: "Familien-Chat vs. Familienplaner", headline: "47 ungelesene|Nachrichten.|_Oder ein Blick an die Wand._",
    cta: "Jetzt gestalten",
    title: "Weniger Chat, mehr Überblick",
    caption: "Der Familien-Chat explodiert, der Kalender im Handy ist nur bei einem aktuell? 📱 Hängt euren Familienplaner einfach dorthin, wo alle vorbeikommen: in die Küche oder den Flur." },

  { id: 5, angle: "Alltagschaos", format: "4x5", layout: "split", img: "foto-design2.webp", pos: "center 35%",
    kicker: "Familie mit Vornamen", headline: "Jede:r hat|_seine eigene Zeile._",
    sub: "Mama, Papa, Kids – alle Termine sortiert nach Person.", cta: "Design ansehen",
    title: "Eine Zeile pro Familienmitglied",
    caption: "Bei uns heißt das Design „Familie mit Vornamen“: Jedes Familienmitglied bekommt eine eigene Zeile. So sieht man sofort, wer wann was vorhat. 👨‍👩‍👧‍👦 Alle Namen frei anpassbar." },

  { id: 6, angle: "Alltagschaos", format: "9x16", layout: "story", img: "foto-design1-detail.webp", pos: "60% center",
    kicker: "Kurz notiert", headline: "Oma 15 Uhr.|_Steht an der Wand._",
    sub: "Einfach mit Marker eintragen – und wieder abwischen.", cta: "Jetzt gestalten",
    title: "Kurz notiert, nie vergessen",
    caption: "Marker auf, eintragen, fertig. ✍️ Kein Login, kein Akku, keine Benachrichtigungen – nur euer Familienplaner aus Acrylglas, der einfach da ist." },

  { id: 7, angle: "Alltagschaos", format: "1x1", layout: "panel", img: "foto-design4.webp", pos: "center 40%",
    kicker: "Organizer mit Einkaufsliste", headline: "Einkaufsliste?|_Hängt schon da._",
    sub: "Monat, Einkaufsliste & „Nicht vergessen“ auf einem Planer.", cta: "Design wählen",
    title: "Der Organizer für eure Küche",
    caption: "Milch leer? Direkt auf die Einkaufsliste an der Wand schreiben. 🛒 Der Familienplaner „Organizer“ kombiniert Monatsübersicht, Einkaufsliste und „Nicht vergessen“-Feld." },

  { id: 8, angle: "Alltagschaos", format: "4x5", layout: "overlay", img: "foto-design3.webp", pos: "center 40%",
    kicker: "Was gibt’s heute?", headline: "Die Frage aller Fragen.|_Jetzt mit Antwort._",
    cta: "Wochenplan gestalten", badge: "Menü-Feld inklusive",
    title: "Wochenplan mit Menü-Feld",
    caption: "„Was gibt’s heute zu essen?“ – ab jetzt steht’s an der Wand. 🍝 Unser Wochenplan hat ein eigenes Feld für Menü-Ideen, To-dos und Notizen." },

  // ── 9–16 · Personalisierung / Design / Live-Vorschau ─────────────────────
  { id: 9, angle: "Personalisierung", format: "1x1", layout: "overlay", img: "foto-acryl-detail.webp", pos: "left center",
    kicker: "Mit eurem Namen", headline: "Familie _Euername._",
    cta: "Namen eingeben", badge: "Jeder Text anpassbar",
    title: "Euer Name. Euer Planer.",
    caption: "Überschrift, Familienname, Vornamen, Monate, Wochentage, Felder – bei uns ist jeder Text anpassbar. ✨ Gib deinen Namen ein und sieh sofort in der Live-Vorschau, wie euer Planer aussieht." },

  { id: 10, angle: "Live-Vorschau", format: "4x5", layout: "split", img: "hero-live3-de.webp", pos: "center 30%",
    kicker: "Live-Vorschau", headline: "Du siehst sofort,|_was gedruckt wird._",
    sub: "Design wählen, Texte anpassen, bestellen – fertig.", cta: "Vorschau starten",
    title: "Gestalten mit Live-Vorschau",
    caption: "Kein Rätselraten: Die Live-Vorschau zeigt dir beim Gestalten exakt dein Design – genau so wird dein Kalender gedruckt. 👀 Probier’s aus, das Gestalten ist kostenlos." },

  { id: 11, angle: "Designs", format: "1x1", layout: "type", img: "foto-eigenes-design.webp",
    kicker: "5 Designs + dein eigenes", headline: "Welcher Planer|_passt zu euch?_",
    cta: "Designs ansehen",
    title: "5 Designs + dein eigenes",
    caption: "Klassik, Organizer, Familie mit Vornamen, Wochenplan oder Jahresplaner – oder du stellst dir deinen Kalender ganz einfach selbst zusammen. Welcher wäre eurer? 👇" },

  { id: 12, angle: "Eigenes Design", format: "9x16", layout: "story", img: "kundenfoto-dolunay.webp", pos: "center",
    kicker: "Dein Design noch nicht dabei?", headline: "Dann bau dir|_deinen eigenen._",
    sub: "Felder, Texte, Aufteilung – nach euren Wünschen.", cta: "Eigenes Design",
    title: "Stell dir deinen Kalender selbst zusammen",
    caption: "Keins unserer 5 Designs passt zu 100 %? Dann stell dir deinen Kalender selbst zusammen. 🧩 Sonderwünsche kannst du zusätzlich ins Hinweisfeld schreiben." },

  { id: 13, angle: "Personalisierung", format: "4x5", layout: "panel", img: "kundenfoto-vanessa.webp", pos: "center",
    kicker: "Echte Planer, echte Familien", headline: "Jeder Planer ist|_ein Einzelstück._",
    sub: "Individuell für euch gedruckt – mit euren Namen und Texten.", cta: "Jetzt gestalten",
    title: "Individuell für euch gedruckt",
    caption: "Kein Planer von der Stange: Jeder goodie4you-Kalender wird mit euren Namen und Texten individuell für euch gedruckt. 💛 Hier ein Kundenfoto aus unserem Etsy-Shop." },

  { id: 14, angle: "Personalisierung", format: "1x1", layout: "split", img: "kundenfoto-dolunay.webp", pos: "center",
    kicker: "Sonderwünsche? Gern!", headline: "Aus Monatsplaner wird|_Wochenplan für fünf._",
    cta: "Wunsch-Planer gestalten",
    title: "Sonderwünsche sind willkommen",
    caption: "Dolunay hatte viele Änderungswünsche – und aus dem Monatsplaner wurde kurzerhand ein Wochenplaner für die 5-köpfige Familie. 🙌 Schreib uns deine Ideen einfach ins Hinweisfeld." },

  { id: 15, angle: "Größen", format: "4x5", layout: "stat", img: "foto-design5.webp", pos: "center 40%",
    kicker: "Für jede Wand die richtige Größe", stat: "9", statLabel: "Größen", headline: "Von A3 bis|_120 × 80 cm._",
    cta: "Größe wählen",
    title: "9 Größen – von A3 bis 120 × 80 cm",
    caption: "Kleine Nische im Flur oder große Küchenwand? 📏 Unsere Familienplaner gibt’s in 9 Größen, von A3 bis 120 × 80 cm." },

  { id: 16, angle: "Designs", format: "9x16", layout: "story", img: "foto-design2.webp", pos: "30% center",
    kicker: "Design 3 · Familie mit Vornamen", headline: "Für Familien,|_die viel vorhaben._",
    sub: "Eine eigene Zeile für jedes Familienmitglied.", cta: "Dieses Design wählen",
    title: "Familie mit Vornamen",
    caption: "Training, Musikschule, Spätdienst – wenn bei euch viel los ist, ist „Familie mit Vornamen“ euer Design. Jede Person bekommt ihre eigene Zeile. 🗂️" },

  // ── 17–24 · Material & Qualität ──────────────────────────────────────────
  { id: 17, angle: "Material", format: "1x1", layout: "overlay", img: "foto-acryl-detail.webp", pos: "center",
    kicker: "Echtes Acrylglas", headline: "5 mm.|_Glasklar._",
    cta: "Jetzt gestalten", badge: "Halb so schwer wie Glas",
    title: "5 mm starkes Acrylglas",
    caption: "5 mm starkes Acrylglas, entgratet und glasklar – und dabei nur halb so schwer wie Glas. 💎 Mit Abstandshaltern montiert, schwebt euer Planer elegant vor der Wand." },

  { id: 18, angle: "Material", format: "4x5", layout: "panel", img: "foto-design1-detail.webp", pos: "center 30%",
    kicker: "Ein Blickfang an jeder Wand", headline: "Planer?|_Eher Wandbild._",
    sub: "Transparentes Acrylglas wirkt edel und leicht – in Küche, Flur oder Büro.", cta: "Jetzt gestalten",
    title: "Ein Blickfang an jeder Wand",
    caption: "Ein Familienplaner, der nicht nach Büro aussieht. 🌿 Transparentes Acrylglas mit eleganter Schrift wirkt edel und leicht – in Küche, Flur oder Homeoffice." },

  { id: 19, angle: "Abwischbar", format: "9x16", layout: "story", img: "foto-abwischbar.webp", pos: "60% center",
    kicker: "Abwischbar & wiederverwendbar", headline: "Jeden Monat|_neu gestalten._",
    sub: "Mit Kreide- oder Whiteboard-Markern. Feuchtes Tuch – fertig.", cta: "Jetzt gestalten",
    title: "Abwischbar & immer wieder neu",
    caption: "Monat vorbei? Einmal mit dem feuchten Tuch drüber und der Planer ist bereit für den nächsten. 🧽 Funktioniert mit Kreide- und Whiteboard-Markern." },

  { id: 20, angle: "Abwischbar", format: "1x1", layout: "type", img: "foto-abwischbar.webp",
    kicker: "Ein Planer statt zwölf Kalenderblätter", headline: "Einmal kaufen.|_Für immer planen._",
    cta: "Jetzt gestalten",
    title: "Ein Planer für alle Monate",
    caption: "Kein neuer Kalender jedes Jahr, kein Papierstapel: Euer Acryl-Planer ist abwischbar und immer wieder neu beschreibbar. ♻️" },

  { id: 21, angle: "Montage", format: "4x5", layout: "stat", img: "foto-acryl-detail.webp", pos: "70% center",
    kicker: "Alles dabei", stat: "4 · 4 · 4", statLabel: "Abstandshalter · Dübel · Schrauben", headline: "Auspacken.|_Aufhängen._",
    cta: "Jetzt gestalten",
    title: "Inklusive Wandhalterung",
    caption: "Kein Baumarkt-Ausflug nötig: Im Lieferumfang sind 4 Abstandshalter, 4 Dübel und 4 Schrauben plus eine leicht verständliche Aufbauanleitung. 🔩" },

  { id: 22, angle: "Material", format: "1x1", layout: "split", img: "foto-design4.webp", pos: "center 30%",
    kicker: "Passt in jede Küche", headline: "Modern, ruhig,|_zeitlos._",
    cta: "Designs ansehen",
    title: "Zeitloses Design für eure Küche",
    caption: "Schwarze Schrift auf transparentem Acrylglas – passt zu Holz, Weiß, Beton und allem dazwischen. 🤍 Euer Planer fügt sich ein, statt zu stören." },

  { id: 23, angle: "Material", format: "9x16", layout: "story", img: "foto-acryl-detail.webp", pos: "30% center",
    kicker: "Detail-Liebe", headline: "Entgratet.|Glasklar.|_Schwebend._",
    sub: "Mit Abstandshaltern vor der Wand montiert.", cta: "Jetzt gestalten",
    title: "Detailverliebt bis zur letzten Schraube",
    caption: "Entgratete Kanten, glasklares 5-mm-Acryl, edle Abstandshalter. ✨ Ein Familienplaner, den man gern ansieht." },

  { id: 24, angle: "Homeoffice", format: "4x5", layout: "overlay", img: "foto-design5.webp", pos: "center 40%",
    kicker: "Auch fürs Büro", headline: "Das ganze Jahr.|_Auf einer Wand._",
    cta: "Jahresplaner gestalten", badge: "Alle 12 Monate",
    title: "Der Jahresplaner fürs Homeoffice",
    caption: "Urlaube, Deadlines, Projekte: Der Jahresplaner zeigt alle 12 Monate auf einen Blick – perfekt fürs Homeoffice oder Büro. 💼" },

  // ── 25–34 · Geschenk & Saison (Weihnachten / Neujahr / Einzug / Hochzeit) ─
  { id: 25, angle: "Weihnachten", format: "1x1", layout: "type", img: "hero.jpg",
    kicker: "Geschenkidee Weihnachten", headline: "Das Geschenk,|_das jeden Tag benutzt wird._",
    cta: "Geschenk gestalten",
    title: "Ein Geschenk mit Alltag-Garantie",
    caption: "Kein Staubfänger, sondern ein Geschenk, das jeden Tag gebraucht wird. 🎄 Der personalisierte Familienplaner mit Namen – für Eltern, Geschwister oder die beste Freundin mit Familie." },

  { id: 26, angle: "Weihnachten", format: "4x5", layout: "panel", img: "foto-design2.webp", pos: "center 35%",
    kicker: "Für die, die alles haben", headline: "Was schenkt man|_der ganzen Familie?_",
    sub: "Einen Planer mit ihrem Namen – und allen Vornamen.", cta: "Geschenk gestalten",
    title: "Ein Geschenk für die ganze Familie",
    caption: "Ein Geschenk für alle auf einmal: der Familienplaner mit Familienname und jedem Vornamen. 🎁 Lieferung in Deutschland in ca. 6 Werktagen, mit Express in ca. 4. Rechtzeitig bestellen lohnt sich!" },

  { id: 27, angle: "Weihnachten", format: "9x16", layout: "story", img: "hero.jpg", pos: "35% center",
    kicker: "Weihnachtsgeschenk-Tipp", headline: "Planen ist das|_neue Schenken._",
    sub: "Personalisiert · Acrylglas · ab 59,99 €", cta: "Jetzt gestalten",
    title: "Weihnachtsgeschenk-Tipp",
    caption: "Auf der Suche nach einem Geschenk mit Bedeutung? 🎄 Ein Familienplaner mit Namen, der das nächste Jahr begleitet. Individuell gedruckt, inkl. Wandhalterung." },

  { id: 28, angle: "Weihnachten", format: "1x1", layout: "panel", img: "foto-acryl-detail.webp", pos: "center",
    kicker: "Rechtzeitig zum Fest", headline: "Express-Lieferung|_in ca. 4 Werktagen._",
    sub: "Bei Bestellung & Zahlung bis 12 Uhr (DE).", cta: "Jetzt bestellen",
    title: "Express in ca. 4 Werktagen",
    caption: "Last-Minute-Geschenk gesucht? ⏱️ Mit unserer Express-Option ist dein personalisierter Planer in Deutschland in ca. 4 Werktagen da (Bestellung & Zahlung bis 12 Uhr). Das Befestigungsset kommt separat in einem zweiten Paket." },

  { id: 29, angle: "Neujahr", format: "4x5", layout: "stat", img: "foto-design5.webp", pos: "center 40%",
    kicker: "Bereit für 2027?", stat: "12", statLabel: "Monate auf einen Blick", headline: "Das neue Jahr|_beginnt an der Wand._",
    cta: "Jahresplaner gestalten",
    title: "Jahresplaner für 2027",
    caption: "Neues Jahr, neuer Überblick. 🥂 Mit dem Jahresplaner aus Acrylglas tragt ihr Urlaube, Ferien und Geburtstage für 2027 direkt ein – und seht alle 12 Monate auf einmal." },

  { id: 30, angle: "Neujahr", format: "9x16", layout: "story", img: "foto-design5.webp", pos: "40% center",
    kicker: "Guter Vorsatz, der hält", headline: "2027 wird|_organisierter._",
    sub: "Ein Planer für die ganze Familie statt guter Vorsätze.", cta: "Jetzt gestalten",
    title: "Der Vorsatz, der wirklich hält",
    caption: "„Nächstes Jahr wird alles organisierter“ – diesmal wirklich. 💪 Ein Familienplaner an der Wand ist der Vorsatz, der von allein hält." },

  { id: 31, angle: "Einzug", format: "1x1", layout: "overlay", img: "foto-design1-detail.webp", pos: "center 30%",
    kicker: "Geschenk zum Einzug", headline: "Neues Zuhause.|_Neuer Name an der Wand._",
    cta: "Geschenk gestalten", badge: "Inkl. Wandhalterung",
    title: "Das perfekte Einzugsgeschenk",
    caption: "Statt Brot und Salz: ein Familienplaner mit dem Namen der neuen Hausbewohner:innen. 🏡 Wandhalterung inklusive – direkt aufhängen und loslegen." },

  { id: 32, angle: "Hochzeit", format: "4x5", layout: "split", img: "foto-acryl-detail.webp", pos: "left center",
    kicker: "Geschenkidee Hochzeit", headline: "Der erste Kalender|_mit gemeinsamem Namen._",
    cta: "Hochzeitsgeschenk gestalten",
    title: "Hochzeitsgeschenk mit Namen",
    caption: "Gemeinsamer Name, gemeinsamer Kalender. 💍 Ein personalisierter Planer aus Acrylglas ist ein Hochzeitsgeschenk, das im Alltag des Paares ankommt." },

  { id: 33, angle: "Geschenk", format: "9x16", layout: "story", img: "foto-acryl-detail.webp", pos: "60% center",
    kicker: "Zum Einzug, zur Hochzeit oder einfach so", headline: "Das perfekte|_Geschenk._",
    sub: "Personalisiert mit Namen · ab 59,99 €", cta: "Geschenk gestalten",
    title: "Personalisierte Geschenke mit Liebe gestaltet",
    caption: "Einzug, Hochzeit, Geburt, Weihnachten – oder einfach so. 🎁 Ein personalisierter Familienplaner passt zu fast jedem Anlass." },

  { id: 34, angle: "Geschenk", format: "1x1", layout: "type", img: "foto-design4.webp",
    kicker: "Geschenk für Eltern", headline: "Für Mama,|die _alles_ im Kopf hat.",
    cta: "Geschenk gestalten",
    title: "Entlastung zum Verschenken",
    caption: "Für die Person, die sonst alle Termine im Kopf hat: ein Planer, der das übernimmt. 💛 Mit allen Familiennamen, abwischbar und immer wieder neu gestaltbar." },

  // ── 35–44 · Social Proof (echte Etsy-Bewertungen) ────────────────────────
  { id: 35, angle: "Social Proof", format: "1x1", layout: "stat", img: "kundenfoto-mary.webp", pos: "center",
    kicker: "Familien lieben ihren Planer", stat: "4,8 ★", statLabel: "aus 126 Etsy-Bewertungen", headline: "Über 1.100|_verkaufte Planer._",
    cta: "Jetzt gestalten",
    title: "4,8 ★ aus 126 Etsy-Bewertungen",
    caption: "Über 1.100 Verkäufe und durchschnittlich 4,8 Sterne aus 126 Bewertungen in unserem Etsy-Shop. ⭐ Danke an alle Familien, die ihren Planer bei uns gestaltet haben!" },

  { id: 36, angle: "Bewertung", format: "4x5", layout: "review", img: "kundenfoto-barbara.webp",
    quote: "Abstimmung zu Sonderwünschen lief reibungslos und das Produkt kam gut verpackt und fristgerecht an. Sieht super aus!",
    author: "Barbara", cta: "Jetzt gestalten",
    title: "„Sieht super aus!“ – Barbara",
    caption: "Danke, Barbara! 💬 Sonderwünsche? Schreib sie einfach beim Gestalten ins Hinweisfeld – wir melden uns. (Bewertung aus unserem Etsy-Shop goodie4you)" },

  { id: 37, angle: "Bewertung", format: "1x1", layout: "review", img: "kundenfoto-dolunay.webp",
    quote: "Wir freuen uns nun jeden Tag über den schönen, personalisierten Kalender.",
    author: "Dolunay", cta: "Jetzt gestalten",
    title: "„Wir freuen uns jeden Tag“",
    caption: "Ein Wochenplaner für eine 5-köpfige Familie – individuell angepasst. ❤️ Danke für die lieben Worte, Dolunay! (Bewertung aus unserem Etsy-Shop goodie4you)" },

  { id: 38, angle: "Bewertung", format: "9x16", layout: "review", img: "kundenfoto-mary.webp",
    quote: "Es entspricht genau meinen Erwartungen. Ich bin begeistert und kann es wärmstens empfehlen.",
    author: "Mary", cta: "Jetzt gestalten",
    title: "„Wärmstens empfehlen“ – Mary",
    caption: "Genau so, wie es in der Live-Vorschau aussah. ✨ Danke, Mary! (Bewertung aus unserem Etsy-Shop goodie4you)" },

  { id: 39, angle: "Bewertung", format: "4x5", layout: "review", img: "kundenfoto-lisa.webp",
    quote: "Der Planer kam schnell und genau wie beschrieben an. Wir sind sehr zufrieden und freuen uns über einen tollen, übersichtlichen Wochenplan.",
    author: "Lisa", cta: "Wochenplan gestalten",
    title: "„Toller, übersichtlicher Wochenplan“",
    caption: "Übersicht für die ganze Woche – mit Feldern für To-dos und Menü. 📋 Danke, Lisa! (Bewertung aus unserem Etsy-Shop goodie4you)" },

  { id: 40, angle: "Bewertung", format: "1x1", layout: "review", img: "kundenfoto-julia.webp",
    quote: "Ich liebe den Planer und hab mich sehr drauf gefreut.",
    author: "Julia", cta: "Jetzt gestalten",
    title: "„Ich liebe den Planer“ – Julia",
    caption: "Kurz und schön. 🥰 Danke, Julia! (Bewertung aus unserem Etsy-Shop goodie4you)" },

  { id: 41, angle: "Bewertung", format: "9x16", layout: "review", img: "kundenfoto-vanessa.webp",
    quote: "Der Kontakt mit den Verkäufern war super sympathisch! Die Pinnwand sieht toll aus & ist guter Qualität!",
    author: "Vanessa", cta: "Jetzt gestalten",
    title: "„Super sympathisch“ – Vanessa",
    caption: "Hinter goodie4you stehen Marjan und Steffen – und wir antworten meist innerhalb weniger Stunden. 💌 Danke, Vanessa! (Bewertung aus unserem Etsy-Shop goodie4you)" },

  { id: 42, angle: "Social Proof", format: "4x5", layout: "overlay", img: "kundenfoto-barbara.webp", pos: "center",
    kicker: "Aus euren Küchen", headline: "So sieht’s|_bei euch aus._",
    cta: "Deinen gestalten", badge: "Kundenfoto",
    title: "Kundenfotos aus echten Küchen",
    caption: "Wir lieben es, eure Planer in ihrem neuen Zuhause zu sehen! 📸 Markiert uns gern mit @goodie4you.de." },

  { id: 43, angle: "Social Proof", format: "1x1", layout: "stat", img: "hero.jpg", pos: "center 30%",
    kicker: "goodie4you in Zahlen", stat: "1.100+", statLabel: "Verkäufe auf Etsy", headline: "Und eurer|_wird der nächste._",
    cta: "Jetzt gestalten",
    title: "Über 1.100 Familienplaner verkauft",
    caption: "Über 1.100 Familien planen schon mit einem goodie4you-Planer (laut unseren Etsy-Verkäufen). 🗓️ Jetzt eigenen gestalten – die Live-Vorschau zeigt dir sofort das Ergebnis." },

  { id: 44, angle: "Gründer", format: "9x16", layout: "story", img: "foto-design4.webp", pos: "30% center",
    kicker: "Gestaltet von Marjan & Steffen", headline: "Von Familie.|_Für Familien._",
    sub: "Aus Hameln – mit viel Liebe gestaltet.", cta: "Unsere Designs",
    title: "Von Familie, für Familien",
    caption: "Hi, wir sind Marjan und Steffen! 👋 Unsere Familienplaner gestalten wir selbst – mit dem Ziel, dass ihr euren Alltag entspannter im Blick habt." },

  // ── 45–50 · Ablauf / Angebot / Retargeting ───────────────────────────────
  { id: 45, angle: "So geht’s", format: "1x1", layout: "type", img: "hero-live3-de.webp",
    kicker: "So geht’s", headline: "Design wählen.|Texte anpassen.|_Bestellen. Fertig._",
    cta: "Jetzt gestalten",
    title: "In 3 Schritten zum eigenen Planer",
    caption: "1️⃣ Design wählen 2️⃣ Texte anpassen (mit Live-Vorschau) 3️⃣ Bestellen. In ca. 6 Werktagen hängt euer Familienplaner an der Wand." },

  { id: 46, angle: "Preis", format: "4x5", layout: "stat", img: "foto-design1-detail.webp", pos: "center 30%",
    kicker: "Personalisierter Familienplaner", stat: "59,99 €", statLabel: "ab · inkl. MwSt. zzgl. Versand", headline: "Inklusive|_Wandhalterung._",
    cta: "Jetzt gestalten",
    title: "Schon ab 59,99 €",
    caption: "Personalisierter Familienplaner aus 5-mm-Acrylglas, inkl. Befestigungsset mit Abstandshaltern, Dübeln & Schrauben – schon ab 59,99 € (inkl. MwSt., zzgl. Versand)." },

  { id: 47, angle: "Retargeting", format: "9x16", layout: "story", img: "hero-live3-de.webp", pos: "center",
    kicker: "Noch am Überlegen?", headline: "Dein Planer|_wartet auf dich._",
    sub: "Gestalten ist kostenlos – mit Live-Vorschau.", cta: "Weiter gestalten",
    title: "Dein Planer wartet",
    caption: "Du hast schon reingeschaut? 👀 Dein Familienplaner ist nur ein paar Klicks entfernt – Design wählen, Namen eintragen, Vorschau checken." },

  { id: 48, angle: "Retargeting / FAQ", format: "1x1", layout: "panel", img: "foto-abwischbar.webp", pos: "center",
    kicker: "Gut zu wissen", headline: "Beschädigt angekommen?|_Wir drucken neu._",
    sub: "Einfach Fotos an info@goodie4you.de schicken.", cta: "Mehr erfahren",
    title: "Kostenloser Neudruck bei Schäden",
    caption: "Kommt dein Kalender beschädigt oder mit einem Fehler an, drucken wir ihn kostenlos neu. 🛡️ Schick uns einfach ein paar Fotos an info@goodie4you.de." },

  { id: 49, angle: "International", format: "4x5", layout: "panel", img: "foto-design3.webp", pos: "center 35%",
    kicker: "Lieferung nach DE · AT · BE · NL · FR · IT", headline: "Auch in deiner Sprache|_gestaltbar._",
    sub: "Monate, Wochentage & Felder frei anpassbar.", cta: "Jetzt gestalten",
    title: "Lieferung in 6 Länder",
    caption: "Wir liefern nach Deutschland, Österreich, Belgien, den Niederlanden, Frankreich und Italien. 🌍 Monate, Wochentage und alle Felder kannst du frei anpassen – auch in deiner Sprache." },

  { id: 50, angle: "Brand", format: "9x16", layout: "story", img: "hero.jpg", pos: "40% center",
    kicker: "goodie4you", headline: "Euer Familienleben.|_Auf einen Blick._",
    sub: "Personalisiert · abwischbar · ab 59,99 €", cta: "Jetzt gestalten",
    title: "goodie4you – Familienplaner mit Namen",
    caption: "Der personalisierte Wandkalender aus Acrylglas – mit eurem Familiennamen, abwischbar und immer wieder neu gestaltbar. Individuell für euch gedruckt. 🗓️ Link in Bio." },
];

window.HASHTAGS = "#goodie4you #familienplaner #wandkalender #acrylkalender #familienkalender #personalisiert #geschenkidee #organisation #familienalltag #mamaleben";
window.URL_DEFAULT = "https://goodie4you.de";
