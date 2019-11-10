using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestWebAPI.Models;
using TestWebAPI.Repositories;

namespace TestWebAPI.Controllers
{
    public class HomeController : Controller
    {
        Database1Entities _db;
        IGenericRepository<Table> _user;

        public HomeController()
        {
            _db = new Database1Entities();
            _user = new GenericRepository<Table>(_db);
        }

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ResponseViewModel CreateUser(string UserName, string PhoneNumber, string Address, string Sex)
        {
            ResponseViewModel res = new ResponseViewModel();

            var userNum = _user.GetAll().OrderByDescending(x => x.Id).FirstOrDefault().Id;

            Table user = new Table();
            user.Id = userNum + 1;
            user.UserName = UserName;
            user.PhonuNumber = PhoneNumber;
            user.Address = Address;
            if (Sex == "男")
            {
                user.Sex = 0;
            }
            else
            {
                user.Sex = 1;
            }


            try
            {
                _user.Create(user);
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

        [HttpPost]
        public ResponseViewModel EditUser(string Id, string UserName, string PhoneNumber, string Address, string Sex)
        {
            ResponseViewModel res = new ResponseViewModel();

            var userId = Convert.ToInt32(Id);

            var user = _user.FindBy(x => x.Id == userId).FirstOrDefault();

            user.UserName = UserName;
            user.PhonuNumber = PhoneNumber;
            user.Address = Address;
            if (Sex == "男")
            {
                user.Sex = 0;
            }
            else
            {
                user.Sex = 1;
            }

            try
            {
                _user.Update(user);
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

    }
}

