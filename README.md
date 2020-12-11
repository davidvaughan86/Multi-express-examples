# Examples

## `basic` - Hello World

Generic express app with a single route: `/`

Renders "Hello!" when viewed in a browser.

## `basic-template` - Hello world + template

Uses `express-es6-template-engine` to show page with "Hello, template!"

## `template-static` - Hello world + template + static

Adds the `express.static()` middleware for serving static content.
(`helmet` is disabled for local development. On my machine, it tried to pull up the static assets using `https`, which is only for a live site.)

### `layout-template` - Template with "layout" (shorthand to include header and footer)

The header and footer can be "sprinkled" into the `res.render()`:

```js
const layout = {
    partials: {
        header: '/partials/header',
        footer: '/partials/footer'
    }
};

app.get('/', (req, res) => {
    res.render('home', {
        ...layout,
        locals: {
            message: "Hello, template with static assets!",
            imageUrl: '/images/oakley.jpg'
        }
    })
});
```

## `master-detail`

Shows a list of products.

Each product links to a product details page.

## master-detail with controllers + models

Refactors the master-detail app to use a controller and model for products.

The app matches the route and calls the controller.
The controller puts model data into the res.render()

## master-detail with controllers + models + router

Adds an express.Router, which moves the product routes to a separate file.

The app uses the router.
The router uses the controller.
The controller puts model data into the res.render()

### with pagination

Adds model, controller, and route for viewing 25 products at a time.

Displays page links for navigating from page to page.

Updates detail.html to go back in the browser history (instead of navigating to `/products/`).

## master-detail with multiple routers

Adds employee list at route `/employees`
Adds employee detail at route `/employees/:id`

## notes app: master-detail + a form

shows a form
processes a form
shows a list
shows details


## blog app: separate admin interface




==== may not get this far...

## `login.js`

## blog app + login

