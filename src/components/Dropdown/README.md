Simple Dropdown

```js
const Handler = ({ toggle, toggledOn }) => (
  <button onClick={toggle}>{toggledOn ? "close" : "open"}</button>
);

const Content = () => <h2>Content</h2>;

<Dropdown renderHandler={Handler} renderContent={Content} />;
```
