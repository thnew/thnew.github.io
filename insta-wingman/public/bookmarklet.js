var BookmarkletClass = function() {
	// Set the main class reference for sub-namespaces
	this.menu.superClass = this;
	this.tools.superClass = this;
	
	// Create an object for readme
	this.readme = new BookmarkletReadme();
	
	// Create an object of popup
	this.popup = new BookmarkletPopup();
	
	// Create an object of the CustomPerformanceApi
	this.performanceApi = new CustomPerformanceApi();
	this.performanceApi.hideFileFromPerformanceApi("perf-bookmarklet.js");
	
	// add all CSS styles
	this.addStyles();
	
	// Put the page content into a wrapper
	this.pageContent = this.helpers.putPageContentsToDiv();
	document.body.appendChild(this.pageContent);
	
	// Add the menu
	this.menu.addBar();
	
	// Add the tool-active bar
	this.tools.addBar();
	
	/* Add symbols to menu */ {
		this.menu.addSymbol({
			name:		"Help",
			symbol:		"?",
			flagAs:		"info",
			onclick: function(superClass) {
				var content = superClass.readme.getHelpText();
				
				instaWingmanBar.popup.show(content);
			}
		});
		
		this.menu.addSymbol({
			name:		"Close",
			symbol:		"X",
			flagAs:		"danger",
			onclick: function(superClass) {
				superClass.menu.hide();
			}
		});
	}
	
	// Show it
	window.setTimeout(function() {
		instaWingmanBar.menu.show();
	}, 0);
};

