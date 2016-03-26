# pBar v2.0
pBar is a simple jQuery plugin to show inline progress bar & stack bar
* less than 2kB including css
* Tested in IE8, FireFox, Chrome, Touch enabled for mobiles
* Animated loading
* [Live Demo](http://code.mgvz.com/pBar/)

[<img width="492" height="302" src="https://cloud.githubusercontent.com/assets/4730683/14059390/970659aa-f365-11e5-9b91-3c7369ebfc40.png" alt="Screenshot">](http://code.mgvz.com/pBar/)

To include pBar plugin
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.pBar.min.js"></script>
```

Sample code
```html
<!-- single item (progress) bar -->

	<!-- default colors <#b32,#d31,#ea6,#fa6,#fd8,#ad6,#9c6,#5b6,#6a7> -->
	<div class="pBar" data-from="34" data-to="74"></div>
	
	<!-- single colors -->
	<div class="pBar" data-from="4" data-to="84" data-color="blue"></div>
	
	<!-- multiple colors -->
	<div class="pBar" data-from="84" data-to="4" data-color="red,yellow,green"></div>

<!-- stack bar -->

	<!-- stack bar with default colors -->
	<div class="sBar" data-name="a,b,c,d,e" data-value="3,4,5,6,7" style="width:150px;height:15px;"></div>
	
	<div class="sBar" style="width:150px;height:15px;"
		data-name="Present,Absent,On Duty,On Leave,Half Day"
		data-value="1221,512,311,414,115"
		data-color="#8a1,#d13,#EA991A,#EAC51A,#0ff"
	>
```

To update pBar-items after new items are added to document
```javascript
$(".pBar").pBar(); // to update single item (progress) bars
$(".pBar").sBar(); // to update stacked item bars
```
