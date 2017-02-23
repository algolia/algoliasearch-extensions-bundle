#!/usr/bin/env bash

set -e # exit when error

license="/*! algoliaAdminBundle ${VERSION:-UNRELEASED} | © Algolia SAS | algolia.com */"

bundle='algoliaAdminBundle'

printf "\n\nBuild"

printf "\n\nBuild:webpack"
webpack --config webpack.config-admin.js

printf "\n\nBuild: minify"
cd dist
uglifyjs ${bundle}.js --in-source-map ${bundle}.js.map --source-map ${bundle}.min.js.map --preamble "$license" -c warnings=false -m -o ${bundle}.min.js
echo "" >> ${bundle}.min.js
cd ..

printf "\n\nBuild: filesize"

printf "=> $bundle.min.js gzipped will weigh `cat dist/$bundle.min.js | gzip -9 | wc -c | pretty-bytes`\n"
