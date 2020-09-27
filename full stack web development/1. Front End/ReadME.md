## The Full Stack Web Development Course: Front End

### 1. HTML
- Block level elemenst: Start on a new line, take the whole width.
- Inline: Start where they are and take only necessary width.
- Besides `ul`, `li` there is `dd` or description list.
- After floats, you need to clear it with a div having style `clear:both`

### 2. HTML5
- Semantic tags: header, nav, main, article, aside(sidebar), footer
- Audio and Video tags, inc/dec volume, play, pause from js etc.
- HTML5 canvas manipulation using js.
- svg tag manipulation using XML. Basically use tags for shapes and all.
- storages store key value pairs. set and get items from local storage using js. First put checks for if browser can use local storage. Things will remain in this storage until you clear your cache, even if you close your browser. Use session storage to remove stuff when you close your browser. In chrome deve tools > application > session/local storage, you can see your stuff.
- With a couple of tiny js functions we can implement drag and drop. 
- Use `contenteditabe=true` and your content will be editable.
- For gelocation also, check if browser can use it.

### 3. CSS
- `p{}`, `div{}`, `p,div{}`, `p#ix{}`, `div ul.myclass{}` just a bunch of combinations
- margin/padding: top right bottom left OR top&bottom left&right. e.g `padding: 10px 20px`.
- `.clr{clear:both}` after using floats.
- `em` instead of pixel. It is a measure relative to the font size.
- To hide div but retain the empty space use `visibility:hidden`, else to remove the blank space also, use `display:none`.
- Positioning can be
	- `static`: normal flow of page.
	- `relative`: relatve to where it is supposed to be, we can use left, right etc with this to push the block around.
	- `fixed`: always in the same place.
	- `absolute`: push the block aroud wrt the nearest relative ancestor.
- Pseudo class: A specific state of an element. E.g. `a:hover{}`, `a:active{}`, `input:focus{}`
- Pseudo selectors: 
	- `.myList li:fisrt-child{}`, `.myList li:last-child{}`
	- `.myList li:nth-child(3n+3){}` ==> every 3rd child gets selected. For all n, from n=0; We can also use `even`/`odd` 
- We can set border radius, borders from images, multiple background images(with gifs), gradients in blocks, even radial gradients.
- Color schemes include: rgb, rgba, hex values, hsl, hsla.
Text shadows with `text-shadow: shadow-x shadow-y blur color` and we can also put multiple shadows, comma separated. ALso we can do `box-shadow`. Useful to make cards and stuff in your page.
- When we change style with hover or other pseudo classes, it's smoother to use transitions, for example:
	```
	#box1{
		width:100px;
		transition: width 2s;
	}
	#box1:hover{
		width:300px;
	}
	```
	- Also look at `transition-timing-function`s, can use `transition-delay: 1s`.
	- `transition: width 2s, height 4s;` for multiple properties.
- Animation for example:
	```
	#box2{
		width:100px;
		height:100px;
		position:relative;
		background-color:red;

		animation-name:myanimation;
		animation-duration:5s;

		animation-iteration-count:3;
		animation-direction:reverse;
	}
	@keyframe myanimation{
		from {background-color:red;}
		to {backfround-color:blue;}
	}
	```
	OR
	```
	@keyframe myanimation{
		0% {background-color:red; left:0px; top:0px }
		50% {backfround-color:blue; left:200px; top:0px }
		100% {backfround-color:green; left:200px; top:200px }
	}
	```
- Divide text into columns
	```
	article{
			column-count:3;
			column-gap:40px;
			/*
			column-rule-style:solid;
			column-rule-width: 1px;
			column-rule-color: coral;
			*/
			column-rule: 1px solid coral;
		}
	article h1{
			column-span:all;
		}
	```
