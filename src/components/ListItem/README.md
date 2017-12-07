ListItem

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' }
];

const style = {
  width: '300px',
  border: '1px solid #999'
};

<div style={style}>
    <ListItem title={'Плотность населения'} />
    <ListItem
      title={'Удобство для жизни'}
      description={'Доступность инфраструктуры и сервисов в пешеходной доступности жилых домов'}
      units={'km/2'}
    />
    <ListItem
      title={'Транспортная доступноть (PTAL)'}
      description={'Коэффициент доступности территории на общественном транспорте'}
      isActive
    >
      <Slider
        options={options}
        onChange={(value) => value}
      />
    </ListItem>
</div>
```