'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var reactBootstrap = require('react-bootstrap');
var ReactAvailabilityForm = _interopDefault(require('react-availability-form'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var PersonalInformation = function (_React$Component) {
  inherits(PersonalInformation, _React$Component);

  function PersonalInformation() {
    classCallCheck(this, PersonalInformation);
    return possibleConstructorReturn(this, (PersonalInformation.__proto__ || Object.getPrototypeOf(PersonalInformation)).apply(this, arguments));
  }

  createClass(PersonalInformation, [{
    key: 'render',

    // constructor (props) {
    //   super(props)
    // }

    value: function render() {
      return React.createElement(reactBootstrap.Well, null, React.createElement('h3', null, 'Personal Information'), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'firstname',
        placeholder: 'First Name',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'lastname',
        placeholder: 'Last Name',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'middleinitial',
        placeholder: 'Middle Initial',
        maxLength: 1 }))), React.createElement('div', { className: 'hidden-lg' }, React.createElement('hr', null)), React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'address',
        placeholder: 'Address',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'city',
        placeholder: 'City',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'state',
        placeholder: 'State',
        required: true,
        maxLength: 2 })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'zip',
        placeholder: 'Zip',
        required: true,
        maxLength: 5 })))), React.createElement(reactBootstrap.Row, null, React.createElement('div', { className: 'hidden-lg' }, React.createElement('hr', null))), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'tel',
        name: 'phone',
        placeholder: 'Phone',
        'data-format': '(999) 999-9999',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'tel',
        name: 'alternate',
        placeholder: 'Alternate Phone',
        'data-format': '(999) 999-9999' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'email',
        name: 'email',
        placeholder: 'Email Address',
        required: true }))), React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Date of Birth'), React.createElement('input', {
        type: 'date',
        className: 'form-control',
        name: 'dob',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        type: 'text',
        className: 'form-control',
        name: 'social',
        placeholder: 'Social Security #',
        required: true }))))));
    }
  }]);
  return PersonalInformation;
}(React.Component);

var AvailabilityInformation = function (_React$Component) {
  inherits(AvailabilityInformation, _React$Component);

  function AvailabilityInformation(props) {
    classCallCheck(this, AvailabilityInformation);

    var _this = possibleConstructorReturn(this, (AvailabilityInformation.__proto__ || Object.getPrototypeOf(AvailabilityInformation)).call(this, props));

    _this.state = {
      inputFullTime: false,
      inputPartTime: false,
      inputOverTime: false,
      availability: {}
    };

    // bind methods
    _this.clickAllShifts = _this.clickAllShifts.bind(_this);
    return _this;
  }

  createClass(AvailabilityInformation, [{
    key: 'clickAllShifts',
    value: function clickAllShifts() {
      this.refs.availability.clickAllShifts();
    }
  }, {
    key: 'getCheckBoxButtonStyle',
    value: function getCheckBoxButtonStyle(n) {
      return this.state[n] ? 'success' : 'default';
    }
  }, {
    key: 'renderButtonCheckboxText',
    value: function renderButtonCheckboxText(x) {
      return x ? 'Y' : React.createElement('span', { className: 'text-muted' }, 'N');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(reactBootstrap.Well, null, React.createElement('h3', null, 'Availability Information'), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'hidden', name: 'available-fulltime', value: this.state.inputFullTime }), React.createElement(reactBootstrap.Button, { onClick: function onClick() {
          _this2.setState({ inputFullTime: !_this2.state.inputFullTime });
        }, bsStyle: this.getCheckBoxButtonStyle('inputFullTime') }, this.renderButtonCheckboxText(this.state.inputFullTime)), ' ', ' Available Full Time (28 or more hrs per week)'), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'hidden', name: 'available-parttime', value: this.state.inputPartTime }), React.createElement(reactBootstrap.Button, { onClick: function onClick() {
          _this2.setState({ inputPartTime: !_this2.state.inputPartTime });
        }, bsStyle: this.getCheckBoxButtonStyle('inputPartTime') }, this.renderButtonCheckboxText(this.state.inputPartTime)), ' ', ' Available Part Time (less than 28 hrs per week)'), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'hidden', name: 'available-overttime', value: this.state.inputOverTime }), React.createElement(reactBootstrap.Button, { onClick: function onClick() {
          _this2.setState({ inputOverTime: !_this2.state.inputOverTime });
        }, bsStyle: this.getCheckBoxButtonStyle('inputOverTime') }, this.renderButtonCheckboxText(this.state.inputOverTime)), ' ', ' Available for Overtime (40+ hours per week)'))), React.createElement('div', { style: { width: '400px' } }, React.createElement('h5', null, 'How many days after hire date can you start working?'), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        type: 'number',
        className: 'form-control',
        name: 'availablestart',
        required: true }))), React.createElement('div', { className: 'text-primary' }, React.createElement('h4', null, 'What Shifts Are You Available To Work?')), React.createElement(ReactAvailabilityForm, { ref: 'availability', onChange: function onChange(a) {
          _this2.setState({ availability: a });
        } }), React.createElement('input', { type: 'hidden', name: 'availability', value: JSON.stringify(this.state.availability) }), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Please tell us any other scheduling or availability considerations, ie: school, children, etc.'), React.createElement('textarea', { className: 'form-control', name: 'schedulenotes', placeholder: 'Other Scheduling/Availability Information' })))));
    }
  }]);
  return AvailabilityInformation;
}(React.Component);

