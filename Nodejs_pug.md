- A template engine enables you to use static template files in your application. \
- mind the indenting
- pages to render

- set up temp engine
  > app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


- use two temp codes
  - layout.pug
  > block variables
doctype html
html
  head
    meta(charset="utf-8")
    link(rel="shortcut icon", href="/favicon.ico")
    meta(name="viewport", content="width=device-width, initial-scale=1, shrink-to-fit=no")
    meta(name="theme-color", content="#000000")
    title #{title} | WHATABYTE
  body
    div#root
      block layout-content


  - index.put
  > extends layout
block layout-content
  div.View
    h1.Banner WHATABYTE
    div.Message
      div.Title
        h3 Making the Best
        h1 Food For Devs
      span.Details Access the WHATABYTE Team Portal
    div.NavButtons
      a(href="/user")
          div.NavButton Just dive in!