# vscode-typograf 

Helps to automatically place the non-breaking spaces, correct small typos, replace the quotation marks to a correct format and much more. Based on [typograf](https://github.com/typograf/typograf) and [atom-red-typography](https://github.com/red-typography/atom-red-typography). You can try [online version](https://typograf.github.io).

## Features

Select text and press <kbd>command</kbd> + <kbd>alt</kbd> + <kbd>T</kbd> (<kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>T</kbd> on Windows/Linux).


| before                                                       	| after                                            	|
|--------------------------------------------------------------	|--------------------------------------------------	|
|  1 +- 2 1 <= 2 1 -> 2 (c), (tm) 10 C, 20 F 1/2, 3/4 10x3~=30 	|  1 ± 2 1 ≤ 2 1 → 2 ©,™ 10 °C, 20 °F ½, ¾ 10×3≅30 	|
|                                                              	|                                                  	|
|                                                              	|                                                  	|


## Extension Settings

This extension contributes the following settings:

* `vscode-typograf.autoDetectLocale`: detect locale automatically. Default is `true`.
* `vscode-typograf.locale`: locale for typograf. Default is `en_US`. Does't work with `vscode-typograf.autoDetectLocale`.
* `vscode-typograf.type`: type of HTML entities. `As names, &ldquo;A&rdquo;` or `As digits, &#8220;A&#8221;`. Default is `UTF-8, “A”`.
* `vscode-typograf.onlyInvisible`: HTML entities only for invisible symbols. Default is `false`.
* `vscode-typograf.enableRules`: specify [rules](https://github.com/typograf/typograf/blob/dev/docs/RULES.en-US.md) to enable, separated by commas.\nExample: `common/nbsp/replaceNbsp,ru/optalign/*`.
*  `vscode-typograf.disableRules`: specify [rules](https://github.com/typograf/typograf/blob/dev/docs/RULES.en-US.md) to disable, separated by commas.\nExample: `common/space/afterPunctuation,common/space/trimLeft`.