# jQuery select: A styleable replacement for SELECT elements

_Licensed under the MIT license: http://opensource.org/licenses/MIT_

## Features

* Supports OPTGROUPS
* Supports standard dropdown controls
* Supports multi-select controls (i.e. multiple="multiple")
* Supports inline controls (i.e. size="5")
* Fully accessible via keyboard
* Shift + click (or shift + enter) to select a range of options in multi-select controls
* Type to search when the control has focus
* Auto-height based on the size attribute (to use, omit the height property in your CSS!)
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
$('.select').select();
```
jQuery-style
```javascript
new Select();
```

## Settings

| Key            | Default       | Values                     | Description                                      |
| ---------------|:-------------:|---------------------------:|-------------------------------------------------:|
| elements       | `select`      | String                     | A string containing a selector expression        |



## Methods

To call a method use this syntax:

```javascript
$('select').selectBox('methodName', [option]);
```

OOP-style
```javascript
var selectBox = new SelectBox($('#mySelectBox'), settings = {});
selectBox.showMenu();
```

### Available methods


| Key            | Description                                                                                   |
| ---------------|-----------------------------------------------------------------------------------------------|
| create         | Creates the control (default)                                                                 |



## Events

Events are fired on the original select element. You can bind events like this:

```javascript
$('select').selectBox().change(function () {
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
