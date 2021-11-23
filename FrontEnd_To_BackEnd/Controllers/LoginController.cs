using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.isLogin = true;
            return View();
        }
    }
}