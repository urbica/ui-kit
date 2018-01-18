MonthPicker

```js
initialState = {
  date: new Date()
};

const changeMonth = (value) => {
  state.date.setMonth(value);
  setState({ date: new Date(state.date) });
};

<div>
  <div>{state.date.toString()}</div>
  <MonthPicker
    value={state.date.getMonth()}
    onChange={changeMonth}
  />
</div>
```

YearPicker + MonthPicker

```js
initialState = {
  date: new Date(),
  year: new Date().getFullYear()
};
const { date, year } = state;
const activeYear = date.getFullYear() === year;

const changeMonth = (value) => {
  date.setMonth(value);
  date.setFullYear(year);
  setState({ date: new Date(date) });
};

<div>
  <div>{state.date.toString()}</div>
  <YearPicker
    value={year}
    onChange={(value) => setState({ year: value })}
  />
  <MonthPicker
    value={activeYear ? date.getMonth() : null}
    onChange={changeMonth}
  />
</div>
```