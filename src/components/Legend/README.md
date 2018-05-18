### Legend for categorical values, shaped as horizontal rectangles

```js
const values = [
  { id: 1, color: '#111', label: 'The Glossary Of Telescopes' },
  { id: 2, color: '#333', label: 'Asteroids' },
  { id: 3, color: '#666', label: 'Astronomy Or Astrology' },
  { id: 4, color: '#999', label: 'The Universe Through A Childs Eyes' },
  { id: 5, color: '#AAA', label: 'Dude You Re Getting A Telescope' }
];

<Legend
  type="categorical"
  shape="rectangle"
  direction="horizontal"
  values={values}
/>
```

### Themed Legend for categorical values, shaped as horizontal rectangles

```js
const { ThemeProvider } = require('styled-components');

const values = [
  { id: 1, color: '#111', label: 'The Glossary Of Telescopes' },
  { id: 2, color: '#333', label: 'Asteroids' },
  { id: 3, color: '#666', label: 'Astronomy Or Astrology' },
  { id: 4, color: '#999', label: 'The Universe Through A Childs Eyes' },
  { id: 5, color: '#AAA', label: 'Dude You Re Getting A Telescope' }
];
const theme = {
  horizontalRectangleSegment_height: '30px',
  horizontalRectangleSegment_borderRadius: '15px'
};

<ThemeProvider theme={theme}>
  <Legend
    type="categorical"
    shape="rectangle"
    direction="horizontal"
    values={values}
  />
</ThemeProvider>
```

### Legend for categorical values, shaped as horizontal proportional circles

```js
const values = [
  { id: 1, color: '#111', label: 'The Glossary Of Telescopes' },
  { id: 2, color: '#333', label: 'Asteroids' },
  { id: 4, color: '#999', label: 'The Universe Through A Childs Eyes' },
  { id: 5, color: '#AAA', label: 'Dude You Re Getting A Telescope' }
];

<Legend
  type="categorical"
  shape="circle"
  direction="horizontal"
  values={values}
/>
```

### Legend for categorical values, shaped as vertical squares

```js
const values = [
  { id: 1, color: '#111', label: 'The Glossary Of Telescopes' },
  { id: 2, color: '#333', label: 'Asteroids' },
  { id: 3, color: '#666', label: 'Astronomy Or Astrology' },
  { id: 4, color: '#999', label: 'The Universe Through A Childs Eyes' },
  { id: 5, color: '#AAA', label: 'Dude You Re Getting A Telescope' }
];

<Legend
  type="categorical"
  shape="square"
  direction="vertical"
  values={values}
/>
```

### Legend for interval values, shaped as horizontal rectangles

```js
const values = [
  { id: 1, color: '#111', label: 0 },
  { id: 2, color: '#333', label: 100 },
  { id: 3, color: '#666', label: 200 },
  { id: 4, color: '#999', label: 300 },
  { id: 5, color: '#AAA', label: 400 },
  { id: 6, color: '#DDD', label: 500 },
];

<Legend
  type="interval"
  shape="rectangle"
  direction="horizontal"
  values={values}
/>
```

### Themed Legend for interval values, shaped as horizontal rectangles

```js
const { ThemeProvider } = require('styled-components');
const values = [
  { id: 1, color: '#111', label: 0 },
  { id: 2, color: '#333', label: 100 },
  { id: 3, color: '#666', label: 200 },
  { id: 4, color: '#999', label: 300 },
  { id: 5, color: '#AAA', label: 400 },
  { id: 6, color: '#DDD', label: 500 },
];

const theme = {
  horizontalRectangleSegment_height: '30px',
  horizontalRectangleSegment_borderRadius: '15px'
};

<ThemeProvider theme={theme}>
  <Legend
    type="interval"
    shape="rectangle"
    direction="horizontal"
    values={values}
  />
</ThemeProvider>
```
