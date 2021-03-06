'use strict';

import React from 'react';
import Alert from '../src';

let node = document.getElementById('content'),
    btn = document.querySelectorAll('.demo');

btn[0].addEventListener('click', function () {
    console.log('alert')
    Alert('the alert content', 'no title').then(function (show) {
        console.log('then function1 ' + show);
    });
}, false)

btn[1].addEventListener('click', function () {
    console.log('alert2')
    Alert({
        content: 'content',
        btnText: 'nonono',
        animation: 'none'
    }).then(function (show) {
        console.log('then function2 ' + show);
        return 'qunar';
    }).then(function (name) {
        console.log('second then function2 ' + name)
    });
}, false)

btn[2].addEventListener('click', function () {
    console.log('alert3')
    Alert({
        content: () => (<h1>ssssss</h1>),
        btnText: 'nonono',
        animation: 'none',
        extraClass: 'extra'
    }).then(function (show) {
        console.log('then function2 ' + show);
        return 'qunar';
    }).then(function (name) {
        console.log('second then function2 ' + name)
    });
}, false)

