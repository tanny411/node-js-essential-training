## The Full Stack Web Development Course: Others

### 1. Markdown
- `.md` or `.markdown`. Plain text that can be rendered nice and turned to html unlike RTF or HTML. Some extended markdowns(markdown extra, multi-markdown and the pandoc markdown extension) are light weight extensions to markdown and add features like tables, footnotes etc.
- Markdown [cheatsheet](/2.\ Markdown\ Basic\ Syntax/cheatsheet.md) and for [tables](/3.\ Task\ List\ &\ Tables/client_list.md)
- Can export md file as html in certain editors. Some editors can render markdown well, or can be done online.
- Markdown with nodejs with [marked](https://github.com/markedjs/marked) module.
    - install marked module
    - use is as such: 
    ```javascript
    var marked = require('marked'); 
    var html = marked('I am __Aisha__');

    //load md from file and render in html
    var app = express();
    app.get('/', function(req, res){
        var path = __dirname + '/markdown/index.md';
        var file = fs.readFile(path, 'utf8', function(err, data){
            if(err){
                console.log(err);
            }
            res.send(marked(data.toString()));
        });
    });
	});
    ```

### 2. Sass
- `Syntactically Awesome StyleSheets` sass is a css preprocessor that extends css and we can write "code" in one language and compile it in css. File extensions are `.sass` and `.scss`. Others are 'less' and 'Stylus'.
- Make sure to link your css file in html. Browser wont know what to do with scss file.
- We can have 
    - variables: `$bg:blue;`
    - nesting:
        ```scss
        .container{
            padding: 0px;
            ul{
                background-color: $bg
                li{
                    color: white
                }
            }
        }
        ```
    - partials: import one scss in another. Partials filename have to start with a `_`. Import by `// _myscss.scss` at the top of the other scss file. Or `@import 'myscss.scss'; `
    - mixins: bunch of css declarations that we can run at once. We can pass parameters, its kinda like a **function**. You wanna put your mixins in a partial.
        ```scss
        @mixin border-radius($radius){
            border-radius: $radius;
            -moz-border-radius: $radius;
        }

        .box{
            // other styles
            @include border-radius(20px);
        }
        ```
    - extend and inherit styles. 
        ```scss
        .container{
            // stuff stuff
        }
        .h1.red{
            @extend .container
            border-color: red;
        }
        .h1.blue{
            @extend .container
            border-color: blue;
        }
        ```
    - perform operations and calculations. `width: 400px + 100px`. `@if $val == 1 { li{ color:green } }`
    - `mix(white, $color, 40%)` this makes $color 40% white.
- To compile the sass files(3 ways):
    - Application: Coedit, Compass.app, Koala etc
    - CLI: Requires ruby installed
    - Runtime: Use task runner like Grunt or Gulp
- In Koala: Select the scss folder of your project. Set output path to the css folder. Its gonna create it for you.

### 3. Git
- `sudo apt-get install git`. Check `git --version`
- Common commands ![](images/git.png)
- 