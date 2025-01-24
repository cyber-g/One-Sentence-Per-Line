// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// // Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "one-sentence-per-line" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with registerCommand
	// // The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('one-sentence-per-line.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from One Sentence Per Line (OSPL)!');
	// });

	let disposable = vscode.commands.registerCommand('one-sentence-per-line.splitSentences', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No active editor found!");
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

		if (selection.isEmpty) {
			vscode.window.showErrorMessage("Please select some text to split into sentences!");
			return;
		}

        const text = document.getText(selection);

        // Search and replace to split sentences into new lines
        const modifiedText = text.replace(/([.!?])\s*/g, '$1\n');

        editor.edit(editBuilder => {
            editBuilder.replace(selection, modifiedText);
        });
    });


	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
