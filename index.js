var topBarTitle = function(props) {
  return React.createElement('p', { style: props.style }, props.title);
};

var topBar = function() {
  return React.createElement(
    'div',
    { style: { color: 'red' } },
    React.createElement(topBarTitle, {
      title: 'SpiderMan Hero',
      style: { color: 'blue' }
    }),
    React.createElement(topBarTitle, { title: 'IronMan Hero' }),
    React.createElement(topBarTitle, {
      title: 'Hulk Hero',
      style: { color: 'green' }
    })
  );
};
ReactDOM.render(React.createElement(topBar), document.getElementById('app'));
