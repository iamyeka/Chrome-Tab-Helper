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

    chrome.contextMenus.create({title: "Tab Helper", id: "0"});
    chrome.contextMenus.create({
        title: "duplicate the active tab",
        id: "copyCurrentTab",
        parentId: "0"
    });

    chrome.contextMenus.onClicked.addListener(function callback(info, tab) {
        if (info.menuItemId === "copyCurrentTab") {
            copyCurrentTabFunc();
        }
    });

});
