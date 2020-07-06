// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {

    chrome.contextMenus.create({title: "复制当前Tab", id: "0"});

    chrome.contextMenus.onClicked.addListener(function callback(info, tab) {
        chrome.tabs.duplicate(tab.id);
    });

    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.duplicate(tab.id);
    });

});
