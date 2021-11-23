using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class Service1Controller : Controller
    {
        public IActionResult Index()
        {
            ViewBag.bannerTitleH = "Services";
            ViewBag.bannerTitleP = "Our Services";
            return View();
        }
    }
}