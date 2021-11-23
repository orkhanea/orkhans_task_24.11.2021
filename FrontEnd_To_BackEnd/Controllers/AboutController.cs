using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.bannerTitleH = "About";
            ViewBag.bannerTitleP = "The Strax Story";
            ViewBag.isAboutPage = true;
            return View();
        }
    }
}