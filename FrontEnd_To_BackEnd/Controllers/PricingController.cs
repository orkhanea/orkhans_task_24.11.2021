using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class PricingController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.bannerTitleH = "Transparent Pricing";
            ViewBag.bannerTitleP = "Border-less account pricing";
            return View();
        }
    }
}