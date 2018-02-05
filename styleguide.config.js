module.exports = {
  title: 'Urbica UI Kit',
  showCode: false,
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
        'src/components/RadioButton/RadioButton.js',
        'src/components/RadioGroup/RadioGroup.js',
        'src/components/Slider/Slider.js',
        'src/components/Legend/Legend.js',
        'src/components/List/List.js',
        'src/components/DropdownWrapper/DropdownWrapper.js',
        'src/components/MonthPicker/MonthPicker.js',
        'src/components/YearPicker/YearPicker.js',
        'src/components/Select/Select.js',
        'src/components/DoubleRangeSlider/DoubleRangeSlider.js'
      ]
    }
  ]
};
