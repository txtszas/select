# jQuery select: A styleable replacement for SELECT elements

_Licensed under the MIT license: http://opensource.org/licenses/MIT_

## Features

* Supports all features of SELECT elements
* Supports CSS styleable
* Tested in IE7-IE10, recent WebKit browsers, Firefox, and Opera


## Usage

Link to the JS file:

```html
<script src="jquery.select.js" type="text/javascript"></script>
```

Add the CSS file (or append contents to your own stylesheet):

```html
<link href="jquery.select.css" rel="stylesheet" type="text/css" />
```

To initialize:

OOP-style
```javascript
new Select({elements: '.select'});
```
jQuery-style
```javascript
$('.select').select();
```

## Arguments

| Key            | Default       | Values                     | Description                                      |
| ---------------|:-------------:|---------------------------:|-------------------------------------------------:|
| elements       | `select`      | String                     | elements who want in stage, same as jQuery()     |



## Methods

To call a method use this syntax:

OOP-style
```javascript
var selectBox = new Select({elements: '.select'});
selectBox.refactor();
```
jQuery-style
```javascript
$('select').select('methodName', [option]);
```


### Available methods


| Key            | Description                                                                                   |
| ---------------|-----------------------------------------------------------------------------------------------|
| refactor       | refactor component when dataSource change                                                     |



## Events

Events are fired on the original select element. You can bind events like this:

OOP-style
```javascript
var selectBox = new Select({elements: '.select'});
selectBox.sub('change', function (element) {
    alert($(element).val());
});
```
jQuery-style
```javascript
$('select').select().change(function () {
    alert($(this).val());
});
```

### Available events

| Key            | Description                                                                                   |
| ---------------|-----------------------------------------------------------------------------------------------|
| focus          | Fired when the control gains focus                                                            |
| blur           | Fired when the control loses focus                                                            |
| change         | Fired when the value of a control changes                                                     |
| beforeopen     | Fired before a dropdown menu opens (cancelable)                                               |
| open           | Fired after a dropdown menu opens (not cancelable)                                            |
| beforeclose    | Fired before a dropdown menu closes (cancelable)                                              |
| close          | Fired after a dropdown menu closes (not cancelable)                                           |