BookmarkletClass.prototype = {
	toolConfig:		[],		// the tool links in the menu
	menuSymbols:	[],		// Symbols shown on the right of the bar
	
	// Adds a tool to the bookmarklet
	addTool: function(script) {
		this.toolConfig.push(script);
		
		// hide the tool form the results
		this.performanceApi.hideFileFromPerformanceApi("tools/" + script.file);
		
		this.menu.addMenuLink(script);
	},
	
	// adds all CSS styles to the page
	addStyles: function() {
		var head = document.head || document.getElementsByTagName('head')[0];
		
		var styleElem = document.createElement("style");
		styleElem.id = "InstaWingmanStyle";
		
		var style = "#InstaWingmanBar * { flex-direction: initial; }";
		style += "#InstaWingmanBar, #ToolsActiveBar { line-height: 20px !important; font-family: Arial !important; font-size: 14px !important; z-index: 1000000; color: #ECF0F1; position: fixed; top: 0px; left: 0px; width: 100%; background-color: #2B2B2B; box-shadow: 0px 0px 5px #000; }";
		style += "#InstaWingmanBar a, #ToolsActiveBar a { display: inline-block; cursor: pointer; text-decoration: none !important; color: #ECF0F1 !important; display: inline-block; padding: 5px; }";
		style += "#InstaWingmanBar a:hover, #ToolsActiveBar a:hover { background-color: #5065A1 !important; }";
		style += "#InstaWingmanBar a.danger:hover, #ToolsActiveBar a.danger:hover { background-color: #C0392B !important; }";
		style += "#InstaWingmanBar a.info:hover, #ToolsActiveBar a.info:hover { background-color: #3498DB !important; }";
		style += "#InstaWingmanBar a.disabled { color: #555 !important; cursor: default; }";
		style += "#InstaWingmanBar a.disabled:hover { background-color: transparent !important; }";
		style += "#InstaWingmanBar a.instaWingman_logo { width: 30px !important; background: url(" + this.menu.logoSrc + ") 0px 0px no-repeat; }";
		
		style += "#InstaWingmanBar.hide_bar, #ToolsActiveBar.hide_bar { top: -40px; }";
		
		style += "#InstaWingmanBar .perf_symbols, #ToolsActiveBar .perf_symbols { position: absolute; top: 0px; right: 0px; }";
		style += "#InstaWingmanBar .perf_symbols > *, #ToolsActiveBar .perf_symbols > * { vertical-align: middle !important; }";
		style += "#InstaWingmanBar .perf_symbols > a, #ToolsActiveBar .perf_symbols > a { width: 30px; text-align: center; }";
		style += "#InstaWingmanBar .perf_symbols .fullName { display: none; }";
		
		style += "#InstaWingmanBar .perf_separator { cursor: default; }";
		style += "#InstaWingmanBar .perf_separator:first-child { display: none; }";
		style += "#InstaWingmanBar .perf_symbols_separator { display: none; }";
		
		style += "#ToolsActiveBar .perf_back_button { font-weight: bold; }";
		style += "#ToolsActiveBar .perf_back_symbol { position: absolute; top: 50%;  margin-top: -11px; }";
		style += "#ToolsActiveBar .perf_tool_title { font-weight: bold; margin-left: 10px; }";
		
		style += "#InstaWingmanPageContent { position: absolute; left: 0px; top: 0px; width: 100%; }";
		
		style += "#BookmarkletToolContainer { z-index: 99999; position: absolute; top: 30px; right: 0px; left: 0px; visibility: hidden; }";
		
		style += "@media (max-width: 768px) {";
			style += "#InstaWingmanBar { height: auto !important; }";
			style += "#InstaWingmanBar.hide_bar, #ToolsActiveBar.hide_bar { top: -300px; }";
			style += "#InstaWingmanBar a.instaWingman_logo { display: none; }";
			style += "#InstaWingmanBar { padding: 0px; }";
			style += "#InstaWingmanBar a { width:	100%; }";
			style += "#InstaWingmanBar .perf_separator { display: none; }";
			
			style += "#InstaWingmanBar .perf_symbols { display: block; width: 100% !important; text-align: left !important; position: static !important; }";
			style += "#InstaWingmanBar .perf_symbols > * { display: block; width: 100% !important; text-align: left !important; position: static !important; }";
			style += "#InstaWingmanBar .perf_symbols .symbol { display: none; }";
			style += "#InstaWingmanBar .perf_symbols .fullName { display: block !important; }";
			style += "#InstaWingmanBar .perf_symbols_separator { display: block; }";
			
			// Remove all animations from the mobile view
			style += "#InstaWingmanPageContent, #InstaWingmanBar, #ToolsActiveBar, #BookmarkletToolContainer { transition: none !important; } ";
		style += "}";
		
		// Animations
		style += "#InstaWingmanBar, #ToolsActiveBar, #InstaWingmanPageContent, #BookmarkletToolContainer { transition: top ease-out 0.5s, opacity ease-out 0.5s; -webkit-transition: top ease-out 0.5s, opacity ease-out 0.5s; }";
		
		styleElem.innerHTML = style;
		head.appendChild(styleElem);
	},
	
	// Contains all necessary functions for the menu bar
	menu: {
		superClass:		null,
		bar:			null,
		toolsMenu:		null,
		symbolsBlock:	null,
		logoSrc:		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNvyMY98AAAJGSURBVEhL1ZVNq2lRGMfvx/GSQiQG3iNlJAOGjDhCEiNloihfwchMx1tKRImZgRwyMaGQt3A+w/3bz24fh3sd+zr31v2N9l7rWb+91nqevdYP8V/jn6htNluj0Xh7glKpZLfbWR2njsVi+/3+/Wnm87nD4SDnWS2Xy8fjMdv5NK1W60OtVqvX6zXb8zDb7Tafz78wJJNJbAi1TyaTZ9X9fl8kEpEFBIPBw+GA9m9Qd7tdUhChUOh/UGNzkX+ygFQqdTwe0c5PvVqtqtVqJBKJx+O1Wo0Lnk6nTEG/jUYjmjLgoW6325gdlzGhUKjT6QaDAdt9w6NqbKhUKqXQSwwGA6bMBn3m12qUKn7W19dX7ABescZAIEBxt6TTaUZ1/gMLhUK9Xr+314vFwmQyWa1WfAOvs9lMq9VS3C2Xo4xG4xd1jSCz2cyVEZZ8WQNX/G7UPTU3azTiOKS4W7xeL51oPNQKhYJLUS6Xo7hbKpUKxQyHQ7w+pEYLcsKMOic2HA4zkZ9IJBIkAvT5R9VOpxPPzMD33W6HE06pVDLxYr1ej/lSMQCsT6PRoP1RNYhGo9y8CKyAcsCBVxQGxfNQ4/fLZrN3rp7lcom7iYIBDzWA3WKx9Hq9q+lji4rF4lVd8lMTODTwDY/HQxeKy+USCASXlwDxhXqz2bjdburgSyaTgeFarVKp6NAgKF18YQdfqSUSSbPZZHuehvvLzmqAI7jT6bCdf8rpdCqXyzKZjJysGiBdKH6fz0fp4ovf77+8McCH+psRi38CwDoJAQBsT6AAAAAASUVORK5CYII=",
		
		addBar: function() {
			var superClass = this.superClass;
			var menu = this;
			
			var body = document.getElementsByTagName("body")[0];
			
			// Create container for the bar
			menu.bar = document.createElement("div");
			menu.bar.id = "InstaWingmanBar";
			menu.bar.className = "hide_bar";
			menu.bar.superClass = superClass;
			body.appendChild(menu.bar);
			
			/* Build the scaffold for the bar */ {
				// Container for the tool links
				menu.toolsMenu = document.createElement("div");
				menu.bar.appendChild(menu.toolsMenu);
				
				// Separator between tools and symbols in mobile view
				var separatorElem = document.createElement("hr");
				separatorElem.className = "perf_symbols_separator";
				menu.bar.appendChild(separatorElem);
				
				// Container for symbols
				menu.symbolsBlock = document.createElement("div");
				menu.symbolsBlock.className = "perf_symbols";
				menu.bar.appendChild(menu.symbolsBlock);
				
				// Add logo
				var logo = document.createElement("a");
				logo.href = "#";
				logo.target = "_blank";
				logo.className = "instaWingman_logo";
				logo.innerHTML = "&nbsp;";
				//menu.symbolsBlock.appendChild(logo);
			}
			
			/* Add contents */ {
				// Add all tool links
				for(var i in superClass.toolConfig)
				{
					this.addMenuLink(superClass.toolConfig[i]);
				}
				
				for(var i in superClass.menuSymbols)
				{
					this.addSymbol(superClass.menuSymbols[i]);
				}
			}
		},
		
		addSymbol: function(script_for_symbol) {
			var link = this.createMenuLink(script_for_symbol);
			
			this.symbolsBlock.appendChild(link);
		},
		
		addMenuLink: function(script) {
			// Add a separator to the last element
			var separatorElem = document.createElement("span");
			separatorElem.className = "perf_separator";
			separatorElem.innerHTML = "&middot;";
			this.toolsMenu.appendChild(separatorElem);
			
			var link = this.createMenuLink(script);
			this.toolsMenu.appendChild(link);
		},
		
		createMenuLink: function(script) {
			var superClass = this.superClass;
			var menu = this;
			
			var link = document.createElement("a");
			link.data = {
				script: script
			};
			
			// if performance api required, but api not available, disable
			var disableTool = (script.requiresPerformanceApi && window.performance == null);
			link.className += (disableTool ? " disabled" : "");
			link.className += (script.flagAs ? " " + script.flagAs : "");
			if(disableTool) link.title = "This tool was disabled cause your browser doesn't support the Resource Timing API!";
			
			// If not disabled, add click handlers
			if(!disableTool)
			{
				if(script.url != null)
				{
					link.href = script.url;
					link.target = "_blank";
				}
				else
				{
					link.href = "javascript:;";
					link.onclick = menu._onLinkClick;
				}
				
				// Remember the onclick event in the link-element
				link._onToolStartTrigger = script.onclick;
			}
			
			// Add the link-labels
			if(script.name != null)
			{
				var fullName = document.createElement("span");
				fullName.className = "fullName";
				fullName.innerHTML = script.name;
				fullName._onToolStartTrigger = script.onclick;
				link.appendChild(fullName);
			}
			
			if(script.symbol != null)
			{
				var symbol = document.createElement("span");
				symbol.className = "symbol";
				symbol.innerHTML = script.symbol;
				symbol._onToolStartTrigger = script.onclick;
				link.appendChild(symbol);
			}
			
			return link;
		},
		
		// Show the menu bar
		show: function() {
			this.bar.className = this.superClass.helpers.removeClass(this.bar.className, "hide_bar");
			
			this.superClass.pageContent.style.top = this.bar.offsetHeight + "px";
		},
		
		// Hide the menu bar
		hide: function() {
			this.bar.className = this.superClass.helpers.addClass("hide_bar");
			
			this.superClass.pageContent.style.top = "0px";
		},
		
		_onLinkClick: function(e) {
			// handles clicks on the label or the link itself
			var superClass =
				e.target.parentNode.parentNode.superClass ||
				e.target.parentNode.parentNode.parentNode.superClass;
			var menu = superClass.menu;
			var tools = superClass.tools;
			
			// handles clicks on the label or the link itself
			var script = (e.target.data != null ? e.target.data.script : e.target.parentNode.data.script);
			
			// if onclick function is set, execute it
			if(typeof(e.target._onToolStartTrigger) == "function")
			{
				e.target._onToolStartTrigger(superClass);
			}
			
			if(script.file == null) return;
			
			menu.hide();
			tools.show();
			
			// Set the tools-bar title
			superClass.toolBarActiveTitle.innerHTML = script.name || script.symbol;
			
			// Create container for the tool
			tools.toolContainer = document.createElement("div");
			tools.toolContainer.id = "BookmarkletToolContainer";
			document.body.appendChild(tools.toolContainer);
			
			// Load specified script
			var jselem = document.createElement("script");
			jselem.id = "PerfScript";
			jselem.type = "text/javascript";
			
			// Decide whether to load local, dev or public script
			if(superClass.helpers.isLocal())
			{
				jselem.src = "/tools/" + script.file;
			}
			else if(superClass.helpers.isDev())
			{
				jselem.src = "localhost:8080/tools/" + script.file;
			}
			else
			{
				jselem.src = "https://thnew.github.io/insta-wingman/public/tools/" + script.file;
			}
			
			jselem.onload = function() {
				// Create an object of the tool
				if(script.className != null)
				{
					var toolClass = window[script.className];
					tools.activeTool = new toolClass(superClass.performanceApi, tools.toolContainer, superClass.popup);
				}
				
				// Set if container is fixed
				tools.toolContainer.style.position = script.isFixed ? "fixed" : "absolute";
				
				var toolHeight = tools.toolContainer.offsetHeight;
				
				var transition = tools.toolContainer.style.transition;
				tools.toolContainer.style.transition = tools.toolContainer.style['-webkit-transition'] = "none";
				tools.toolContainer.style.top = -toolHeight + "px";
				
				window.setTimeout(function() {
					tools.toolContainer.style.visibility = "visible";
					tools.toolContainer.style.transition = transition;
					tools.toolContainer.style.top = tools.bar.offsetHeight + "px";
					
					var pageContentTop = tools.bar.offsetHeight;
					pageContentTop += toolHeight;
					
					superClass.pageContent.style.top = pageContentTop + "px";
				}, 0);
			};
			
			document.getElementsByTagName("body")[0].appendChild(jselem);
		}
	},
	
	// Contains all necessary functions for the tools bar and the ToolsActive view
	tools: {
		superClass:		null,
		bar:			null,
		activeTool:		null,
		toolContainer:	null,
		
		addBar: function() {
			var superClass = this.superClass;
			var tools = this;
			
			var body = document.getElementsByTagName("body")[0];		
			
			/* Tool Active Bar */ {
				tools.bar = document.createElement("div");
				tools.bar.id = "ToolsActiveBar";
				tools.bar.className = "hide_bar";
				tools.bar.superClass = superClass;
				body.appendChild(tools.bar);
				
				var symbolsBlock = document.createElement("div");
				symbolsBlock.className = "perf_symbols";
				tools.bar.appendChild(symbolsBlock);
				
				// Add back button
				var toolBarActiveBackButton = document.createElement("a");
				toolBarActiveBackButton.className = "perf_back_button";
				toolBarActiveBackButton.href = "javascript:;";
				toolBarActiveBackButton.onclick = function() {
					// Trigger close of tool-active bar
					close.onclick(true);
				};
				tools.bar.appendChild(toolBarActiveBackButton);
				
				// Add back symbol
				var backSymbol = document.createElement("span");
				backSymbol.className = "perf_back_symbol";
				backSymbol.innerHTML = "&#9001; ";
				toolBarActiveBackButton.appendChild(backSymbol);
				
				// Add title bar
				superClass.toolBarActiveTitle = document.createElement("span");
				superClass.toolBarActiveTitle.className = "perf_tool_title";
				superClass.toolBarActiveTitle.innerHTML = "Nice tool";
				toolBarActiveBackButton.appendChild(superClass.toolBarActiveTitle);
				
				// Add symbols
				var symbolsBlock = document.createElement("div");
				symbolsBlock.className = "perf_symbols";
				tools.bar.appendChild(symbolsBlock);
				
					// Add help button
					var help = document.createElement("a");
					help.href = "javascript:;";
					help.innerHTML = "?";
					help.superClass = superClass;
					help.onclick = function(e) {
						var title = superClass.toolBarActiveTitle.innerHTML;
						var content = e.target.superClass.readme.getHelpText(title);
						
						instaWingmanBar.popup.show(content, true);
					};
					symbolsBlock.appendChild(help);
					
					// Add close button
					var close = document.createElement("a");
					close.href = "javascript:;";
					close.innerHTML = "X";
					close.onclick = function(isBackButton) {
						tools.hide();
						
						// if back button was triggered originally
						if(isBackButton === true)
						{
							// Show menu bar
							superClass.menu.show();
						}
						else
						{
							// Set page content back to normal position
							superClass.pageContent.style.top = "0px";
						}
						
						tools.toolContainer.style.top = -tools.toolContainer.offsetHeight + "px";
						
						window.setTimeout(function() {
							// Remove the tool script
							var scriptElem = document.getElementById("PerfScript");
							scriptElem.parentNode.removeChild(scriptElem);
							
							// Remove the tool container
							tools.toolContainer.parentNode.removeChild(tools.toolContainer);
							
							if(tools.activeTool.destructor != null) tools.activeTool.destructor();
						}, 500);
					};
					symbolsBlock.appendChild(close);
			}
		},
		
		// Show the tools bar
		show: function() {
			this.bar.className = this.superClass.helpers.removeClass(this.bar.className, "hide_bar");
			
			this.superClass.pageContent.style.top = this.superClass.tools.bar.offsetHeight + "px";
		},
		
		// Hide the tools bar
		hide: function() {
			this.bar.className = this.superClass.helpers.addClass("hide_bar");
		}
	},
	
	/* Contains various functions to support the functionality
	All these functions work independent from the class itself. No connections to it!
	*/
	helpers: {
		isLocal: function() {
			// Flag if this script is executes locally or not
			return ((self.location+"").split("http://").pop().split("/")[0] == "localhost:8080");
		},
		
		isDev: function() {
			// Flag if this script is executes locally or not
			return (typeof(isDevelopmentMode) == "undefined" ? false : isDevelopmentMode);
		},
		
		removeClass: function(elemClassName, classToRemove) {
			var classes = elemClassName.split(" ");
			var index = classes.indexOf(classToRemove);
			
			if(index != -1) classes.splice(index, 1);
			
			return classes.join(" ");
		},
		
		addClass: function(elemClassName, classToAdd) {
			return elemClassName += " " + classToAdd;
		},
		
		// Takes all page contents, and puts them into a wrapper
		putPageContentsToDiv: function() {
			var body = document.body;
			
			var container = document.createElement("div");
			container.id = "InstaWingmanPageContent";
			
			for(var i = (body.childNodes.length - 1); i>=0; i--)
			{
				if(body.childNodes[i].nodeName == "SCRIPT") continue;
				if(body.childNodes[i].id == "InstaWingmanLoadingHint") continue;
				if(body.childNodes[i].id == "InstaWingmanBar") continue;
				if(body.childNodes[i].id == "ToolsActiveBar") continue;
				
				if(container.childNodes.length == 0) container.appendChild(body.childNodes[i]);
				else container.insertBefore(body.childNodes[i], container.firstChild);
			}
			
			return container;
		}
	}
};

