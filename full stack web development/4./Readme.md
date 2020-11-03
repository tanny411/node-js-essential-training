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