var EducationInformation = function (_React$Component) {
  inherits(EducationInformation, _React$Component);

  function EducationInformation() {
    classCallCheck(this, EducationInformation);
    return possibleConstructorReturn(this, (EducationInformation.__proto__ || Object.getPrototypeOf(EducationInformation)).apply(this, arguments));
  }

  createClass(EducationInformation, [{
    key: 'render',

    // constructor (props) {
    //   super(props)
    // }

    value: function render() {
      return React.createElement(reactBootstrap.Well, null, React.createElement('h3', null, 'Education Information'), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'High School'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'highschool' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'College'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'college' })))));
    }
  }]);
  return EducationInformation;
}(React.Component);

var MilitaryInformation = function (_React$Component) {
  inherits(MilitaryInformation, _React$Component);

  function MilitaryInformation(props) {
    classCallCheck(this, MilitaryInformation);

    var _this = possibleConstructorReturn(this, (MilitaryInformation.__proto__ || Object.getPrototypeOf(MilitaryInformation)).call(this, props));

    _this.state = {
      military: false
    };

    _this.getCheckBoxButtonStyle = _this.getCheckBoxButtonStyle.bind(_this);
    return _this;
  }

  createClass(MilitaryInformation, [{
    key: 'getCheckBoxButtonStyle',
    value: function getCheckBoxButtonStyle(n) {
      return this.state[n] ? 'success' : 'default';
    }
  }, {
    key: 'renderButtonCheckboxText',
    value: function renderButtonCheckboxText(x) {
      return x ? 'Y' : React.createElement('span', { className: 'text-muted' }, 'N');
    }
  }, {
    key: 'renderMilitaryForms',
    value: function renderMilitaryForms() {
      if (this.state.military) {
        return React.createElement('div', null, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Branch'), React.createElement('input', {
          className: 'form-control',
          type: 'text',
          name: 'militarybranch' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Rank/Pay Grade'), React.createElement('input', {
          className: 'form-control',
          type: 'text',
          name: 'militaryrank' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Job/MOS'), React.createElement('input', {
          className: 'form-control',
          type: 'text',
          name: 'militarymos' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Discharge Status'), React.createElement('input', {
          className: 'form-control',
          type: 'text',
          name: 'militarybranch' })));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(reactBootstrap.Well, null, React.createElement('h3', null, 'Uniformed Service Information'), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'hidden', name: 'military', value: this.state.military }), React.createElement(reactBootstrap.Button, { onClick: function onClick() {
          _this2.setState({ military: !_this2.state.military });
        }, bsStyle: this.getCheckBoxButtonStyle('military') }, this.renderButtonCheckboxText(this.state.military)), ' ', ' Served in the US Armed Forces'), this.renderMilitaryForms())));
    }
  }]);
  return MilitaryInformation;
}(React.Component);