/* Markdown Parser */ {
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:cap[1]==="pre"||cap[1]==="script"||cap[1]==="style",text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=escape(this.smartypants(cap[0]));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img class="instaWingman_popup_img_responsive" src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&([#\w]+);/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());
}

/* Readme */ {
	var BookmarkletReadme = function() {
		var readme = '# Insta Wingman\n';
		readme += 'This wingman brings you Followers instead of chicks.\n';
		
		this.readme = readme;
		
		// Reads the bookmarklets parsed readme. If a tools title is set, just the sub-article to this tool will be delivered
		this.getHelpText = function(title) {
			if(title == null)
			{
				content = this.readme;
			}
			else
			{
				var titlePrefix = "##### ";
				var readmeLines = this.readme.split("\n");
				
				var contentLines = [];
				var grabContent = false;
				for(var f in readmeLines)
				{
					var line = readmeLines[f];
					
					var isTitle = (line.substr(0, titlePrefix.length) == titlePrefix);
					
					if(isTitle)
					{
						// If the line is a title, but the searched title was already found earlier, stop grabbing content
						if(grabContent) break;
						
						if(line.substr(titlePrefix.length) == title)
						{
							grabContent = true;
						}
					}
					
					if(grabContent)
					{
						contentLines.push(line);
					}
				}
				
				var content = contentLines.join("\n");
			}
			
			var markedContent = marked(content);
			
			return markedContent;
		};
	};
}

/* Popup */ {
	// A simple popup
	var BookmarkletPopup = function() {
		this.id = "instaWingmanPopup_" + Math.round(Math.random() * (Math.pow(2, 32) - 1));
		this.backgroundId = "instaWingmanPopupBackground_" + Math.round(Math.random() * (Math.pow(2, 32) - 1));
		
		var styleElem = document.createElement("style");
		styleElem.id = "instaWingmanPopupStyle";
		
		var style = ".instaWingmanPopup { line-height: 20px !important; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; z-index: 1000002; position: fixed; top: 10px; bottom: 10px; left: 25%; width: 50%; height: auto; min-height: auto; background: #fff; box-shadow: 2px 2px 10px rgba(0,0,0,0.7); }";
		style += ".instaWingmanPopup ul { list-style: inherit; margin: auto; padding: inherit; }";
		style += ".instaWingmanPopup .instaWingman_popup_img_responsive { width: 100%; }";
		style += ".instaWingmanPopup.is_short { height: 500px; }";
		style += ".instaWingmanPopup .instaWingman_popup_content { word-wrap: break-word; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 50px; overflow: auto; padding: 15px; }";
		style += ".instaWingmanPopup .instaWingman_popup_button_row { position: absolute; bottom: 0px; left: 0px; right: 0px; height: 50px; }";
		style += ".instaWingmanPopup .instaWingman_popup_button_row a { position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; color: #555; font-size: 16px; background: #ECF0F1; padding: 14px; text-align: center; }";
		style += ".instaWingmanPopup .instaWingman_popup_button_row a:hover { cursor: pointer; background-color: #BDC3C7; }";
		style += ".instaWingmanPopupBackground { z-index: 1000001; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; background: rgba(0,0,0,0.5); }";
		
		style += '.instaWingmanPopup h1, .instaWingmanPopup h2, .instaWingmanPopup h3, .instaWingmanPopup h4, .instaWingmanPopup h5 { font-weight: 500 !important; line-height: 1.1 !important; text-decoration: none !important; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #5065A1 !important; margin: 20px 0px 20px !important; padding: 0px !important; }';
		style += '.instaWingmanPopup h1 { font-size: 36px !important; margin: 0px 0px 20px !important; }';
		style += '.instaWingmanPopup h2 { font-size: 30px !important; }';
		style += '.instaWingmanPopup h3 { font-size: 24px !important; }';
		style += '.instaWingmanPopup h4 { font-size: 18px !important; }';
		style += '.instaWingmanPopup h5 { font-size: 14px !important; }';
		style += '.instaWingmanPopup a { color: #345F41 !important; text-decoration: none !important; }';
		style += '.instaWingmanPopup a:hover, a:active, a:focus { color: #2D5036 !important; }';
		
		style += "@media (max-width: 768px) {";
			style += ".instaWingmanPopup { width: 400px; left: 50%; margin-left: -200px; }";
		style += "}";
		
		styleElem.innerHTML = style;
		document.head.appendChild(styleElem);
	};
	
	BookmarkletPopup.prototype = {
		id:				"",
		backgroundId:	"",
		elem:			null,
		contentElem:	null,
		backgroundElem:	null,
		
		show: function(content, isShort) {
			if(this.elem == null)
			{
				this.elem = document.createElement("div");
				this.elem.id = this.id;
				this.elem.className = "instaWingmanPopup";
				document.body.appendChild(this.elem);
				
				this.contentElem = document.createElement("div");
				this.contentElem.className = "instaWingman_popup_content";
				this.elem.appendChild(this.contentElem);
				
				var buttonRow = document.createElement("div");
				buttonRow.className = "instaWingman_popup_button_row";
				this.elem.appendChild(buttonRow);
				
				var closeButton = document.createElement("a");
				closeButton.innerHTML = "close";
				closeButton.superClass = this;
				closeButton.onclick = function(e){ e.target.superClass.hide() };
				buttonRow.appendChild(closeButton);
				
				// Background
				this.backgroundElem = document.createElement("div");
				this.backgroundElem.id = this.backgroundId;
				this.backgroundElem.className = "instaWingmanPopupBackground";
				this.backgroundElem.superClass = this;
				this.backgroundElem.onclick = function(e){ e.target.superClass.hide() };
				document.body.appendChild(this.backgroundElem);
			}
			
			this.elem.style.display = "block";
			this.backgroundElem.style.display = "block";
			
			this.elem.className += (isShort ? " is_short" : "");
			
			if(typeof(content) == "string")
			{
				this.contentElem.innerHTML = content;
			}
			else if(typeof(content) == "object")
			{
				for(var f in content)
				{
					this.contentElem.appendChild(content[f]);
				}
			}
		},
		
		hide: function() {
			this.elem.style.display = "none";
			this.backgroundElem.style.display = "none";
			this.contentElem.innerHTML = "";
		}
	};
}

/* CustomPerformanceApi */ {
	// An interface to offer pre filtered results from the perfomance API
	function CustomPerformanceApi() {
		this.getEntriesByType = function(type) {
			if(window.performance && window.performance.getEntriesByType !== undefined)
			{
				var resources = window.performance.getEntriesByType(type);
			}
			else if(window.performance && window.performance.webkitGetEntriesByType !== undefined)
			{
				var resources = window.performance.webkitGetEntriesByType(type);
			}
			else
			{
				alert("Oups, looks like this browser does not support the Resource Timing API\ncheck http://caniuse.com/#feat=resource-timing to see the ones supporting it \n\n");
			}
			
			return removeOwnSourcesFromResources(resources);
		}
		
		var filesToHide = [];
		
		this.hideFileFromPerformanceApi = function(file) {
			filesToHide.push(file);
		};
		
		var removeOwnSourcesFromResources = function(resources) {
			var filteredResources = [];
			
			for(var f in resources)
			{
				var r = resources[f];
				var url = r.url || r.name;
				
				var hideThis = false;
				for(var g in filesToHide)
				{
					var hideMe = filesToHide[g];
					
					if(url.length >= hideMe.length && hideMe == url.substr(url.length - hideMe.length))
					{
						hideThis = true;
						break;
					}
				}
				
				if(hideThis) continue;
				
				filteredResources.push(r);
			}
			
			return filteredResources;
		};
		
		this.getPageLoadTime = function() {
			var resources = this.getEntriesByType("resource");
			
			var pageLoadTime = 0;
			for(var f in resources)
			{
				var resource = resources[f];
				
				var fin = resource.startTime + resource.duration;
				
				if((fin - pageLoadTime) >= 2000) break;
				
				pageLoadTime = Math.max(pageLoadTime, fin);
			}
			return Math.round(pageLoadTime);
		};
	}
}

// If InstaWingmanBar not yet already exists, create it
if(instaWingmanBar != null)
{
	instaWingmanBar.menu.show();
}
else
{
	var instaWingmanBar = new BookmarkletClass();

	/* Tools */ {
		/* All necessary informations about the tools to be included
		Structure:
		{
			// The name
			name:						"Page load waterfall",
			
			// The file name
			file:						"waterfall.js",
			
			// Whether the tool-container should stay at a fixed position when user is scrolling
			isFixed: 					true,
			
			// Flags whether the tool requires the performance API which e.g. Safari for Windows does not support
			requiresPerformanceApi:		true,
			
			// The name of the class that will be instantiated after loading the script
			className:					"Waterfall"
		}
		*/
		
		instaWingmanBar.addTool({
			name:					"Export Followers",
			file:					"followUsers.js",
			requiresPerformanceApi:	false,
			className:				"ExportFollowers"
		});
		
		instaWingmanBar.addTool({
			name:					"Export Following",
			file:					"followUsers.js",
			requiresPerformanceApi:	false,
			className:				"ExportFollowing"
		});
		
		instaWingmanBar.addTool({
			name:					"Action Console",
			file:					"instaConsole.js",
			requiresPerformanceApi:	false,
			className:				"InstaConsole"
		});
	}
}