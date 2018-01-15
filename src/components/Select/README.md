Select

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

<div style={{ width: 300 }}>
  <Select
    options={options}
    value={options[0].value}
    onChange={(value) => console.log(value)}
  />
</div>
```