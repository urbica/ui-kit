ListItem

```js
initialState = { active: 2 };

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
    <ListItem
      title={'Плотность населения'}
      isActive={state.active === 0}
      onClick={() => setState({ active: 0 })}
    />
    <ListItem
      title={'Удобство для жизни'}
      description={'Доступность инфраструктуры и сервисов в пешеходной доступности жилых домов'}
      units={'km/2'}
      isActive={state.active === 1}
      onClick={() => setState({ active: 1 })}
    />
    <ListItem
      title={'Транспортная доступноть (PTAL)'}
      description={'Коэффициент доступности территории на общественном транспорте'}
      isActive={state.active === 2}
      onClick={() => setState({ active: 2 })}
    >
      <Slider
        options={options}
        onChange={(value) => value}
      />
    </ListItem>
</div>
```