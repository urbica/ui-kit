YearPicker

```js
initialState = {
  date: new Date()
};

const { date } = state;

<YearPicker
  value={date.getFullYear()}
  onChange={(value) => setState({ date: new Date(date.setFullYear(value))})}
/>
```