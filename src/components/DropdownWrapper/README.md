DropdownWrapper + props

```js
initialState = {
  isOpen: false
};

const onChange = () => setState({ isOpen: !state.isOpen });

<div style={{ width: 300 }}>
  <DropdownWrapper
    opener={() => <div onClick={onChange}>{state.isOpen ? 'Close' : 'Open'}</div>}
    onChange={onChange}
    isOpen={state.isOpen}
  >
    children
  </DropdownWrapper>
</div>
```

DropdownWrapper

```js

<div style={{ width: 300 }}>
  <DropdownWrapper
    opener={(toggle, isOpen) => <div onClick={toggle}>{isOpen ? 'Close' : 'Open'}</div>}
  >
    children
  </DropdownWrapper>
</div>
```