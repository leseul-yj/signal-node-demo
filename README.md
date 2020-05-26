libsignal-node
========
Signal protocol implementation for Node.js based on
[libsignal-protocol-javascript](https://github.com/WhisperSystems/libsignal-protocol-javascript).

[![npm](https://img.shields.io/npm/v/libsignal.svg)](https://www.npmjs.com/package/libsignal)
[![npm](https://img.shields.io/npm/l/libsignal.svg)](https://github.com/ForstaLabs/libsignal-node)


Overview
--------
A ratcheting forward secrecy protocol that works in synchronous and
asynchronous messaging environments.


PreKeys
--------
This protocol uses a concept called 'PreKeys'. A PreKey is an ECPublicKey and
an associated unique ID which are stored together by a server. PreKeys can also
be signed.

At install time, clients generate a single signed PreKey, as well as a large
list of unsigned PreKeys, and transmit all of them to the server.


Sessions
--------
Signal Protocol is session-oriented. Clients establish a "session," which is
then used for all subsequent encrypt/decrypt operations. There is no need to
ever tear down a session once one has been established.

Sessions are established in one of two ways:

1. PreKeyBundles. A client that wishes to send a message to a recipient can
   establish a session by retrieving a PreKeyBundle for that recipient from the
   server.
2. PreKeySignalMessages. A client can receive a PreKeySignalMessage from a
   recipient and use it to establish a session.


State
--------
An established session encapsulates a lot of state between two clients. That
state is maintained in durable records which need to be kept for the life of
the session.

State is kept in the following places:

* Identity State. Clients will need to maintain the state of their own identity
  key pair, as well as identity keys received from other clients.
* PreKey State. Clients will need to maintain the state of their generated
  PreKeys.
* Signed PreKey States. Clients will need to maintain the state of their signed
  PreKeys.
* Session State. Clients will need to maintain the state of the sessions they
  have established.

dependency
--------
安装 emscripten 一个将c++编译成js的环境
https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html

python2.7
cmake
java
cmake 配置全局环境 sudo "/Applications/CMake.app/Contents/bin/cmake-gui" --install
克隆 https://github.com/emscripten-core/emsdk.git

用别人直接配置好的镜像
https://pan.baidu.com/s/1mJfJXqTjTXe0beYd1GHvBQ#list/path=%2F
$ git clone https://github.com/emscripten-core/emsdk.git
$ cd emsdk
$ ./emsdk install latest
$ ./emsdk activate latest
设置环境变量
 source ./emsdk_env.sh --build=Release

 参考 
 https://xmanyou.com/wasm-emsdk-mac-start-up/

将node的库 抽成js库 需要用到browserify
browserify index.js > core.js 

License
--------
Licensed under the GPLv3: http://www.gnu.org/licenses/gpl-3.0.html

* Copyright 2015-2016 Open Whisper Systems
* Copyright 2017-2018 Forsta Inc
