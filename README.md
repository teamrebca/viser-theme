# viser-theme
Bootstrap-based SASS theme for Viser

## Installation & Usage
0. Ensure your terminal is authenticated with github with an account that is in the `teamrebca` org.  
1. Install as a dependency with yarn: `yarn add https://github.com/teamrebca/viser-theme.git`  
2. In a Vue file, you can import it in a SCSS style block  
```
<style lang="scss">
@import "~viser-theme";
</style>
```

## Development
To develop on this theme locally
1. Clone this repository
2. Run `yarn install`
3. Start the local browserSync & sass compiler via `yarn start`  
This should open your browser
4. Make changes to the [/scss/theme.scss](/scss/theme.scss) file, upon save, your changes should be reflected in the components on the web page.
