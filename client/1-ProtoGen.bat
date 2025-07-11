md assets\scripts\Proto.js
cd ../server/protocol
ren annotations.proto annotations.protobk
cd ../../client
node ./node_modules/protobufjs-cli/bin/pbjs --dependency protobufjs/minimal.js --target static-module --wrap commonjs --out ./assets/scripts/Proto.js/proto.js ../server/protocol/*.proto
node ./node_modules/protobufjs-cli/bin/pbts --main --out ./assets/scripts/Proto.js/proto.d.ts ./assets/scripts/Proto.js/*.js
cd ../server/protocol
ren annotations.protobk  annotations.proto
echo ====complete======
timeout /t 2
