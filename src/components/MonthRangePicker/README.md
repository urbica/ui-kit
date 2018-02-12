MonthRangePicker

```js
initialState = {
  year: new Date().getFullYear(),
  startDate: new Date(),
  endDate: new Date()
};

const changeMonth = ({ startDate, endDate }) => {
  setState({ startDate, endDate });
};

const changeYear = (year) => setState({ year });

console.log(state.startDate);
console.log(state.endDate);

<div>
  <YearPicker
    onChange={changeYear}
    value={state.year}
  />
  <MonthRangePicker
    startDate={state.startDate}
    endDate={state.endDate}
    activeYear={state.year}
    onChange={changeMonth}
  />
</div>
```
