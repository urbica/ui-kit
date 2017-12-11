module.exports = {
  title: 'Urbica UI Kit',
  showCode: true,
  showUsage: true,
  components: 'src/components/**/*.js',
  sections: [
    {
      name: 'Installation',
      content: 'docs/installation.md'
    },
    {
      name: 'Components',
      components: () => [
        'src/components/Button/Button.js',
        'src/components/Slider/Slider.js'
      ],
      sections: [
        {
          name: 'Legends',
          components: 'src/components/Legend/**/*.js'
        }
      ]
    }
  ]
};
