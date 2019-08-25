/**

 *

 * Copyright 2018 Google LLC

 *

 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.

 * You may obtain a copy of the License at

 *

 *     https://www.apache.org/licenses/LICENSE-2.0

 *

 * Unless required by applicable law or agreed to in writing, software

 * distributed under the License is distributed on an "AS IS" BASIS,

 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

 * See the License for the specific language governing permissions and

 * limitations under the License.

 *

 */



const {UserInfo, AddReply,LoginReply,UserLoginInfo, IsReply} = require('./userlogin_pb.js');

const {UserClient} = require('./userlogin_grpc_web_pb.js');



var client = new UserClient('http://' + window.location.hostname + ':8080',

                               null, null);


function runAdduser(data){
    var request = new UserInfo();
    var rsdat = {};
    request.setName(data["username"]);
    request.setPassword(data["password"]);
    client.AddUser(request, {}, (err, response) => {
        rsdat ={
            "msg":response.getMessage(),
            "rcd":response.getRscode()
        } 
      });
      return rsdat;
}

function runLoginin(data){
    var request = new UserInfo();
    var rsdat = {};
    request.setName(data["name"]);
    request.setPassword(data["pwd"]);
    client.LoginIn(request, {}, (err, response) => {
        rsdat ={
            "msg":response.getMessage(),
            "hcd":response.getRscode(),
            "hld":response.getHandlecode()
        } 
      });
      return rsdat;
}
function runIslogin(data){
    var request = new UserLoginInfo();
    var rsdat = {};
    request.setName(data["name"]);
    request.setHandlecode(data["hld"]);
    client.IsLogin(request, {}, (err, response) => {
        rsdat ={
            "msg":response.getMessage()
        } 
      });
      return rsdat;
}