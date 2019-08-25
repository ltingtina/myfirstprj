/**
 * @fileoverview gRPC-Web generated client stub for userlogin
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.userlogin = require('./userlogin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.userlogin.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.userlogin.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userlogin.UserInfo,
 *   !proto.userlogin.AddReply>}
 */
const methodDescriptor_User_AddUser = new grpc.web.MethodDescriptor(
  '/userlogin.User/AddUser',
  grpc.web.MethodType.UNARY,
  proto.userlogin.UserInfo,
  proto.userlogin.AddReply,
  /** @param {!proto.userlogin.UserInfo} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userlogin.AddReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userlogin.UserInfo,
 *   !proto.userlogin.AddReply>}
 */
const methodInfo_User_AddUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userlogin.AddReply,
  /** @param {!proto.userlogin.UserInfo} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userlogin.AddReply.deserializeBinary
);


/**
 * @param {!proto.userlogin.UserInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userlogin.AddReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userlogin.AddReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userlogin.UserClient.prototype.addUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userlogin.User/AddUser',
      request,
      metadata || {},
      methodDescriptor_User_AddUser,
      callback);
};


/**
 * @param {!proto.userlogin.UserInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userlogin.AddReply>}
 *     A native promise that resolves to the response
 */
proto.userlogin.UserPromiseClient.prototype.addUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userlogin.User/AddUser',
      request,
      metadata || {},
      methodDescriptor_User_AddUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userlogin.UserInfo,
 *   !proto.userlogin.LoginReply>}
 */
const methodDescriptor_User_LoginIn = new grpc.web.MethodDescriptor(
  '/userlogin.User/LoginIn',
  grpc.web.MethodType.UNARY,
  proto.userlogin.UserInfo,
  proto.userlogin.LoginReply,
  /** @param {!proto.userlogin.UserInfo} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userlogin.LoginReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userlogin.UserInfo,
 *   !proto.userlogin.LoginReply>}
 */
const methodInfo_User_LoginIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userlogin.LoginReply,
  /** @param {!proto.userlogin.UserInfo} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userlogin.LoginReply.deserializeBinary
);


/**
 * @param {!proto.userlogin.UserInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userlogin.LoginReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userlogin.LoginReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userlogin.UserClient.prototype.loginIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userlogin.User/LoginIn',
      request,
      metadata || {},
      methodDescriptor_User_LoginIn,
      callback);
};


/**
 * @param {!proto.userlogin.UserInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userlogin.LoginReply>}
 *     A native promise that resolves to the response
 */
proto.userlogin.UserPromiseClient.prototype.loginIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userlogin.User/LoginIn',
      request,
      metadata || {},
      methodDescriptor_User_LoginIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userlogin.UserLoginInfo,
 *   !proto.userlogin.IsReply>}
 */
const methodDescriptor_User_IsLogin = new grpc.web.MethodDescriptor(
  '/userlogin.User/IsLogin',
  grpc.web.MethodType.UNARY,
  proto.userlogin.UserLoginInfo,
  proto.userlogin.IsReply,
  /** @param {!proto.userlogin.UserLoginInfo} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userlogin.IsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userlogin.UserLoginInfo,
 *   !proto.userlogin.IsReply>}
 */
const methodInfo_User_IsLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userlogin.IsReply,
  /** @param {!proto.userlogin.UserLoginInfo} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userlogin.IsReply.deserializeBinary
);


/**
 * @param {!proto.userlogin.UserLoginInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userlogin.IsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userlogin.IsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userlogin.UserClient.prototype.isLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userlogin.User/IsLogin',
      request,
      metadata || {},
      methodDescriptor_User_IsLogin,
      callback);
};


/**
 * @param {!proto.userlogin.UserLoginInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userlogin.IsReply>}
 *     A native promise that resolves to the response
 */
proto.userlogin.UserPromiseClient.prototype.isLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userlogin.User/IsLogin',
      request,
      metadata || {},
      methodDescriptor_User_IsLogin);
};


module.exports = proto.userlogin;