- We can resize blocks with `resize:` horizontal, vertical or both.
- `outline`, `outline-offset`
- CSS3 has flex-box. Basically we get a flex-container and divs inside it with class flex-item. The items are arranged as specified inside the container div. Now we can use these:
	```
	.flex-container{
		display:flex;
		/*
		flex-direction:column-reverse/column/column-reverse;
		*/
		justify-content: space-around;
	}
	```
	For the items, we can use `order:-1` to specify ordering.

### 4. Bootstrap
- If you follow the bootstrap guidelines and especially if you are using the grid system, your application will be responsive. It uses the mobile first approach.
- `getbootstrap.com` download or use the cdn. Mainly gonna use bootstrap.css and bootstrap.js. Also need jquery for bootstrap. Just add the cdn.
- Include viewport to make the site responsive. From bootstrap examples we can copy the source (open source Ctrl+U).
- Some classes:
	- `lead` class to make text more prominent
	- `mark` to hilight text
	- `del` to strike text
	- `text-center` or left, right, justify, nowrap
	- `text-lowercase` or uppercase, capitalize
	- `<blockquote> <p></p> </blockquote>` or `<blockquote class="blockquote-reverse"> <p></p> </blockquote>`
	- `<ul class="list-unstyled"> </ul>` doesnt pertain to nested lists
	- `<table class="table"></table>` and some more like table-hover, table-striped, table-condensed
- Forms:
	- Wrap each form field in a div with class `form-group`.
	- `form-control` class for inputs.
	- Theres also `form-inline`.
- Buttons in getbootstrap.com >> componenets
	- Buttons in button tag, a tag, submit or button input tags as well
	- If you put buttons in a div with `btn-group`, they format together, rounded sides etc.
- We can use icons in span tags. getbootstrap.com >> glyphicons.
- class `breadcrumb` in lists to create a breadcrumb area at the top of an article
- pagination => page numbers put at the botton of pages.
- class `label label-success` etc.
- Badges, like number of notification/email. `badge` class in span.
- `ul.list-group` and `ul li.list-group-item` for nice looking list. Use div instead of ul, a tag instead of li to get menu effect, hover properties etc. Can add badges in lists. Content in list groups as well.
- Panel
- Well
- Alerts
- Progress bar `<div class="progress-bar progress-bar-success progress-bar-striped", style="width:60%">60%</div>`
- Grid System:
	- The entire width is divided into 12 columns. we can make each row divided to span several columns that add upto 12. Below is a schematic example. We can add xs. lg etc to specify the behavior of the columns in small or large screen devices.
		```
		.container
			.row
				.col-md-12
			.row
				.col-md-6 col-xs-6
				.col-md-6 col-xs-6
		```
	- Add `col-md-offset-2` to offset 2 columns. For example when you have 2 col-md-4 and you wanna center them.
	- We can also next rows inside columns. New rows will also be 12 columns, even if inside a col-6.
- Modals: Schematic example of a modal for quick reference.
	```
	<button data-toggle="modal" data-target="#myModal"></button>
	<div class="modal fade" id="myModal">
		div.modal-dialog
			div.modal-content
				div.header
					h4.modal-title #myModalLabel
				div.modal-body
					text
				div.modal-footer
				button.close data-dismiss="modal"
	</div>
	```
- Dropdowns: .dropdown-menu inside .dropdown.
- Nav Tabs: link `a` tags to .tab-contents with same id.
- Tooltip: `<button data-toggle="tooltip" data-placement="left" title="The tip">Click me!</button>` and also enable tooltip with jquery `$("[data-toggle='tooltip']").tooltip()`.
- Similar is popover.
- Collapse: Kindof like Modal but instead of a separate box, its a part within the page.
- Accordions: Like vertical tabs, with content on click
- Carousals are slide slow for like images, with arrows and other controls.

### 5. Basic JavaScript
- JS is a scripting language, interpreted (not compiled), untyped and multi-paradigm (both OOP and functional)
- JS output:
	- console.log()
	- window.alert()
	- document.write() display within script tags of html, shows on screen
	- innerHTML
