### Todo
* :white_check_mark: Document prominent XML-based help features
* Craft one or several pages representing features in a compact way

### XML help features

Feature | Example | Comments
--- | --- | ---
`%product%` | `<p>%product% supports the <a href="http://www.thymeleaf.org/">Thymeleaf</a> latest release version.</p>` | Product name placeholder
`a` | `<a product="!ac" href="Select_Path_Dialog.xml">dialog that opens</a><for product="ac">dialog that opens</for>` | HTML-like anchor. Provides topic name completion for values of `href`, but external links can be used, too. Supports conditions via the `product` attribute.
`chapter` | `<chapter title="Overview of Thymeleaf support" caps="aswritten"><p>Thymeleaf support in %product% includes:</p>...</chapter>` | Represents a semantic block of a topic that has a title. Optionally applies capitalization rules to titles. Mostly styling though. Chapters can be nested.
`chunk` | `    <chunk include-id="language"><warning>This feature is only supported for %language%!</warning></chunk>` |  Represents a chunk that is included using `include`. May contain variables.
`code` | `<code>.java</code>`, `<code style="block" lang="Shell">...</code>` | Inline and multiline (if `style="block"`) code snippets. Syntax highlighting based on the `lang` attribute. Styling only.
`control` | `<control>Attach Files or Directories.</control>` | Styling only.
`filter` | `<tr filter="create,edit,java_flex">`, `<for filter="javascript">In the dialog that opens, select the folders that you want %product% to ignore, and click <control>OK</control>.</for>` | ?
`for` | `<for product="py">This edition is commercial, and it provides an outstanding set of tools and features.</for>` | Outputs a block if a condition is true
`img` | `<img product="rs" src="qf_demo.png" animated="true" alt="Quick-fixes for code issues in %product%"/>`, `<img src="ThemedIcon.HasImplementations.Screen.[Gray].png"/>` | Provides completion for image file names. Supports conditions via the `product` attribute.
`include` | `    <include src="lib_libraries.xml" include-id="edition" product="ij"><var name="edition" value="Ultimate"/></include>` | Includes a chunk, may specify values to substitute chunk variables with.
`list`, `li` | `<list><li><control>Attach Files or Directories.</control> Select this option to add JavaScript files.<p>In the dialog that opens, select the necessary files and folders.</p><p>%product% will analyze the selected files and folders, and automatically assign the JavaScript files to the appropriate categories.` | Represents an HTML unordered list (or ordered if `type="decimal"`) and items of the list. `li` may contain multiple paragraphs.
`menupath` | `<menupath>Navigate > Declaration</menupath></code>` | Menu path styling. NOTE Md sucks with [escaping pipes in tables](https://stackoverflow.com/questions/49809122/vertical-bar-symbol-within-a-markdown-table?rq=1), so I had to fall back to the "greater than" character.
`procedure`, `step` | `<procedure style="steps"><step product="!ws,ps">...</step><step>...</step></procedure>`, `<procedure style="plain"><step>...</step></procedure>` | Renders to a section with a title and a numbered (`style="steps"`) or bulleted (`style="plain"`) list. Mostly for styling purposes.
`seealso`, `category` | `<seealso><category ref="procedures"><a href="Previewing_Compiled_CoffeeScript_Files.xml"/><a href="Using_File_Watchers.xml" product="!ac"/></category><category ref="reference"><a href="Node_js.xml"/></category></seealso>` | A list of links to related topics categorized as `procedures`, `references`, `concepts` or `internal`.
`shortcut` | `<shortcut product="rdr" key="ShowIntentionActions"/>`, `<shortcut key="$Delete"/>` | Displays a keyboard shortcut by looking up a key for the current OS in a shortcut store. Completion for keys?
`tag-list` | `<tag-list of="chapter"/>` | Renders a list of chapters or ? in the current page ?
`tip`, `note`, `warning` | `<tip product="rs"><p>...</p></tip>` | Styling only?

