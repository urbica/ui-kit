module.exports = {
  title: 'Urbica UI Kit',
  showCode: true,
  showUsage: true,
  sections: [
    {
      name: 'Installation',
      content: 'docs/installation.md'
    },
    {
      name: 'Components',
      components: () => [
        'src/components/Button/Button.js',
        'src/components/InputRange/InputRange.js',
        'src/components/Slider/Slider.js',
        'src/components/Legend/Legend.js',
        'src/components/RadioGroup/RadioGroup.js',
        'src/components/ListItem/ListItem.js'
      ]
    }
  ]
};
