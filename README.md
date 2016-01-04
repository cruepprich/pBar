# pBar v1.0
pBar is a simple jQuery plugin to show inline progress bar
* less than 800B including css
* Tested in IE8, FireFox, Chrome, Touch enabled for mobiles
* Animated loading
* [Live Demo](http://code.mgvz.com/pBar/)

[<img width="223" height="302" src="https://cloud.githubusercontent.com/assets/4730683/12090741/8f64ccc4-b317-11e5-83ba-7da55a870dda.png" alt="Screenshot">](http://code.mgvz.com/pBar/)

To include pBar plugin
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.pBar.min.js"></script>
```

Sample code
```html
	<div class="pBar" data-from="34" data-to="74"></div> <!-- default colors <#b32,#d31,#ea6,#fa6,#fd8,#ad6,#9c6,#5b6,#6a7> -->
	<div class="pBar" data-from="4" data-to="84" data-color="blue"></div> <!-- single colors -->
	<div class="pBar" data-from="84" data-to="4" data-color="red,yellow,green"></div> <!-- multiple colors -->
```

To update pBar-items after new items are added to document
```javascript
$(".pBar").pBar();
```
