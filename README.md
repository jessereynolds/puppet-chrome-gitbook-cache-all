# Puppet Gitbook Cache All - Chrome Extension

Load the extension, load the training docs site under `https://puppet-kmo.gitbook.io/*` and then hit the 'c' key and off it will go clicking through the site to load it into the local browser cache. The expiry on GitBook seems to be set to 24 hrs so this would need to be run at the start of each day's training.

## Warning

This is pretty simple minded and written by a javascript novice.

## Issues

* It will keep looping even after getting to the last page of the doc
* I'm not sure that this will cause the whole thing to be cached as intended or not, needs more testing

## Installation

* clone this repo
* in Chrome, go to chrome://extensions, turn on developer mode, then click "load unpacked" and select the folder of this repo and load it
