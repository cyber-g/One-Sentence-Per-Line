# One-Sentence-Per-Line
One Sentence Per Line is an extension for Visual Studio Code that transforms selections of single line paragraph to "one sentence per line"

## Compilation
(Based on : [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension))

To compile the extension, you need to have `Node.js` and `npm` installed. Then, run the following command in the root directory of the project:

```bash
npx vsce package
```
This will create a `.vsix` file in the root directory of the project. You can then install this file in Visual Studio Code:

```
code --install-extension one-sentence-per-line-1.0.0.vsix
```

## Usage
1. Select the text you want to transform.
2. Press `Ctrl+Shift+P` to open the command palette.
3. Type "One Sentence Per Line" and select the command.
4. The selected text will be transformed to "one sentence per line".

## CI/CD
Get the latest packaged version of the extension from: 
https://github.com/cyber-g/One-Sentence-Per-Line/actions/workflows/package-ospl.yml

## License
This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

