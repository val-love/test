const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Injected Page</title>
  <style>
    body {
      background: #121212;
      color: #eee;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 2em;
    }
    h1 {
      color: #00e676;
    }
  </style>
</head>
<body>
  <h1>This page was HAXXX BY VAL!</h1>
  <p>VAL now controlS the entire content of this site.</p>
</body>
</html>
`;

document.open();
document.write(fullHTML);
document.close();
