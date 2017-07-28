import topBarTitle from './TopBarTitle';

const topBar = function() {
  return React.createElement(
    'div',
    { style: { color: 'red' } },
    React.createElement(topBarTitle, {
      title: 'SpiderMan Herno',
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
