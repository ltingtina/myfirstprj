licenses(["notice"])  # 3-clause BSD

package(default_visibility = ["//visibility:public"])




grpc_proto_library(
    name = "userlogin",
    srcs = ["protos/userlogin.proto"],
)


cc_binary(
    name = "userlogin_server",
    srcs = [
      "main/usrhd.h",
      "main/usrhd.cc",
      "main/userlogin_server.cc",

],
    defines = ["BAZEL_BUILD"],
    deps = [
        ":userlogin",
        "//:grpc++",
    ],
)
