using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class TeamController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.bannerTitleH = "Team";
            ViewBag.bannerTitleP = "Meet Our experts always ready to help you";
            return View();
        }
    }
}