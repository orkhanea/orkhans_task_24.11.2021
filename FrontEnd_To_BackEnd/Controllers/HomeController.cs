using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FrontEnd_To_BackEnd.Models;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class HomeController : Controller
    {
       

        public IActionResult Index()
        {
            ViewBag.isHomePage = true;
            return View();
        }

       
    }
}
