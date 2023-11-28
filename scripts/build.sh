#!/usr/bin/env bash

set -e # exit when error

license="/*! algoliaBundle ${VERSION:-UNRELEASED} | © Algolia SAS | algolia.com */"

bundle='algoliaBundle'

printf "\n\nBuild"

printf "\n\nBuild:webpack"
webpack

printf "\n\nBuild: minify"
cd dist
uglifyjs ${bundle}.js -c -m -o ${bundle}.min.js
echo "" >> ${bundle}.min.js
cd ..

printf "\n\nBuild: filesize"

printf "=> $bundle.min.js gzipped will weigh `cat dist/$bundle.min.js | gzip -9 | wc -c | pretty-bytes`\n"
