# UI Design

The ForgeRock UI Design package is a CSS library built on top of Bootstrap. All existing Bootstrap
styles and class names are unchanged, and this library should be used as if it were the original
Bootstrap library.

## Usage as a package

### Installation

`$ npm install @forgerock/ui-design`

### CSS, Source Map, TypeDef files

The main `forgerock.css` file is located in the `lib/` folder along with a CSS sourcemap and
TypeScript type definitions file

```
forgerock.css
forgerock.css.map
forgerock.css.d.ts
```

### Spritesheet

The spritesheet SVG file will be located in `src/scss/sprites` and will have a css-busting unqiue filename with
each build.

```
sprite-#####.svg
```

## Building & Developing

### Complete Package

Running this script will automatically build the complete SCSS library. The build process includes
linting, building spritesheet, and creating type definitions. Compiled files are located in the
`lib` folder.

```
$ npm run build
```

### Sass

Running this script will build the complete SCSS library, or individual components depending on
passed arguments. Arguments are passed to an npm script via the `--` delimeter. Compiled CSS files
are located in the `dist` folder.

##### All components

Outputted filename will be `forgerock.css`

```
$ npm run build:sass
```

##### Specific components

Outputted filename will be `component1-component2-etc.css` ex: `alert-badge-card.css`

```
$ npm run build:sass -- alert badge card
```

### Sprites

To update the sprite library, add your svg to the `src/svg/` folder and run the below script. This
will render a new PNG spritesheet in the `src/svg/sprites/` folder, and the SASS file
`src/scss/_sprite.scss`.

```
$ npm run build:sprites
```

### Type Definitions

Running this script will build type definitions for the main CSS file located in the `lib` folder.

```
$ npm run build:types
```
