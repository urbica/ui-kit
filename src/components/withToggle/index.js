import { compose, withState, withHandlers } from 'recompose';

const withToggle = compose(
  withState('toggledOn', 'toggle', false),
  withHandlers({
    show: ({ toggle }) => () => toggle(true),
    hide: ({ toggle }) => () => toggle(false),
    toggle: ({ toggle }) => () => toggle(current => !current)
  })
);

export default withToggle;
