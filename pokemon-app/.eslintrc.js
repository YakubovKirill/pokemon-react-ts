module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
	},
	'extends': [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 2020,
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'react-hooks',
		'@typescript-eslint'
	],
	'rules': {
		"indent": ["error", "tab"],
		"no-tabs": ["error", {allowIndentationTabs: true}],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/display-name": "off",
		"max-len": [2, 100, 4, {"ignoreUrls": true}],
		"require-jsdoc" : 0,
		"linebreak-style": 0,
		"new-cap": "off",
		"eol-last": ["error", "always"],
		"semi": ["error", "always"],
		"prefer-const": ["error", {
			"destructuring": "any",
			"ignoreReadBeforeAssign": false
		}],
		"comma-spacing": ["error", { "before": false, "after": true }]
	},
	settings: {
		react: {
			version: 'detect',
		}
	},
	parser: '@typescript-eslint/parser',
};
