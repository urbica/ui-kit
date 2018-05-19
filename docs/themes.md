If you want to use your own styles, you need to redefine defaultTheme

```js static
import { defaultTheme } from '@urbica/ui-kit';
import { ThemeProvider } from 'styled-components';

const customTheme = {
  ...defaultTheme,
  inputRange_thumbWidth: '15px',
  inputRange_thumbHeight: '15px',
  horizontalRectangleSegment_height: '3px',
  horizontalRectangleSegment_borderRadius: '2px'
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```
