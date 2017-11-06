'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOptionSingle = _this.handleDeleteOptionSingle.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);
				if (options) this.setState(function () {
					return { options: options };
				});
			} catch (e) {
				//nothing
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
			}
		}
	}, {
		key: 'handleDeleteOptionSingle',
		value: function handleDeleteOptionSingle(optiontoremove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optiontoremove !== option;
					})
				};
			});
		}
	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var _this2 = this;

			this.setState(function () {
				var randomNum = Math.floor(Math.random() * _this2.state.options.length);
				var option = _this2.state.options[randomNum];
				alert(option);
			});
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(opt) {
			if (!opt) {
				return 'Enter valid value to add item';
			} else if (this.state.options.indexOf(opt) > -1) {
				return 'This option already exists';
			}
			this.setState(function (prevState) {
				return { options: prevState.options.concat([opt]) };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var subtitle = "Put your life in the hands of the computer";

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
				React.createElement(Options, { hds: this.handleDeleteOptionSingle, handleDeleteOptions: this.handleDeleteOptions, options: this.state.options }),
				React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};
var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ disabled: !props.hasOptions, onClick: props.handlePick },
			'What should I do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'Enter options!'
		),
		React.createElement(
			'ol',
			null,
			props.options.map(function (opt) {
				return React.createElement(Option, { hds: props.hds, key: opt, opt: opt });
			})
		)
	);
};
var Option = function Option(props) {
	return React.createElement(
		'li',
		null,
		props.opt,
		' ',
		React.createElement(
			'button',
			{ onClick: function onClick(e) {
					return props.hds(props.opt);
				} },
			'Remove'
		)
	);
};

var AddOptions = function (_React$Component2) {
	_inherits(AddOptions, _React$Component2);

	function AddOptions(props) {
		_classCallCheck(this, AddOptions);

		var _this3 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

		_this3.handleAddOption = _this3.handleAddOption.bind(_this3);
		_this3.state = {
			error: undefined
		};
		return _this3;
	}

	_createClass(AddOptions, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();
			var opt = e.target.elements.option.value.trim();
			var error = this.props.handleAddOption(opt);

			this.setState(function () {
				return { error: error };
			});
			if (!error) e.target.option.value = '';
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
