# Tante Else — eerste website-draft

Zelfstandige statische website. Geen installatie of bouwstap nodig. Open index.html voor een lokale weergave.

## Inhoud
Duitse teksten zijn herschreven op basis van de oorspronkelijke homepage:
https://www.tante-else-fotobox.de/
De detail- en aanvraagpagina konden niet worden opgehaald. Specificaties, prijzen en beschikbaarheid zijn daarom niet verzonnen. De drie beelden zijn AI-gegenereerde voorbeelden, geen beelden van de echte caravan. De juridische links verwijzen naar de originele website en moeten voor een live oplevering worden gecontroleerd en vervangen door passende eigen pagina's.

## GitHub en Cloudflare Pages
1. Maak een private repository en upload de inhoud van deze map, inclusief images/.
2. Koppel die repository aan Cloudflare Pages.
3. Gebruik geen framework en geen buildopdracht; kies de repository-root als uitvoermap.
4. Scherm vóór het delen alle demo-adressen af met Cloudflare Access. noindex is geen toegangsbeveiliging.

## Formulier
Het formulier valideert in de browser en toont een demobevestiging. Er is geen netwerkverzoek, opslag, boeking of e-mailverwerking. Koppel later een server-endpoint voor echte aanvragen, inclusief servervalidatie, spambeveiliging en een e-maildienst.

## Foto's
De pagina verwijst direct naar images/caravan.png, images/feest.png en images/interieur.png. Er is geen galerij of automatisch fotolijstje. Vervang foto's op dezelfde paden of pas de verwijzingen in index.html aan.
