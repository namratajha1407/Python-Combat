(function () {
    function forEach(arr, f) {
      for (var i = 0, e = arr.length; i < e; ++i) f(arr[i]);
    }
  
    function arrayContains(arr, item) {
      if (!Array.prototype.indexOf) {
        var i = arr.length;
        while (i--) {
          if (arr[i] === item) {
            return true;
          }
        }
        return false;
      }
      return arr.indexOf(item) != -1;
    }
  
    function scriptHint(editor, _keywords, getToken) {
      // Find the token at the cursor
      var cur = editor.getCursor(), token = getToken(editor, cur), tprop = token;
      // If it's not a 'word-style' token, ignore the token.
  
      if (!/^[\w$_]*$/.test(token.string)) {
          token = tprop = {start: cur.ch, end: cur.ch, string: "", state: token.state,
                           className: token.string == ":" ? "python-type" : null};
      }
  
      if (!context) var context = [];
      context.push(tprop);
  
      var completionList = getCompletions(token, context);
      completionList = completionList.sort();
  
      return {list: completionList,
              from: CodeMirror.Pos(cur.line, token.start),
              to: CodeMirror.Pos(cur.line, token.end)};
    }
  
    function pythonHint(editor) {
      return scriptHint(editor, KeywordsU, function (e, cur) {return e.getTokenAt(cur);});
    }
    CodeMirror.pythonHint = pythonHint; // deprecated
    CodeMirror.registerHelper("hint", "python", pythonHint);

    var Keywords = "moveRight() moveLeft() moveUp() moveDown()";
    var KeywordsL = Keywords.split(" ");
    var KeywordsU = Keywords.toUpperCase().split(" ");
  
    function getCompletions(token, context) {
      var found = [], start = token.string;
      function maybeAdd(str) {
        if (str.lastIndexOf(start, 0) == 0 && !arrayContains(found, str)) found.push(str);
      }
  
      function gatherCompletions(_obj) {
          forEach(KeywordsL, maybeAdd);
          forEach(KeywordsU, maybeAdd);
      }
  
      if (context) {
        // If this is a property, see if it belongs to some object we can
        // find in the current environment.
        var obj = context.pop(), base;
  
        if (obj.type == "variable")
            base = obj.string;
        else if(obj.type == "variable-3")
            base = ":" + obj.string;
  
        while (base != null && context.length)
          base = base[context.pop().string];
        if (base != null) gatherCompletions(base);
      }
      return found;
    }
  })();