#include <iostream>
#include <string>
#include <time.h>
#include <sstream> 
#include <cstdlib>
#include <ctime>
#include <chrono>
#include "sqlite3.h"
using namespace std;

#define random(x) rand()%(x)
#define DB_PATH "userdb.db"


sqlite3* opendb() {
	sqlite3* db;
	int rc = sqlite3_open(DB_PATH, &db);
	if (rc != SQLITE_OK) {
		db = NULL;
	}
	return db;
}

string updsql(string sql) {
	char* errMsg;
	string result;
	sqlite3* db = opendb();
	if (db != NULL) {
		int rs = sqlite3_exec(db, sql.c_str(), 0, 0, &errMsg);
			if (rs == SQLITE_OK) {
				result = "100:success";
			}
			else if (rs == SQLITE_CONSTRAINT) {
				string errstr(errMsg);
				result = "101:" + errstr;
			}
			else {
				string errstr(errMsg);
				result = "102:" + errstr;
			}
	}
	else {
		result = "001:open db fail";
	}
	sqlite3_close(db);
	return result;

}
string qrysql(string sql, bool flag) {
	string result;
	char* errMsg;
	int nCols;
	int nRows;
	char** azResult;
	sqlite3* db = opendb();
	if (db != NULL) {
		sqlite3_get_table(db, sql.c_str(), &azResult, &nRows, &nCols, &errMsg);
			if (nRows == 0) {
				result = "201:no result";
			}
			else if (nRows > 1) {
				result = "202:too many";
			}
			else {
				if (flag) {
					string hld(azResult[1]);
					result = "200:" + hld;
				}
				else {
					result = "200:success";
				}
				
			}
	}
	else {
		result = "001:open db fail";
	}
	sqlite3_close(db);
	return result;

}

string cmpcod(string srcstr, string desstr) {
	string result;
	int srci = stol(srcstr, 0, 10);
	int desi = stol(desstr, 0, 10);
	if (srci < desi) {
		result = "301:loginout";
	}
	else {
		result = "300:loginin";
	}
	return result;
}


string inserUser(string name, string pwd) {
	string result;
	string sql= "insert into user (username,password) values ('" + name + "','" + pwd + "')";
	cout << sql << endl;
	result = updsql(sql);
	return result;
}

string loginUser(string name, string pwd, string hldcod) {
	string result;
	string sql = "select * from user where username='" + name + "' and password='" + pwd + "'";
	string rs = qrysql(sql, false);
	if (rs.substr(0, 3) == "200") {
		string inssql = "update user set holdcod = '"+hldcod+"' where username ='" + name + "' and password='" + pwd + "'";
		result = updsql(inssql);
	}
	else {
		result = rs;
	}
	return result;

}

string islogined(string name, string hldcod) {
	string result;
	string sql = "select holdcod from user where username='" + name + "'";
	string rs = qrysql(sql, true);
	if (rs.substr(0, 3) == "200") {
		string xhld = rs.substr(4,(rs.size()-6));
		result = cmpcod(hldcod.substr(0, hldcod.size() - 2), xhld);
	}
	else {
		result = rs;
	}
	return result;
}

string GetSystemTime() {
	srand((int)time(0));
	string strSystime = "";
	time_t systime = time(NULL);
	stringstream ss;
	ss << systime;
	strSystime = ss.str() + std::to_string(random(100));
	return strSystime;
}
