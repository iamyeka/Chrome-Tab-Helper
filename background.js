// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function copyCurrentTabFunc() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.duplicate(tabs[0].id);
    });
}

chrome.runtime.onInstalled.addListener(function () {

    chrome.contextMenus.create({title: "复制当前Tab", id: "0"});

    chrome.contextMenus.onClicked.addListener(function callback(info, tab) {
        copyCurrentTabFunc();
    });

    chrome.browserAction.onClicked.addListener(function(tab) {
        copyCurrentTabFunc();
    });

});