var PersonalReferences = function (_React$Component) {
  inherits(PersonalReferences, _React$Component);

  function PersonalReferences(props) {
    classCallCheck(this, PersonalReferences);

    var _this = possibleConstructorReturn(this, (PersonalReferences.__proto__ || Object.getPrototypeOf(PersonalReferences)).call(this, props));

    _this.state = {};
    return _this;
  }

  createClass(PersonalReferences, [{
    key: 'render',
    value: function render() {
      return React.createElement(reactBootstrap.Well, null, React.createElement('h3', null, 'Personal References'), React.createElement('p', { style: { width: '400px' }, className: 'text-muted' }, 'Providing references greatly increases your ability to be hired. References are used to verify information about an individual, their character, integrity, & professional relationships.'), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement('h4', null, 'Reference #1'), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'referencename1',
        placeholder: 'Name' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'referencephone1',
        placeholder: 'Phone' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Reference Notes'), React.createElement('textarea', { className: 'form-control', name: 'referencenotes1' }))), React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement('h4', null, 'Reference #2'), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'referencename2',
        placeholder: 'Name' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'referencephone2',
        placeholder: 'Phone' })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Reference Notes'), React.createElement('textarea', { className: 'form-control', name: 'referencenotes2' })))));
    }
  }]);
  return PersonalReferences;
}(React.Component);

var EmploymentInformation = function (_React$Component) {
  inherits(EmploymentInformation, _React$Component);

  function EmploymentInformation(props) {
    classCallCheck(this, EmploymentInformation);

    var _this = possibleConstructorReturn(this, (EmploymentInformation.__proto__ || Object.getPrototypeOf(EmploymentInformation)).call(this, props));

    _this.state = {
      terminated: false
    };
    _this.getCheckBoxButtonStyle = _this.getCheckBoxButtonStyle.bind(_this);
    return _this;
  }

  createClass(EmploymentInformation, [{
    key: 'getCheckBoxButtonStyle',
    value: function getCheckBoxButtonStyle(n) {
      return this.state[n] ? 'success' : 'default';
    }
  }, {
    key: 'renderButtonCheckboxText',
    value: function renderButtonCheckboxText(x) {
      return x ? 'Y' : React.createElement('span', { className: 'text-muted' }, 'N');
    }
  }, {
    key: 'renderFired',
    value: function renderFired() {
      if (this.state.terminated) {
        return React.createElement('div', null, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'What was the reason?'), React.createElement('textarea', { className: 'form-control', name: 'terminatedreason' })));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(reactBootstrap.Well, null, React.createElement('h3', null, 'Employment Information'), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'hidden', name: 'terminated', value: this.state.terminated }), React.createElement(reactBootstrap.Button, { onClick: function onClick() {
          _this2.setState({ terminated: !_this2.state.terminated });
        }, bsStyle: this.getCheckBoxButtonStyle('terminated') }, this.renderButtonCheckboxText(this.state.terminated)), ' ', ' Have you ever been fired or asked to resign from a job?'), this.renderFired())), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Previous Employer #1'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'previousemployer1',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Job Title/Position'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'previousemployerposition1',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Reason for Leaving'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'previousemployerreason1',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Dates Employed (from/to)'), React.createElement('input', {
        className: 'form-control',
        type: 'date',
        name: 'previousemployerfrom1',
        required: true }), React.createElement('input', {
        className: 'form-control',
        type: 'date',
        name: 'previousemployerto1',
        required: true })))), React.createElement('hr', null), React.createElement(reactBootstrap.Row, null, React.createElement(reactBootstrap.Col, { md: 12, lg: 6 }, React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Previous Employer #2'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'previousemployer2',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Job Title/Position'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'previousemployerposition2',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Reason for Leaving'), React.createElement('input', {
        className: 'form-control',
        type: 'text',
        name: 'previousemployerreason2',
        required: true })), React.createElement(reactBootstrap.FormGroup, null, React.createElement(reactBootstrap.ControlLabel, null, 'Dates Employed (from/to)'), React.createElement('input', {
        className: 'form-control',
        type: 'date',
        name: 'previousemployerfrom2',
        required: true }), React.createElement('input', {
        className: 'form-control',
        type: 'date',
        name: 'previousemployerto2',
        required: true })))));
    }
  }]);
  return EmploymentInformation;
}(React.Component);

