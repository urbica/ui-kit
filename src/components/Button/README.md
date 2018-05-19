Default Button
```js
<Button>Button</Button>
```

Themed Button
```js
const { ThemeProvider } = require('styled-components');

const theme = {
  button_borderWidth: '4px',
  button_borderImage: 'linear-gradient(to bottom, #b732ff, #8017ff) 1',
  button_color: 'aliceblue',
  button_backgroundImage: 'linear-gradient(to top, #b732ff, #8017ff)',
};

<ThemeProvider theme={theme}>
  <Button>Themed Button</Button>
</ThemeProvider>
```
