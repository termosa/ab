var OFF = 0, WRN = 1, ERR = 2;

module.exports = exports = {
  "root": true,

  "env": {
    "browser": true,
    "commonjs": true
  },

  "globals": {
    "IS_DEV": false,
    "IS_PROD": false
  },

  "extends": "eslint:recommended",

  "rules": {
    "block-scoped-var": WRN,
    "callback-return": [ WRN, [ "callback", "cb", "done", "next" ]],
    "consistent-return": ERR,
    "curly": [ ERR, "multi-line" ],
    "default-case": WRN,
    "dot-location": [ WRN, "property" ],
    "dot-notation": WRN,
    "eqeqeq": [ ERR, "smart" ],
    "global-require": ERR,
    "guard-for-in": WRN,
    "init-declarations": OFF,
    "no-alert": ERR,
    "no-caller": ERR,
    "no-case-declarations": WRN,
    "no-catch-shadow": WRN,
    "no-class-assign": ERR,
    "no-confusing-arrow": [ ERR, {
      "allowParens": false
    }],
    "no-console": WRN,
    "no-const-assign": ERR,
    "no-constant-condition": WRN,
    "no-delete-var": ERR,
    "no-div-regex": WRN,
    "no-dupe-class-members": ERR,
    "no-else-return": WRN,
    "no-eq-null": WRN,
    "no-eval": ERR,
    "no-extend-native": ERR,
    "no-extra-bind": WRN,
    "no-extra-parens": OFF,
    "no-floating-decimal": WRN,
    "no-implicit-coercion": [ WRN, {
      "boolean": false,
      "number": false,
      "string": false
    }],
    "no-implied-eval": ERR,
    "no-invalid-this": ERR,
    "no-iterator": ERR,
    "no-label-var": ERR,
    "no-labels": WRN,
    "no-lone-blocks": WRN,
    "no-loop-func": ERR,
    "no-magic-numbers": WRN,
    "no-mixed-requires": WRN,
    "no-multi-spaces": ERR,
    "no-multi-str": WRN,
    "no-native-reassign": ERR,
    "no-new-func": WRN,
    "no-new-require": ERR,
    "no-new-wrappers": ERR,
    "no-new": ERR,
    "no-octal-escape": ERR,
    "no-param-reassign": ERR,
    "no-proto": ERR,
    "no-redeclare": ERR,
    "no-return-assign": ERR,
    "no-script-url": ERR,
    "no-self-compare": ERR,
    "no-shadow-restricted-names": ERR,
    "no-shadow": WRN,
    "no-this-before-super": WRN,
    "no-throw-literal": ERR,
    "no-undef-init": OFF,
    "no-undef": ERR,
    "no-undefined": ERR,
    "no-unexpected-multiline": ERR,
    "no-unused-labels": ERR,
    "no-unused-expressions": ERR,
    "no-unused-vars": WRN,
    "no-use-before-define": ERR,
    "no-useless-call": ERR,
    "no-useless-concat": ERR,
    "no-var": OFF,
    "no-void": WRN,
    "no-warning-comments": [ WRN, {
      "terms": [ "TODO", "FIX", "FIXME" ],
      "location": "start"
    }],
    "no-with": WRN,
    "radix": WRN,
    "strict": [ ERR, "global" ],
    "vars-on-top": OFF,
    "wrap-iife": [ ERR, "any" ],
    "yoda": WRN,

    // Style
    "array-bracket-spacing": [ WRN, "always", {
      "arraysInArrays": false
    }],
    "block-spacing": [ ERR, "always" ],
    "brace-style": [ WRN, "1tbs", {
      "allowSingleLine": true
    }],
    "camelcase": WRN,
    "comma-spacing": [ WRN, {
      "before": false,
      "after": true
    }],
    "comma-style": [ ERR, "last" ],
    "computed-property-spacing": [ WRN, "never" ],
    "consistent-this": [ WRN, "self", "ctrl", "view" ], // ctrl and view are for Angular controllers
    "eol-last": WRN,
    "func-names": OFF,
    "func-style": [ WRN, "declaration" ],
    "id-length": [ WRN, {
      "min": 2,
      "max": 32
    }],
    "indent": [ WRN, 2 ],
    "keyword-spacing": [ WRN, {
      "after": true,
      "before": true
    }],
    "linebreak-style": OFF, // git fixes this for us on checkin
    "lines-around-comment": OFF,
    "max-depth": [ WRN, 4 ],
    "max-len": [ WRN, 127 ],
    "max-nested-callbacks": [ WRN, 2 ],
    "max-params": [ WRN, 8 ],
    "new-cap": WRN,
    "new-parens": WRN,
    "no-array-constructor": WRN,
    "no-bitwise": OFF,
    "no-continue": OFF,
    "no-inline-comments": OFF,
    "no-lonely-if": ERR,
    "no-mixed-spaces-and-tabs": OFF,
    "no-multiple-empty-lines": [ WRN, {
      "max": 1,
      "maxEOF": 1,
      "maxBOF": 0
    }],
    "no-negated-condition": OFF,
    "no-nested-ternary": OFF,
    "no-new-object": ERR,
    "no-plusplus": OFF,
    "no-spaced-func": ERR,
    "no-ternary": OFF,
    "no-trailing-spaces": WRN,
    "no-underscore-dangle": OFF, // Angular uses underscores for DI
    "no-unneeded-ternary": ERR,
    "object-curly-spacing": [ WRN, "always", {
      "objectsInObjects": false
    }],
    "one-var": OFF,
    "operator-assignment": OFF,
    "operator-linebreak": [ WRN, "after" ],
    "padded-blocks": [ WRN, "never" ],
    "quote-props": [ WRN, "consistent-as-needed" ],
    "quotes": [ WRN, "single" ],
    "semi-spacing": [ WRN, {
      "before": false,
      "after": true
    }],
    "semi": [ ERR, "always" ],
    "sort-vars": OFF,
    "space-before-function-paren": [ WRN, {
      "anonymous": "never",
      "named": "never"
    }],
    "space-in-parens": [ WRN, "never" ],
    "space-infix-ops": [ WRN, {
      "int32Hint": true
    }],
    "space-unary-ops": ERR,
    "spaced-comment": [ WRN, "always" ],
    "wrap-regex": WRN
  }
};
