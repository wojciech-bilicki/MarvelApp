const TopBarTitle = function (props) {
  return React.createElement('p', { style: props.style }, props.title);
};

const TopBar = function () {
  return React.createElement(
    'div',
    { style: { color: 'green' } },
    React.createElement(TopBarTitle, { title: 'Iron Man' }),
    React.createElement(TopBarTitle, {
      title: 'Hulk',

      style: { color: 'red' },
    }),
  );
};
ReactDOM.render(React.createElement(TopBar), document.getElementById('app'));
