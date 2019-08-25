#ifndef USRHD_H_INCLUDED
#define USRHD_H_INCLUDED

#include <string>
using namespace std;
string inserUser(string name, string pwd);
string loginUser(string name, string pwd, string hldcod);
string islogined(string name, string hldcod);
string GetSystemTime();
#endif // USRHD_H_INCLUDED
