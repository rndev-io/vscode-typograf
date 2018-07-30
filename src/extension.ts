'use strict';

import * as vscode from 'vscode';

import * as Typograf from "typograf";
const
    franc = require('franc'),
    langs = require('langs'),
    supportingLocales = [
        "be",
        "bg",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "en-GB",
        "en-US",
        "eo",
        "es",
        "et",
        "fi",
        "fr",
        "ga",
        "hu",
        "it",
        "lv",
        "nl",
        "no",
        "pl",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "tr",
        "uk",
    ];


export function activate(context: vscode.ExtensionContext) {
    let process = vscode.commands.registerCommand('vscode-typograf.processSelected', () => {
        const editor = vscode.window.activeTextEditor;
        const settings = vscode.workspace.getConfiguration('vscode-typograf');

        if (editor) {
            let locale = settings.get('vscode-typograf.locale', "en-US");
            let text = editor.document.getText(editor.selection);
            let message = 'default ' + locale;

            if (settings.get('vscode-typograf.autoDetectLocale', true)) {
                let detected = franc(text);
                if (detected !== 'und') {
                    let l = langs.where("3", detected);
                    if (l !== undefined) {
                        locale = l['1'];
                        if (locale === 'en') {
                            locale = 'en-US';                          
                        }
                        if (supportingLocales.indexOf(locale) < 0) {
                            locale = 'en-US';
                        }
                        message = 'autodetected, ' + locale;
                    }
                }
            }

            const t = new Typograf({
                locale: locale,
                htmlEntity: {
                    type: settings.get('vscode-typograf.type', 'default'),
                    onlyInvisible: settings.get('vscode-typograf.onlyInvisible', "")
                },
                enableRule: prepareRules(settings.get('vscode-typograf.enableRules', "")),
                disableRule: prepareRules(settings.get('vscode-typograf.disableRules', ""))
            });

            let result = t.execute(text);
            editor.edit(builder => {
                builder.replace(editor.selection, result);
                vscode.window.showInformationMessage('Typograf completed, locale: ' + message);
            });
        }
    });

    context.subscriptions.push(process);
}

function prepareRules(str: string) {
    return str.split(/[,;: ]/)
        .map(rule => rule.trim())
        .filter(rule => Boolean(rule));
}


export function deactivate() {
}