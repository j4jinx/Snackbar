# Snackbar
Minimal Snackbar/Notification React Component

![npm bundle size](https://img.shields.io/bundlephobia/min/@j4jinxx/snackbar)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@j4jinxx/snackbar)
![npm download](https://img.shields.io/npm/dm/@j4jinxx/snackbar.svg)

## Install
    npm i @j4jinxx/snackbar

## Import
    import Snackbar from '@j4jinxx/snackbar';


## Props
|   Name          |  Type  |   Default    | Description |
|-----------------|:-------|:-------------|:------------|
| opened          | bool   | false        | If true, the snackbar is open |
| message         | string |              | Snackbar Message |
| onClose         | func   | ( ) => { }   | Callback fired when the component requests to be closed|
| kind            | string |  default     | Snackbar Kind ('default', 'info', 'error', 'success', 'warning') |