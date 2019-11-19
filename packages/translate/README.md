# `@baffle/translate`

Opinionated localization package for Baffle UI.

## Usage

```
import {load, t} from '@baffle/translate';

// wait for translation file to be loaded
try {

await load({
    loadPath:
        'https://raw.githubusercontent.com/i18next/i18next-gitbook/master/locales/{{lng}}/{{ns}}.json',
    crossDomain: true,
});
} catch (error) {
    //could not load...
}


//use it in some jsx
<h1>{t('foo_key.bar_nested_key')}

```
