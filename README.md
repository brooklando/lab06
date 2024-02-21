# 11ty Boilerplate

Super basic [11ty](https://www.11ty.dev) starter to get you moving in the right direction and gently introduce some core features like **Passthrough File Copy** for handling images and stylesheets, **layouts**, and templating with [Liquid](https://shopify.github.io/liquid/) and [Markdown](https://www.markdownguide.org).

## Quickstart

1. Create a new repository in your own account from this template.
2. Open the new repository in Codespaces or your own development environment.
3. Make sure you have Node.js installed (this will be automatic if using Codespaces).
4. In your terminal type `npx @11ty/eleventy --serve` to build and view the template.



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/styles/screen.css">
  <script src="//unpkg.com/alpinejs" defer></script>
  <script src="eleventy.js"></script>
</head>
<body>

    {{ content }}
</body>
</html>
