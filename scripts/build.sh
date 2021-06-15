#!/bin/bash
# npm run build
npm run build && cp -r ../build/* ../../frontend-build && cd ../../frontend-build && git add . && git commit -m "new build" && git push test master