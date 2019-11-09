using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestWebAPI.Models;
using TestWebAPI.Repositories;

namespace TestWebAPI.Controllers
{
    public class UserController : ApiController
    {
        Database1Entities _db;
        IGenericRepository<Table> _user;

        public UserController()
        {
            _db = new Database1Entities();
            _user = new GenericRepository<Table>(_db);
        }

        // GET api/values
        public ResponseViewModel GetALL()
        {
            ResponseViewModel res = new ResponseViewModel();

            try
            {
                var data = _user.GetAll();
                res.Data = data;
                res.Success = true;
                res.Message = "取得資料成功";
            }
            catch
            {
                res.Success = false;
                res.Message = "取得資料失敗";
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:dd");
            return res;
        }

        // GET api/values/5
        public ResponseViewModel Get(int id)
        {
            ResponseViewModel res = new ResponseViewModel();

            try
            {
                var data = _user.FindBy(x => x.Id == id).FirstOrDefault();
                res.Data = data;
                res.Success = true;
                res.Message = "取得資料成功";
            }
            catch
            {
                res.Success = false;
                res.Message = "取得資料失敗";
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:dd");
            return res;
        }

        // POST api/values
        public ResponseViewModel Post(Table value)
        {
            ResponseViewModel res = new ResponseViewModel();

            try
            {
                _user.Create(value);
                res.Success = true;
                res.Message = "新增資料成功";
            }
            catch
            {
                res.Success = false;
                res.Message = "新增資料失敗";
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:dd");
            return res;
        }

        // PUT api/values/5
        public ResponseViewModel Put(int id, Table value)
        {
            ResponseViewModel res = new ResponseViewModel();

            try
            {
                var data = _user.FindBy(x => x.Id == id);
                if (data.Any())
                {
                    _user.Update(value);
                    res.Success = true;
                    res.Message = "更新資料成功";
                }
            }
            catch
            {
                res.Success = false;
                res.Message = "更新資料失敗";
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:dd");
            return res;
        }

        // DELETE api/values/5
        public ResponseViewModel Delete(int id)
        {
            ResponseViewModel res = new ResponseViewModel();

            try
            {
                var data = _user.FindBy(x => x.Id == id).FirstOrDefault();
                if (data != null)
                {
                    _user.Delete(data);
                    res.Success = true;
                    res.Message = "更新資料成功";
                }
            }
            catch
            {
                res.Success = false;
                res.Message = "更新資料失敗";
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:dd");
            return res;
        }
    }
}
