using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class Service2Controller : Controller
    {
        public IActionResult Index()
        {
            ViewBag.bannerTitleH = "Service Details";
            ViewBag.bannerTitleP = "";
            return View();
        }
    }
}