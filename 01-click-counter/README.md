## Code

Erstelle einen neuen Ordner in dem gewünschten Ordner:

```css
npx create-react-app 01-click-counter --template typescript
```

Ordnerstruktur einbauen, css styles und logo verschieben sowie Imports ausbessern:

Terminal öffnen, in react-app navigieren und mit “npm start” react app starten.

1. MUI installieren:

```jsx
npm install @mui/material @emotion/react @emotion/styled
```

2. Inhalt von App.tsx löschen
3. CSS reset in App.css implementieren:

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

4. Ausgangslage

5. Zwei neue Ordner erstellen

6. Erstelle neue click-counter-card

7. Erstelle +/- counter button

8. Implementieren von useState

9. Vorbereitung Buttons und importieren

10. Props setState to both children and fix type-propping

11. Implement click functionality
