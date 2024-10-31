const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "ncviewer.openWebView",
    async function () {
      const panel = vscode.window.createWebviewPanel(
        "ncviewer",
        "NCViewer",
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        }
      );

      panel.webview.html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>NCViewer</title>
                <style>
                    body, html { height: 100%; width: 100%; margin: 0; padding: 0; overflow: hidden; }
                    iframe { height: 100%; width: 100%; border: none; }
                </style>
            </head>
            <body>
                <iframe id="ncviewer-iframe" src="https://ncviewer.com/""></iframe>

            </body>
            </html>
        `;
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
