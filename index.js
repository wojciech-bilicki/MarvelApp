var topBar = function() {
  return React.createElement(
    'div',
    { style: { color: 'red' } },
    React.createElement('hi', null, 'Marvel Superheroes')
  );
};
ReactDOM.render(React.createElement(topBar), document.getElementById('app'));
