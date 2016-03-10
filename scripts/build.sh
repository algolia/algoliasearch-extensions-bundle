#!/usr/bin/env bash

set -e # exit when error

license="/*! algoliaBundle ${VERSION:-UNRELEASED} | © Algolia SAS | algolia.com */"

bundle='algoliaBundle'

printf "\n\nBuild"

printf "\n\nBuild:webpack"
webpack

printf "\n\nBuild: minify"
cd dist
uglifyjs ${bundle}.js --in-source-map ${bundle}.js.map --source-map ${bundle}.min.js.map --preamble "$license" -c warnings=false -m -o ${bundle}.min.js
cd ..

printf "\n\nBuild: filesize"

printf "=> $bundle.min.js gzipped will weight `cat dist/$bundle.min.js | gzip -9 | wc -c | pretty-bytes`\n"
