#include <grpc/grpc.h>
#include <grpc++/server.h>
#include <grpc++/server_builder.h>
#include <grpc++/server_context.h>
#include <grpc++/security/server_credentials.h>
#include "usrhd.h"
#ifdef BAZEL_BUILD
#include "myfirstprj/protos/userlogin.grpc.pb.h"
#else
#include "userlogin.grpc.pb.h"
#endif


using userlogin::User;
using userlogin::UserInfo;
using userlogin::UserLoginInfo;
using userlogin::AddReply;
using userlogin::LoginReply;
using userlogin::IsReply;

class UserImpl final : public User::Service
{
  grpc::Status AddUser(grpc::ServerContext *context, const UserInfo *request, 
                             AddReply *response) override
  {
     auto username = request -> name();
     auto password = request -> password();
     std::string rs = inserUser(username,password);
     response -> set_rscode(rs.substr(0,3));
     response-> set_message(rs.substr(4,rs.size()));
     return grpc::Status::OK;     
} 

  grpc::Status LoginIn(grpc::ServerContext *context, const UserInfo *request, 
                             LoginReply *response) override
  {
     auto username = request -> name();
     auto password = request -> password();
     std::string handcode = GetSystemTime(); //lock
     std::string rs = loginUser(username,password,handcode);
     response -> set_rscode(rs.substr(0,3));
     response -> set_message(rs.substr(4,rs.size()));
     response -> set_handlecode(handcode);
     return grpc::Status::OK;
}
  grpc::Status IsLogin(grpc::ServerContext *context, const UserLoginInfo *request, 
                            IsReply *response) override
  {
     auto username = request -> name();
     auto handcode = request -> handlecode();
     std::string rs = islogined(username,handcode);
     response-> set_message(rs);
     return grpc::Status::OK;
}
};

  int main(int argc, char *argv[])
{
    std::string addr = "0.0.0.0:5000";
    UserImpl service;
    grpc::ServerBuilder builder;
    builder.AddListeningPort(addr, grpc::InsecureServerCredentials());
    builder.RegisterService(&service);
    auto server = builder.BuildAndStart();
    std::cout << "Server listening on " << addr << std::endl;
    server->Wait();

    return 0;
}

