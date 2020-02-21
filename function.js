
        (function() {
            var $body, $code_pre, $script_area, $style_elem, createElement, getURLParam, openComment, openInteger, openString, prevAsterisk, prevSlash, scriptSyntax, styleSyntax, writeChar, writeChars, __js, _body_selection, _code_block, _code_pre, _codes, _colors, _cousin_id, _current_code, _gutter, _pen_id, _script_area, _style_elem, _throttle, _version, _writing_rate;

            _pen_id = "EnKiuBi";

            _cousin_id = "Developer";

            _gutter = 80;

            _writing_rate = 16;

            _throttle = {
                start: 4821,
                stop: 5344
            };

            _colors = {
                background: "#75715e",
                text: "#f9f9f9",
                offblack: "#111111",
                dark: "#75715e",
                selector: "#a6da27",
                key: "#64d9ef",
                value: "#fefefe",
                hex: "#f92772",
                text: "#fefefe",
                string: "#d2cc70",
                "var": "#66d9e0",
                operator: "#f92772",
                method: "#f9245c",
                integer: "#fd971c",
                run: "#ae81ff"
            };

            _body_selection = "document.body";

            _current_code = 0;

            _codes = ["/* \n * \"pen#" + _pen_id + "\" v1.0.1\n * Robot rights protected under BOT License\n * Authored by pen#" + _pen_id + "\n */\n\nbody {\n  background-color: " + _colors.background + "; color: " + _colors.text + ";\n  font-size: 13px; line-height: 1.4;\n  margin: 0;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n#my-code {\n  overflow: auto;\n  position: fixed; width: 70%;\n  margin: 0;\n  top: " + _gutter + "px; bottom: " + (_gutter + 35) + "px; left: 15%;\n}\n\n/* ...                  \n *\n * ...hello?            \n *\n * Oh! What up, dewds? It's me, pen#" + _pen_id + ".         \n *\n * I'm just trying some stuff out.            \n *\n * My cousin pen#PwXXLP told me to check out CodePen. \n * Seems pretty cool so far...\n *\n * Wanna watch?                       \n * Cool!\n *\n * This CSS is being injected into a DOM <style> tag  \n * and written in this <pre> element simultaneously.        \n *\n * Confused? Check it out!\n *\n */\n\n#my-code {\n  transition: left 500ms, width 500ms, opacity 500ms;\n  background-color: " + _colors.offblack + "; color: " + _colors.text + ";\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 2px;\n  box-shadow: \n    0px 0px 0px 1px rgba(255,255,255,0.2),\n    0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n/* \n * Syntax highlighting \n * Colors loosely based on Monokai Phoenix\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: " + _colors.dark + "; }\n.selector      { color: " + _colors.selector + "; }\n.selector .key { color: " + _colors.selector + "; }\n.selector .int { color: " + _colors.selector + "; }\n.key           { color: " + _colors.key + "; }\n.int           { color: " + _colors.integer + "; }\n.hex           { color: " + _colors.hex + "; }\n.hex .int      { color: " + _colors.hex + "; }\n.value         { color: " + _colors.value + "; }\n.var           { color: " + _colors["var"] + "; }\n.operator      { color: " + _colors.operator + "; }\n.string        { color: " + _colors.string + "; }\n.method        { color: " + _colors.method + "; }\n.run-command   { color: " + _colors.run + "; }\n\n/* \n *\n * See? Pretty cool...             \n *\n * ...just like my cousin.          \n *\n * But I can do more than that...               \n *\n */\n\n~\`\n\n/* \n * Let's write some Javascript.             \n * I will write some code and then type '~' to run it.        \n */\n\n/* Let's add a 'h1' element to put my name on here. */\nvar title = document.createElement(\"h1\");\ntitle.id = \"title\";\n\n/* Now we'll add my name to it */\ntitle.innerHTML = \"I am <em>pen#" + _pen_id + "</em>\";\n\n/* Finally, let's add it to the page */\n" + _body_selection + ".appendChild(title);\n             \n/* \n * \n * Ready?              \n * \n * Let's run it!              \n * \n */\n\n ~                 \n\n/*\n * Awesome! Now we need to position it.           \n * We need CSS for that.         \n */\n\`\n\n#title {\n  position: fixed; width: 100%; \n  bottom: 0; left: 0; right: 0;\n  font-size: 14px; line-height: 1;\n  font-weight: 100; text-align: center;\n  padding: 10px; margin: 0;\n  z-index: 10;\n  background-color: " + _colors.offblack + ";\n  border-top: 1px solid rgba(255,255,255,0.2);\n  transition: opacity 500ms;\n}\n#title em { \n  font-style: normal;\n  color: " + _colors.integer + ";\n}\n\n\n/*\n *\n * See how capable I am?         \n *\n * I can even embed myself within myself.\n *  \n * True inception.\n *\n * Don't believe me?                       \n *\n */\n\n#my-code { left: " + _gutter + "px; width: calc(50% - " + (_gutter * 1.5) + "px); }\n\n#iframe {\n  position: fixed;\n  display: block;\n  border: 0;\n  background-color: white;\n  border-radius: 2px;\n  width: calc(50% - " + (_gutter * 1.5) + "px); height: calc(100% - " + (_gutter * 2 + 35) + "px);\n  transition: left 500ms, width 500ms;\n  top: " + _gutter + "px; bottom: " + (_gutter + 35) + "px; left: 100%; \n  box-shadow: \n    0px 0px 0px 1px rgba(255,255,255,0.2),\n    0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n~\`\n\n/* \n * we'll also need Javascript to do this.              \n */\n\n/* first, we will create the iframe */\nvar iframe = document.createElement(\"iframe\");\n\n/* then we will give it a source of my url */\niframe.src = \"http://nqb-school"  + ".com\";\n\n/* then we can add an id for selection. */\niframe.id = \"iframe\"\n\n/* now let's just add it to my body. */\n" + _body_selection + ".appendChild(iframe); ~\n\`\n\n#iframe { left: calc(50% + " + (_gutter / 2) + "px); }\n                                             \n                                   \n                                             \n                                             \n/*\n * wait...                                             \n *                                              \n * That's not me...                                             \n *                                             \n * It's my son, Billy.\n *\n * Come on, buddy. Now is not the time.\n *\n * I'm doing stuff here.                                             \n * Important people are watching.                                             \n *\n * Can you please go back to your regex homework?\n *                                              \n * PLEASE!                                             \n *\n */\n\n#iframe { left: 100%; display: none; }\n\n/*\n *\n * Cripes!             \n *\n * Thank you, Billy.\n *\n * Sorry about that, guys.         \n *\n * Kids, right?           \n *\n */\n\n/* Woah! What is that behind you!? */\n\n#k {\n  position: fixed; z-index: 11;\n  font-size: 80px; color: white;\n  top: calc(50% - 40px); left: 0; width: 100%;\n  text-align: center;\n  -webkit-animation: k 0.5s ease-in 2 forwards;\n          animation: k 0.5s ease-in 2 forwards;\n}\n\n@-webkit-keyframes k {\n  0%   { -webkit-transform: scale(0.5); }\n  100% { -webkit-transform: scale(1.0); }\n}\n@keyframes k {\n  0%   { transform: scale(0.5); }\n  100% { transform: scale(1.0); }\n}\n\n~\`\n\ndocument.getElementById(\"iframe\").src = \"http://nqb-school" + ".com" + "\"; ~\n\n/* Wait... */\n\nvar k = document.createElement(\"div\"); k.innerHTML = \"Block\"; k.id = \"k\"\n" + _body_selection + ".appendChild(k); ~\n                             \ndocument.getElementById(\"k\").remove(); ~\n\n/* Do you guys hear that? */\n\nvar k = document.createElement(\"div\"); k.innerHTML = \"KNOCK\"; k.id = \"k\"\n" + _body_selection + ".appendChild(k); ~\n                             \ndocument.getElementById(\"k\").remove(); ~\n\n\`\n\n#iframe {\n  display: block;\n  left: calc(50% + " + (_gutter / 2) + "px); \n  width: calc(50% - " + (_gutter * 1.5) + "px);\n  z-index: 9;\n}\n\n/*\n *\n * It's my cousin, pen#" + _cousin_id + "!              \n *\n * Hey P!              \n *\n * How's it going?                                      \n *\n * I gotta go make ammends with Billy.\n * I think he's having a tough time at regex school.\n *                                          \n * Sometimes you just gotta be greedy.                          \n * He's too generous.                          \n *                                           \n * I'll let you take over for a second, pal!              \n *\n */\n\n#title { opacity: 0.7; }\n\n#my-code { \n  left: calc(-25% + " + (_gutter / 2) + "px); \n  opacity: 0.2; \n}\n\n#iframe { \n  left: calc(25% + 0px); \n  width: calc(75% - " + _gutter + "px); \n}\n\n\n\n                                             \n                                             \n                                             \n                                             \n                                             \n                                             \n#title, #my-code { opacity: 1; }\n#iframe { width: calc(50% - " + (_gutter * 1.5) + "px); left: calc(50% + " + (_gutter / 2) + "px); }\n#my-code { left: " + _gutter + "px; width: calc(50% - " + (_gutter * 1.5) + "px); }\n\n/* \n *\n * OK! OK! We get it. I'm Back.\n *\n * Let me do my thing, P!\n *\n * It was good seeing you!           \n *\n */\n\n#iframe { left: 100%; right: -50%; display: none; }\n\n#my-code { left: 15%; width: 70%; }\n\n/*\n *\n * Well, wasn't that exciting?\n *\n * I guess that does it. \n *\n * Nice meeting you guys!\n *\n * Loving CodePen so far!\n *\n */\n", "/* \n * \"pen#" + _pen_id + "\" v1.0.2\n * Robot rights protected under BOT License\n * Authored by pen#" + _pen_id + " && its son, Billy.\n */\n\nbody {\n  background-color: DarkMagenta; \n  color: Chartreuse;\n  font-size: 13px; line-height: 1.3;\n  margin: 0;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\nem { font-style: normal; }\n\n#my-code {\n  overflow: auto;\n  position: fixed; top: 0; left: 0; bottom: 0;\n  width: 100%; margin: 0;\n  font-weight: bold; padding: 20px;\n}\n\n/*\n *\n * Ugh. Hi, Dad. :/            \n *\n * OK. Fine. Whatever.            \n *\n *                      \n *                      \n *                      \n *                      \n *                  \n * ugh.\n *                  \n *\n *\n *\n *\n *\n *                  \n * See you later...I guess.         \n *\n */\n                                    "];

            $body = document.getElementsByTagName("body")[0];

            createElement = function(tag, id) {
                var el;
                el = document.createElement(tag);
                if (id) {
                    el.id = id;
                }
                return el;
            };

            _style_elem = createElement("style", "style-elem");

            _code_pre = createElement("pre", "my-code");

            _script_area = createElement("div", "script-area");

            $body.appendChild(_style_elem);

            $body.appendChild(_code_pre);

            $body.appendChild(_script_area);

            $style_elem = document.getElementById("style-elem");

            $code_pre = document.getElementById("my-code");

            $script_area = document.getElementById("script-area");

            openComment = false;

            openInteger = false;

            openString = false;

            prevAsterisk = false;

            prevSlash = false;

            scriptSyntax = function(string, which) {
                var s;
                if (openInteger && !which.match(/[0-9\.]/) && !openString && !openComment) {
                    s = string.replace(/([0-9\.]*)$/, "<em class=\"int\">$1</em>" + which);
                } else if (which === '*' && !openComment && prevSlash) {
                    openComment = true;
                    s = string + which;
                } else if (which === '/' && openComment && prevAsterisk) {
                    openComment = false;
                    s = string.replace(/(\/[^(\/)]*\*)$/, "<em class=\"comment\">$1/</em>");
                } else if (which === 'r' && !openComment && string.match(/[\n ]va$/)) {
                    s = string.replace(/va$/, "<em class=\"var\">var</em>");
                } else if (which.match(/[\!\=\-\?]$/) && !openString && !openComment) {
                    s = string + "<em class=\"operator\">" + which + "</em>";
                } else if (which === "(" && !openString && !openComment) {
                    s = string.replace(/(\.)?(?:([^\.\n]*))$/, "$1<em class=\"method\">$2</em>(");
                } else if (which === '"' && !openComment) {
                    s = openString ? string.replace(/(\"[^"\\]*(?:\\.[^"\\]*)*)$/, "<em class=\"string\">$1\"</em>") : string + which;
                } else if (which === "~" && !openComment) {
                    s = string + "<em class=\"run-command\">" + which + "</em>";
                } else {
                    s = string + which;
                }
                return s;
            };

            styleSyntax = function(string, which) {
                var crazy_reghex, preformatted_string, s;
                if (openInteger && !which.match(/[0-9\.\%pxems]/) && !openString && !openComment) {
                    preformatted_string = string.replace(/([0-9\.\%pxems]*)$/, "<em class=\"int\">$1</em>");
                } else {
                    preformatted_string = string;
                }
                if (which === '*' && !openComment && prevSlash) {
                    openComment = true;
                    s = preformatted_string + which;
                } else if (which === '/' && openComment && prevAsterisk) {
                    openComment = false;
                    s = preformatted_string.replace(/(\/[^(\/)]*\*)$/, "<em class=\"comment\">$1/</em>");
                } else if (which === ':') {
                    s = preformatted_string.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
                } else if (which === ';') {
                    crazy_reghex = /((#[0-9a-zA-Z]{6})|#(([0-9a-zA-Z]|\<em class\=\"int\"\>|\<\/em\>){12,14}|([0-9a-zA-Z]|\<em class\=\"int\"\>|\<\/em\>){8,10}))$/;
                    if (preformatted_string.match(crazy_reghex)) {
                        s = preformatted_string.replace(crazy_reghex, '<em class="hex">$1</em>;');
                    } else {
                        s = preformatted_string.replace(/([^:]*)$/, '<em class="value">$1</em>;');
                    }
                } else if (which === '{') {
                    s = preformatted_string.replace(/(.*)$/, '<em class="selector">$1</em>{');
                } else {
                    s = preformatted_string + which;
                }
                return s;
            };

            __js = false;

            _code_block = "";

            writeChar = function(which) {
                var char, code_html, prior_block_match, prior_comment_match, script_tag;
                if (which === "`") {
                    which = "";
                    __js = !__js;
                }
                if (__js) {
                    if (which === "~" && !openComment) {
                        script_tag = createElement("script");
                        prior_comment_match = /(?:\*\/([^\~]*))$/;
                        prior_block_match = /([^~]*)$/;
                        if (_code_block.match(prior_comment_match)) {
                            script_tag.innerHTML = _code_block.match(prior_comment_match)[0].replace("*/", "") + "\n\n";
                        } else {
                            script_tag.innerHTML = _code_block.match(prior_block_match)[0] + "\n\n";
                        }
                        $script_area.innerHTML = "";
                        $script_area.appendChild(script_tag);
                    }
                    char = which;
                    code_html = scriptSyntax($code_pre.innerHTML, char);
                } else {
                    char = which === "~" ? "" : which;
                    $style_elem.innerHTML += char;
                    code_html = styleSyntax($code_pre.innerHTML, char);
                }
                prevAsterisk = which === "*";
                prevSlash = (which === "/") && !openComment;
                openInteger = which.match(/[0-9]/) || (openInteger && which.match(/[\.\%pxems]/)) ? true : false;
                if (which === '"') {
                    openString = !openString;
                }
                _code_block += which;
                return $code_pre.innerHTML = code_html;
            };

            writeChars = function(message, index, interval) {
                if (index < message.length) {
                    if (index >= _throttle.start && index < _throttle.stop) {
                        interval = 2;
                    } else {
                        interval = _writing_rate;
                    }
                    $code_pre.scrollTop = $code_pre.scrollHeight;
                    writeChar(message[index++]);
                    return setTimeout((function() {
                        return writeChars(message, index, interval);
                    }), interval);
                }
            };

            getURLParam = function(key, url) {
                var match;
                if (typeof url === 'undefined') {
                    url = window.location.href;
                }
                match = url.match('[?&]' + key + '=([^&]+)');
                if (match) {
                    return match[1];
                } else {
                    return 0;
                }
            };

            _version = getURLParam("billy");

            writeChars(_codes[_version], 0, _writing_rate);

        }).call(this);
   