- Array: We can use it as `key-value pairs` too. It's like a python list and dict merged together. Ofcourse more specific type for dicts is js Objects, they are key-value pairs.
- `const date = new Date()` gives present date. We can use date.getDate(), date.getDay(), date.getFullYear() etc.
- Events:
	- Events for buttons: onlick, onmouseover, onmouseout, ondblclick etc.
	- Events on forms: onsubmit, onblur, onfocus, onkeyup etc.
	- Better is to use event listeners. `id_elem.addEventListener('submit', submitFunc, false)`.
	- event.preventDefault() to stop form from submitting.
	- onload for mainly the body.
- `div.className` = someclasses
- AJAX:
	- Make http requests without refreshing the whole page.
		```
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState == 4 && xhttp.status == 200){
				console.log(xhttp.responseText)
				//JSON.parse(xhttp.responseText) when recieving a json object
			}
		}
		xhttp.open('GET','file.txt', true);
		xhttp.send();
		```
	- This xhttp object has a couple of properties and methods.
	- `onreadystatechange` stores a function to be called everytime the ready state changes. States are:
		- 0: request not initialized
		- 1: server connection established
		- 2: request recieved
		- 3: processing request
		- 4: request finished and response is ready
	- Replace the file with your url.
	- On chrome you need to use a server like Apache to run this, you don't need server for firefox though. Just open the html from the file.

### 6. JQuery
- Jquery has events, effects, DOM manipulation, CSS manipulation.
- Run codes after body loads.
	- `$(document).ready(function(){ \\ALL JS HERE });` 
	- or the short form `$(function(){ \\ALL JS HERE });`.
- JQuery has events: 
	- `$(selector).on('someAction', function(){})` 
	- or `$(selector).someAction(function(){})`.
- Selector can be *, **this**, any way we choose elements in css. p:first, ul li:first, ul li:first-child, [attr], a[href!='#'], :button, tr:odd etc. [See descriptions and more in docs](https://api.jquery.com/category/selectors/).
- Call a function when hovering and call another when not hovering.
	```
	$('#square').hover(function(){
			$(this).text('Hovering...');
		}, function(){
			$(this).text('');
		});
	```
- To undo some function on event, put reverse funtions inside the original function.
	```
	$focus
		$blur
	
	$mousein
		$mouseout
	```
- Some stuff:
	- Selector like `select option:selected`. For select lists `change` event is used.
	- `:input` to select all input tags. 
	- `.select()` to fire when a text is selected.
	- `$(selector).html('some text')` or text('some text') etc. val('some text') for input types. Can use the same functions to get the text like `$(selector).text()`.
	- Set attributes `$(selector).attr('class', 'btn')`. Remove attributes with `.removeAttr('class)`.
	- .append(), .prepend() going to add within the selected element.
	- .before, .after() are going to put things outside the selected element.
	- .remove() vs .empty()
	- .addClass(), .removeClass(), .toggleClass()
	- .replaceWith()
	- .unwrap() removes the wrapping element. .wrap() to add a wrapper.
- Manipulating css: 
	- `$(selector).css('color', 'pink')`.
	- `$(selector).css({'color':'pink', 'height':'100'})`.
- JQuery effects:
	- .hide(), .show(), .toggle(), .fadeOut(). fadeToggle(4000), slideUp(), slideToggle(), .stop()
	- `.animate({ //chage some css }, 'fast')`. the 'fast' is optional.
 	- To keep animation going when the function fires, in the css part use +=. For example `left: '+=250px'` and it will keep going right on every click.
	- Use multiple animation calls one after another to achieve some complex animations.
- Traversing and Filtering:
	- $(selector).parent() takes immediate parent, .parents() takes all ancestors.
	- Specify certain parent like .parent('ul')
	- .parentsUntil('ul')
	- .children() selects immediate children
	- .find('p) looks for p in its children
	- .siblings(), .siblings('p')
	- .next(), .nextAll(), .nextUntil(), and .prev()
	- $('p').first() to get the first paragraph. Similarly .last()
