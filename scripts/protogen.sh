#!/usr/bin/env bash

echo "Protogen is starting..."
mkdir "protogen"

echo $OSTYPE

PROTO_PATHS=(
  ./protos/common/*.proto
  ./protos/auth/*.proto
  ./protos/user/*.proto
  ./protos/category/*.proto
  ./protos/deal/*.proto
)

# For windows and linux based OS, there are different methods for protogen
if [[ "$OSTYPE" == "msys" ]]; then
  protoc -I ./protos --experimental_allow_proto3_optional --plugin=protoc-gen-ts_proto=".\node_modules\.bin\protoc-gen-ts_proto.cmd" --ts_proto_out=./protogen "${PROTO_PATHS[@]}"
else
  protoc -I ./protos --experimental_allow_proto3_optional --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./protogen "${PROTO_PATHS[@]}"
fi;

sleep 3
