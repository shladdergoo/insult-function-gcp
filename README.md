# insult-function-gcp

A port of the famous node-insult insult generator service to Google Cloud Functions

CI Build [![Build Status](https://hcc-devops.visualstudio.com/CI/_apis/build/status/insult-function-gcp-ci?branchName=master)](https://hcc-devops.visualstudio.com/CI/_build/latest?definitionId=15?branchName=master)

CD Deployment [![Deployment Status](https://hcc-devops.vsrm.visualstudio.com/_apis/public/Release/badge/4a39983c-4bc6-4bb5-87d6-d5a77491e0d3/6/6)](https://hcc-devops.vsrm.visualstudio.com/_apis/public/Release/badge/4a39983c-4bc6-4bb5-87d6-d5a77491e0d3/6/6)

Urls:  
Production - https://us-central1-sincere-stack-225809.cloudfunctions.net/insultHttpTrigger


Installation:  
Requires Google Clud Functions Node Emulator  
npm install -g @google-cloud/functions-emulator

See also:
- https://github.com/shladdergoo/insult-function-azure
- https://github.com/shladdergoo/node-insult
