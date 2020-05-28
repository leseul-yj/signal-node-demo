'use strict';

// const path = require('path');
// const protobuf = require('protobufjs');

// const protodir = path.resolve(__dirname, '../protos/');
// const p = protobuf.loadSync(path.join(protodir, 'WhisperTextProtocol.proto')).lookup('textsecure');

// module.exports = {
//     WhisperMessage: p.lookup('WhisperMessage'),
//     PreKeyWhisperMessage: p.lookup('PreKeyWhisperMessage')
// };

// const WhisperMessage = {"fields":{"ephemeralKey":{"type":"bytes","id":1},"counter":{"type":"uint32","id":2},"previousCounter":{"type":"uint32","id":3},"ciphertext":{"type":"bytes","id":4}}};
// const PreKeyWhisperMessage = {"fields":{"registrationId":{"type":"uint32","id":5},"preKeyId":{"type":"uint32","id":1},"signedPreKeyId":{"type":"uint32","id":6},"baseKey":{"type":"bytes","id":2},"identityKey":{"type":"bytes","id":3},"message":{"type":"bytes","id":4}}};

// module.exports = {
//     WhisperMessage: WhisperMessage,
//     PreKeyWhisperMessage: PreKeyWhisperMessage
// };


const exampleProto = require('./../protos/WhisperTextProtocol.proto')
const WhisperMessage = exampleProto.lookup('WhisperMessage')
const PreKeyWhisperMessage = exampleProto.lookup('PreKeyWhisperMessage')

module.exports = {
    WhisperMessage: WhisperMessage,
    PreKeyWhisperMessage: PreKeyWhisperMessage
};