## The Full Stack Web Development Course

### Contents
The sections are listed below. Some bits of notes I took are written under each section. Codes for each section is found in the folders.

#### 1. HTML
- Block level elemenst: Start on a new line, take the whole width.
- Inline: Start where they are and take only necessary width.
- Besides `ul`, `li` there is `dd` or description list.
- After floats, you need to clear it with a div having style `clear:both`

#### 2. HTML5
- Semantic tags: header, nav, main, article, aside(sidebar), footer
- Audio and Video tags, inc/dec volume, play, pause from js etc.
- HTML5 canvas manipulation using js.
- svg tag manipulation using XML. Basically use tags for shapes and all.
- storages store key value pairs. set and get items from local storage using js. First put checks for if browser can use local storage. Things will remain in this storage until you clear your cache, even if you close your browser. Use session storage to remove stuff when you close your browser. In chrome deve tools > application > session/local storage, you can see your stuff.
- With a couple of tiny js functions we can implement drag and drop. 
- Use `contenteditabe=true` and your content will be editable.
- For gelocation also, check if browser can use it.

#### 3. CSS
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