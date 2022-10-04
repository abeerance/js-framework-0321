Erstelle einen neuen Ordner in dem gewünschten Ordner:

```css
npx create-react-app 02-navigation-example --template typescript
```

Ordnerstruktur einbauen, css styles und logo verschieben sowie Imports ausbessern:

Terminal öffnen, in react-app navigieren und mit “npm start” react app starten.

1. MUI installieren:

```jsx
npm install @mui/material @emotion/react @emotion/styled
```

1. Inhalt von App.tsx löschen
2. CSS reset in App.css implementieren:

```css
html,
a {
  color: inherit;
  text-decoration: none;
}

* {
  margin: 0;
  padding: 0;
}
*,
::after,
::before {
  box-sizing: border-box;
}

* {
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
```

1. React Router installieren

```css
npm install react-router-dom@6
```

1. Ausgangslage:

1. Zwei neue Ordner erstellen (UTILS NICHT):

1. Unterschied von .ts und .tsx erklären
1. Pages folder im src ordner erstellen:

1. Die verschiedenen Pages definieren und Boilerplate hinzufügen:

1. Navigation-Komponenten definieren:

1. Auf allen Pages eine kurze Beschreibung ergänzen:

1. Implementation von React router → erstellen routes folder und routes.ts → definition von routes.ts → implement the new routes in App.ts → test the routes → navigation.tsx ergänzen → im App.tsx navigation in Router implementieren :

1. Navigation ein bisschen verschönern: Conditional ternerary operator rendering Ausgangslage von aktive navigation:

1. Problem beschreiben, dass man ausser der Beschreibung nicht weiss, welches die aktive Navigation ist, da kein sateManagement implementiert werden kann, da alle auf dem gleichen element sind.
1. Weiter filtern: → navigation-elements.tsx erstellen → Links und Typograhy auf neue Komponente verschieben → fehlende props von Parten zu Child element definieren → props im child definieren → useState im navigation.tsx implementieren → buttonStyling und handleActiveOnClick im navigation-elements.tsx implementieren :

1. Conditional rendering anhand MUI appTheme: appTheme in App.tsx definieren → define breakpoints in home.tsx → ternerary operator in Typography zeigen → alle weiteren breakpoints einbinden und ternerary operators erklären :