/* global $ */

var MaskedInput = function (_React$Component) {
  inherits(MaskedInput, _React$Component);

  function MaskedInput(props) {
    classCallCheck(this, MaskedInput);

    // component initial state
    var _this = possibleConstructorReturn(this, (MaskedInput.__proto__ || Object.getPrototypeOf(MaskedInput)).call(this, props));

    _this.state = {};

    // bind class methods
    // this.myMethod = this.myMethod.bind(this)
    return _this;
  }

  createClass(MaskedInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof $ === 'undefined') {
        try {
          console.error('React Component - MaskedInput.js requires jQuery to be a global ($)');
        } catch (e) {
          try {
            window.$ = {
              mask: function mask() {
                console.warn('MaskedInput.js jQuery not defined!');
              }
            };
          } catch (e) {}
        }
        return;
      } else if ($.mask) {
        // has already been appended to HEAD
      } else {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = scriptMaskedInput;
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      // invoke on inputs with the attr "data-format"
      $('[data-format]').each(function (i, el) {
        var format = $(el).attr('data-format');
        $(el).mask(format);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return MaskedInput;
}(React.Component);

MaskedInput.displayName = 'MaskedInput';

/*
  jQuery Masked Input Plugin
  Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
  Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
  Version: 1.4.1
*/

var scriptMaskedInput = '!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});'; // eslint-disable-line

require('bootstrap-validator');
var serialize = require('form-serialize');

var Component = function (_React$Component) {
  inherits(Component, _React$Component);

  function Component(props) {
    classCallCheck(this, Component);

    var _this = possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

    _this.state = {
      formValidated: false
    };

    // bind methods
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  createClass(Component, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      $(ReactDOM.findDOMNode(this.refs.form)).validator().on('submit', function (e) {
        var validated = void 0;

        if (e.isDefaultPrevented()) {
          validated = this.state.formValidated ? validated : false;
        } else {
          validated = true;
        }

        if (validated) {
          self.setState({
            formValidated: validated
          });
        }
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();

      if (!this.state.formValidated) {
        return null;
      }

      var form = ReactDOM.findDOMNode(this.refs.form);
      // var inputs = form.getElementsByTagName('input')
      // var formData = {}
      // for (var i = 0; i < inputs.length; i++) {
      //   formData[inputs[i].name] = inputs[i].value
      // }

      var formData = serialize(form, { hash: true });
      console.log(formData);
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title || 'Job Application';

      return React.createElement('div', null, React.createElement('h2', null, title), React.createElement(MaskedInput, null), React.createElement('form', { 'data-toggle': 'validator', onSubmit: this.handleSubmit, ref: 'form' }, React.createElement(PersonalInformation, null), React.createElement(AvailabilityInformation, null), React.createElement(EducationInformation, null), React.createElement(MilitaryInformation, null), React.createElement(PersonalReferences, null), React.createElement(EmploymentInformation, null), React.createElement('p', null, React.createElement(reactBootstrap.Button, { type: 'submit' }, 'Submit'))));
    }
  }]);
  return Component;
}(React.Component);

module.exports = Component;
